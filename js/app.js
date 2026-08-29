// Quiz-Logik für das Neustart-Schweden-Quiz.
// Steuert Navigation zwischen Kategorie-Auswahl, Fragen-Screen und Ergebnis-Screen.

const state = {
  categoryId: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false
};

const screens = {
  categories: document.getElementById("screen-categories"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result")
};

const categoryGrid = document.getElementById("category-grid");
const quizCategoryLabel = document.getElementById("quiz-category-label");
const progressFill = document.getElementById("progress-fill");
const progressLabel = document.getElementById("progress-label");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
const feedbackBox = document.getElementById("feedback-box");
const nextButton = document.getElementById("next-button");
const quitButton = document.getElementById("quit-button");

const resultScoreEl = document.getElementById("result-score");
const resultTitleEl = document.getElementById("result-title");
const resultMessageEl = document.getElementById("result-message");
const retryButton = document.getElementById("retry-button");
const otherCategoryButton = document.getElementById("other-category-button");

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  QUIZ_CATEGORIES.forEach((category) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.type = "button";
    card.innerHTML = `
      <span class="category-emoji" aria-hidden="true">${category.emoji}</span>
      <span class="category-title">${category.title}</span>
      <span class="category-desc">${category.description}</span>
      <span class="category-count">${category.questions.length} Fragen</span>
    `;
    card.addEventListener("click", () => startQuiz(category.id));
    categoryGrid.appendChild(card);
  });
}

function startQuiz(categoryId) {
  const category = QUIZ_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return;

  state.categoryId = categoryId;
  state.questions = category.questions;
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  quizCategoryLabel.textContent = `${category.emoji} ${category.title}`;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  state.answered = false;

  const total = state.questions.length;
  const current = state.currentIndex + 1;
  progressFill.style.width = `${((state.currentIndex) / total) * 100}%`;
  progressLabel.textContent = `Frage ${current} von ${total}`;

  questionText.textContent = question.question;
  feedbackBox.textContent = "";
  feedbackBox.className = "feedback-box";
  nextButton.hidden = true;

  answersList.innerHTML = "";
  question.answers.forEach((answerText, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer-button";
    btn.textContent = answerText;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    li.appendChild(btn);
    answersList.appendChild(li);
  });
}

function selectAnswer(selectedIndex, buttonEl) {
  if (state.answered) return;
  state.answered = true;

  const question = state.questions[state.currentIndex];
  const isCorrect = selectedIndex === question.correct;
  if (isCorrect) state.score += 1;

  const buttons = answersList.querySelectorAll(".answer-button");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  feedbackBox.textContent = question.explanation;
  feedbackBox.classList.add(isCorrect ? "correct" : "incorrect");

  const total = state.questions.length;
  progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;

  nextButton.hidden = false;
  nextButton.textContent =
    state.currentIndex + 1 < total ? "Nächste Frage →" : "Ergebnis anzeigen →";
  nextButton.focus();
}

function goToNext() {
  if (state.currentIndex + 1 < state.questions.length) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = state.questions.length;
  const score = state.score;
  const percent = Math.round((score / total) * 100);

  resultScoreEl.textContent = `${score} / ${total}`;

  let title;
  let message;
  if (percent >= 90) {
    title = "Schweden-Profi! 🇸🇪";
    message = "Beeindruckend – du kennst dich schon richtig gut aus. Fika-Pause verdient!";
  } else if (percent >= 60) {
    title = "Auf gutem Weg 👍";
    message = "Solide Grundlagen! Ein paar Themen kannst du dir noch genauer anschauen.";
  } else {
    title = "Guter Start 🌱";
    message = "Kein Problem – jeder Neustart beginnt mit Lernen. Schau dir gern weitere Kategorien an.";
  }

  resultTitleEl.textContent = title;
  resultMessageEl.textContent = message;
  showScreen("result");
}

nextButton.addEventListener("click", goToNext);
quitButton.addEventListener("click", () => showScreen("categories"));
retryButton.addEventListener("click", () => startQuiz(state.categoryId));
otherCategoryButton.addEventListener("click", () => showScreen("categories"));

renderCategories();
showScreen("categories");
