// Quiz-Logik für das Neustart-Schweden-Quiz.
// Steuert Navigation zwischen Track-/Kategorie-Auswahl, Fragen-Screen und Ergebnis-Screen.

const state = {
  trackId: null,
  categoryId: null,
  mixed: false,
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

const trackTabs = document.getElementById("track-tabs");
const categoryGrid = document.getElementById("category-grid");
const quizCategoryLabel = document.getElementById("quiz-category-label");
const progressFill = document.getElementById("progress-fill");
const progressLabel = document.getElementById("progress-label");
const difficultyBadge = document.getElementById("difficulty-badge");
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

function getCurrentTrack() {
  return QUIZ_TRACKS.find((t) => t.id === state.trackId) || QUIZ_TRACKS[0];
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const DIFFICULTY_ORDER = { leicht: 0, mittel: 1, schwer: 2 };
const DIFFICULTY_LABEL = { leicht: "🟢 Leicht", mittel: "🟡 Mittel", schwer: "🔴 Schwer" };

// Baut aus einem Fragenpool eine Auswahl, die von leicht nach schwer ansteigt
// (für das "Große Quiz" – Millionär-artiger Spannungsbogen statt Zufallsmischung).
function buildDifficultyRamp(questions, count) {
  const buckets = { leicht: [], mittel: [], schwer: [] };
  questions.forEach((q) => {
    const level = buckets[q.difficulty] ? q.difficulty : "mittel";
    buckets[level].push(q);
  });
  Object.keys(buckets).forEach((level) => {
    buckets[level] = shuffle(buckets[level]);
  });

  const levels = ["leicht", "mittel", "schwer"];
  const base = Math.floor(count / levels.length);
  const quotas = { leicht: base, mittel: base, schwer: count - base * 2 };

  const picked = [];
  levels.forEach((level) => {
    const take = Math.min(quotas[level], buckets[level].length);
    picked.push(...buckets[level].slice(0, take));
  });

  let remaining = count - picked.length;
  if (remaining > 0) {
    const leftover = levels.flatMap((level) => buckets[level].slice(quotas[level]));
    picked.push(...shuffle(leftover).slice(0, remaining));
  }

  return picked.sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
}

// Fortschritt (beste Punktzahl je Kategorie) im Browser speichern.
const PROGRESS_KEY = "nsq_progress_v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(trackId, categoryKey, score, total) {
  try {
    const progress = loadProgress();
    const existing = progress[trackId]?.[categoryKey];
    if (!existing || score > existing.best) {
      progress[trackId] = progress[trackId] || {};
      progress[trackId][categoryKey] = { best: score, total, at: Date.now() };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  } catch {
    // localStorage nicht verfügbar (z. B. privater Modus) – Fortschritt einfach nicht speichern
  }
}

function getProgress(trackId, categoryKey) {
  try {
    return loadProgress()[trackId]?.[categoryKey] || null;
  } catch {
    return null;
  }
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTrackTabs() {
  trackTabs.innerHTML = "";
  QUIZ_TRACKS.forEach((track) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "track-tab";
    btn.classList.toggle("active", track.id === state.trackId);
    btn.innerHTML = `<span aria-hidden="true">${track.emoji}</span> ${track.title}`;
    btn.addEventListener("click", () => {
      state.trackId = track.id;
      renderTrackTabs();
      renderCategories();
    });
    trackTabs.appendChild(btn);
  });
}

function renderCategories() {
  const track = getCurrentTrack();
  categoryGrid.innerHTML = "";

  if (!track.categories.length) {
    const empty = document.createElement("p");
    empty.className = "category-empty";
    empty.textContent = "Für diesen Bereich kommen die Fragen in Kürze dazu.";
    categoryGrid.appendChild(empty);
    return;
  }

  const totalQuestions = track.categories.reduce((sum, c) => sum + c.questions.length, 0);
  const mixCount = Math.min(track.mixCount || 15, totalQuestions);

  const mixCard = document.createElement("button");
  mixCard.className = "category-card mix-card";
  mixCard.type = "button";
  mixCard.innerHTML = `
    <span class="category-emoji" aria-hidden="true">🔀</span>
    <span class="category-title">Großes ${track.title}-Quiz</span>
    <span class="category-desc">Von leicht bis schwer – Fragen aus allen ${track.categories.length} Kategorien dieses Bereichs, mit steigendem Schwierigkeitsgrad.</span>
    <span class="category-count">${mixCount} Fragen</span>
    ${progressBadge(track.id, "__mixed__")}
  `;
  mixCard.addEventListener("click", () => startMixedQuiz(track.id));
  categoryGrid.appendChild(mixCard);

  track.categories.forEach((category) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.type = "button";
    card.innerHTML = `
      <span class="category-emoji" aria-hidden="true">${category.emoji}</span>
      <span class="category-title">${category.title}</span>
      <span class="category-desc">${category.description}</span>
      <span class="category-count">${category.questions.length} Fragen</span>
      ${progressBadge(track.id, category.id)}
    `;
    card.addEventListener("click", () => startQuiz(track.id, category.id));
    categoryGrid.appendChild(card);
  });
}

function progressBadge(trackId, categoryKey) {
  const record = getProgress(trackId, categoryKey);
  if (!record) return "";
  const percent = Math.round((record.best / record.total) * 100);
  return `<span class="progress-badge">✓ Beste Runde: ${record.best}/${record.total} (${percent}%)</span>`;
}

function startQuiz(trackId, categoryId) {
  const track = QUIZ_TRACKS.find((t) => t.id === trackId);
  const category = track && track.categories.find((c) => c.id === categoryId);
  if (!category) return;

  state.trackId = trackId;
  state.categoryId = categoryId;
  state.mixed = false;
  state.questions = category.questions;
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  quizCategoryLabel.textContent = `${category.emoji} ${category.title}`;
  showScreen("quiz");
  renderQuestion();
}

function startMixedQuiz(trackId) {
  const track = QUIZ_TRACKS.find((t) => t.id === trackId);
  if (!track) return;

  const allQuestions = track.categories.flatMap((c) => c.questions);
  const mixCount = Math.min(track.mixCount || 15, allQuestions.length);

  state.trackId = trackId;
  state.categoryId = null;
  state.mixed = true;
  state.questions = buildDifficultyRamp(allQuestions, mixCount);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  quizCategoryLabel.textContent = `🔀 Großes ${track.title}-Quiz`;
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

  if (state.mixed && question.difficulty) {
    difficultyBadge.textContent = DIFFICULTY_LABEL[question.difficulty] || "";
    difficultyBadge.hidden = false;
  } else {
    difficultyBadge.hidden = true;
  }

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

  saveProgress(state.trackId, state.mixed ? "__mixed__" : state.categoryId, score, total);

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

function backToCategories() {
  renderCategories();
  showScreen("categories");
}

nextButton.addEventListener("click", goToNext);
quitButton.addEventListener("click", backToCategories);
retryButton.addEventListener("click", () => {
  if (state.mixed) {
    startMixedQuiz(state.trackId);
  } else {
    startQuiz(state.trackId, state.categoryId);
  }
});
otherCategoryButton.addEventListener("click", backToCategories);

state.trackId = QUIZ_TRACKS[0].id;
renderTrackTabs();
renderCategories();
showScreen("categories");
