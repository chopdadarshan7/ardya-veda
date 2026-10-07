/* =========================================================================
   ARDYA VEDA — PRAKRITI ASSESSMENT QUIZ MODULE
   ========================================================================= */

const quizQuestions = [
  {
    category: "PHYSICAL FRAME",
    question: "What best describes your natural body frame throughout your lifetime?",
    help: "Think about your natural bone structure, not recent changes in weight.",
    options: [
      { text: "Thin or tall and lean, difficulty gaining weight, prominent joints and bones", dosha: "vata" },
      { text: "Medium, athletic, well-proportioned, moderate build with good muscle tone", dosha: "pitta" },
      { text: "Broad, sturdy, solid frame, gains weight easily, heavy bone structure", dosha: "kapha" }
    ]
  },
  {
    category: "DIGESTION & AGNI",
    question: "How has your appetite and digestive fire typically been?",
    help: "Focus on your general pattern over years.",
    options: [
      { text: "Irregular — sometimes ravenous, other times skipping without hunger, prone to gas", dosha: "vata" },
      { text: "Strong and sharp — I get irritable or lightheaded if a meal is delayed, prone to acidity", dosha: "pitta" },
      { text: "Steady and slow — I can comfortably skip meals, digestion is heavy and gradual", dosha: "kapha" }
    ]
  },
  {
    category: "STRESS & EMOTION",
    question: "When you face sudden difficulty or acute pressure, your first natural reaction is:",
    help: "Your baseline emotional autonomic response.",
    options: [
      { text: "Anxiety, worry, racing thoughts — I feel scattered and need to talk or move", dosha: "vata" },
      { text: "Frustration, irritability, anger — I want to take charge and fix it immediately", dosha: "pitta" },
      { text: "Calm withdrawal, patient endurance — I absorb it quietly and wait for clarity", dosha: "kapha" }
    ]
  },
  {
    category: "TEMPERATURE PREFERENCE",
    question: "How do your body and comfort react to different weather and climates?",
    help: "Your thermal sensitivity.",
    options: [
      { text: "Dislike cold and dry wind, poor blood circulation in hands/feet, crave warm baths", dosha: "vata" },
      { text: "Overheat easily, sweat quickly, love cool breezes and cold drinks, dislike humid heat", dosha: "pitta" },
      { text: "Dislike damp cold, comfortable in most moderate temperatures, resilient stamina", dosha: "kapha" }
    ]
  },
  {
    category: "SLEEP ARCHITECTURE",
    question: "What characterizes your natural sleep cycle?",
    help: "Your regular sleep quality without sleep aids.",
    options: [
      { text: "Light, irregular, easily awakened by subtle sounds, wake up thinking about tasks", dosha: "vata" },
      { text: "Sound and moderate (6–7 hours), vivid and intense dreams, wake up alert", dosha: "pitta" },
      { text: "Deep, heavy, uninterrupted (8+ hours), hard to wake up before sunrise", dosha: "kapha" }
    ]
  },
  {
    category: "SKIN & COMPLEXION",
    question: "What is the natural texture of your skin?",
    help: "Baseline skin quality without heavy lotions.",
    options: [
      { text: "Dry, rough, thin, prone to cracking or ashiness in winter", dosha: "vata" },
      { text: "Warm, oily T-zone, prone to redness, flushing, moles, or breakouts", dosha: "pitta" },
      { text: "Thick, soft, cool, well-hydrated, smooth and supple", dosha: "kapha" }
    ]
  },
  {
    category: "JOINT MOBILITY",
    question: "How do your joints and physical movement feel?",
    help: "Movement characteristics.",
    options: [
      { text: "Prone to cracking or popping sounds, stiff in cold weather, agile", dosha: "vata" },
      { text: "Flexible, loose ligaments, warm to touch, good stamina in sports", dosha: "pitta" },
      { text: "Large, sturdy, well-lubricated joints, steady endurance without fatigue", dosha: "kapha" }
    ]
  },
  {
    category: "COGNITIVE SPEED",
    question: "How does your mind acquire and retain new knowledge?",
    help: "Learning style.",
    options: [
      { text: "Grasp concepts very fast, highly creative, but forget details just as quickly", dosha: "vata" },
      { text: "Methodical, sharp critical thinking, organize information logically, strong memory", dosha: "pitta" },
      { text: "Take time to absorb concepts, but once learned, remember them for decades", dosha: "kapha" }
    ]
  },
  {
    category: "SPEECH & CONVERSATION",
    question: "What best describes your speech pattern?",
    help: "Communication cadence.",
    options: [
      { text: "Fast, talkative, enthusiastic, sometimes skipping between different topics", dosha: "vata" },
      { text: "Clear, persuasive, direct, articulate, sometimes sharp or debate-driven", dosha: "pitta" },
      { text: "Slow, calm, soothing, thoughtful, speaks only when necessary", dosha: "kapha" }
    ]
  },
  {
    category: "CHILDHOOD RETROSPECTIVE (VIKRITI CHECK)",
    question: "Looking back at your body and demeanor as a child (ages 6–12), you were predominantly:",
    help: "Crucial for identifying your true birth Prakriti vs temporary adult imbalances.",
    options: [
      { text: "Thin, hyperactive, fidgety, quick-talking, imaginative, sensitive to cold", dosha: "vata" },
      { text: "Competitive, energetic, sharp-tongued, leader among peers, red-cheeked", dosha: "pitta" },
      { text: "Plump, calm, slow to anger, sound sleeper, physically robust and peaceful", dosha: "kapha" }
    ]
  }
];

let quizCurrentIndex = 0;
let quizAnswers = [];

function openAssessmentModal() {
  const modal = document.getElementById('assessment-modal');
  if (modal) {
    modal.classList.add('open');
    quizCurrentIndex = 0;
    quizAnswers = [];
    showQuizStage('welcome');
  } else {
    // If on a standalone subpage without modal, navigate to assessment.html
    window.location.href = 'assessment.html';
  }
}

function closeAssessmentModal() {
  document.getElementById('assessment-modal')?.classList.remove('open');
}

function showQuizStage(stage) {
  document.getElementById('quiz-stage-welcome')?.classList.toggle('active', stage === 'welcome');
  document.getElementById('quiz-stage-questions')?.classList.toggle('active', stage === 'questions');
  document.getElementById('quiz-stage-result')?.classList.toggle('active', stage === 'result');
}

function startAssessmentFlow() {
  showQuizStage('questions');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizQuestions[quizCurrentIndex];
  if (!q) return;

  const catTag = document.getElementById('quiz-category-tag');
  const stepCount = document.getElementById('quiz-step-count');
  const titleEl = document.getElementById('quiz-question-title');
  const helpEl = document.getElementById('quiz-question-help');
  const progressFill = document.getElementById('quiz-progress-fill');
  const optionsContainer = document.getElementById('quiz-options-container');
  const prevBtn = document.getElementById('quiz-prev-btn');

  if (catTag) catTag.textContent = q.category;
  if (stepCount) stepCount.textContent = `Question ${quizCurrentIndex + 1} of ${quizQuestions.length}`;
  if (titleEl) titleEl.textContent = q.question;
  if (helpEl) helpEl.textContent = q.help;

  const percent = Math.round(((quizCurrentIndex) / quizQuestions.length) * 100);
  if (progressFill) progressFill.style.width = `${percent}%`;

  const letters = ['A', 'B', 'C'];
  if (optionsContainer) {
    optionsContainer.innerHTML = q.options.map((opt, i) => `
      <button class="quiz-option-btn" onclick="selectQuizAnswer(${i})">
        <span class="option-letter-badge">${letters[i]}</span>
        <span>${opt.text}</span>
      </button>
    `).join('');
  }

  if (prevBtn) {
    prevBtn.style.visibility = quizCurrentIndex > 0 ? 'visible' : 'hidden';
  }
}

function selectQuizAnswer(optionIndex) {
  const q = quizQuestions[quizCurrentIndex];
  quizAnswers[quizCurrentIndex] = q.options[optionIndex].dosha;

  if (quizCurrentIndex < quizQuestions.length - 1) {
    quizCurrentIndex++;
    renderQuizQuestion();
  } else {
    calculateAndShowPrakriti();
  }
}

function prevQuizQuestion() {
  if (quizCurrentIndex > 0) {
    quizCurrentIndex--;
    renderQuizQuestion();
  }
}

function calculateAndShowPrakriti() {
  let vataCount = 0;
  let pittaCount = 0;
  let kaphaCount = 0;

  quizAnswers.forEach(ans => {
    if (ans === 'vata') vataCount++;
    if (ans === 'pitta') pittaCount++;
    if (ans === 'kapha') kaphaCount++;
  });

  const total = quizAnswers.length;
  const vataPct = Math.round((vataCount / total) * 100);
  const pittaPct = Math.round((pittaCount / total) * 100);
  const kaphaPct = Math.max(0, 100 - (vataPct + pittaPct));

  const scores = [
    { name: 'Vata', pct: vataPct, code: 'V' },
    { name: 'Pitta', pct: pittaPct, code: 'P' },
    { name: 'Kapha', pct: kaphaPct, code: 'K' }
  ].sort((a, b) => b.pct - a.pct);

  const primary = scores[0];
  const secondary = scores[1];

  let resultTitle = `${primary.name} - ${secondary.name}`;
  let resultEmblem = `${primary.code}${secondary.code}`;
  let resultSub = "Dual-Dosha Dynamic Constitution";

  if (primary.pct >= 60) {
    resultTitle = `Pure ${primary.name} (Ekadoshaja)`;
    resultEmblem = primary.code;
    resultSub = `Predominant ${primary.name} Constitution`;
  }

  const domEl = document.getElementById('result-dominant-dosha');
  const subEl = document.getElementById('result-dominant-subtitle');
  const badgeEl = document.getElementById('result-card-badge');

  if (domEl) domEl.textContent = resultTitle;
  if (subEl) subEl.textContent = resultSub;
  if (badgeEl) badgeEl.textContent = resultEmblem;

  const vataTxt = document.getElementById('vata-percentage-text');
  const vataFill = document.getElementById('vata-meter-fill');
  if (vataTxt) vataTxt.textContent = `${vataPct}%`;
  if (vataFill) vataFill.style.width = `${vataPct}%`;

  const pittaTxt = document.getElementById('pitta-percentage-text');
  const pittaFill = document.getElementById('pitta-meter-fill');
  if (pittaTxt) pittaTxt.textContent = `${pittaPct}%`;
  if (pittaFill) pittaFill.style.width = `${pittaPct}%`;

  const kaphaTxt = document.getElementById('kapha-percentage-text');
  const kaphaFill = document.getElementById('kapha-meter-fill');
  if (kaphaTxt) kaphaTxt.textContent = `${kaphaPct}%`;
  if (kaphaFill) kaphaFill.style.width = `${kaphaPct}%`;

  const dietEl = document.getElementById('proto-diet-text');
  const routineEl = document.getElementById('proto-routine-text');

  if (primary.name === 'Vata') {
    if (dietEl) dietEl.textContent = "Favor warm, grounding, unctuous meals (khichdi, cooked grains, A2 cow ghee). Avoid cold raw salads, iced beverages, and dry crackers.";
    if (routineEl) routineEl.textContent = "Daily warm sesame oil Abhyanga massage, steady rhythmic routine, early sleep by 10 PM to protect the Vata nervous system.";
  } else if (primary.name === 'Pitta') {
    if (dietEl) dietEl.textContent = "Favor sweet, bitter, and astringent tastes (ghee, basmati rice, coriander, cooling cucumber, coconut water). Limit pungent chilies, alcohol, and fermented foods.";
    if (routineEl) routineEl.textContent = "Moonlight walks, cooling pranayama (Sheetali), calming meditation, avoid midday harsh sunlight and competitive stress.";
  } else {
    if (dietEl) dietEl.textContent = "Favor light, warm, pungent, and bitter foods with warming spices (ginger, black pepper, pippali). Minimize heavy dairy, refined sugars, and deep-fried dishes.";
    if (routineEl) routineEl.textContent = "Vigorous morning exercise (Vyayama) at half-strength, dry powder massage (Udvartana), wake up before 6 AM to dispel heaviness.";
  }

  const childhoodAns = quizAnswers[9];
  const adultDominant = primary.name.toLowerCase();
  const vikritiTextEl = document.getElementById('proto-vikriti-text');

  if (childhoodAns && childhoodAns !== adultDominant) {
    if (vikritiTextEl) vikritiTextEl.innerHTML = `<strong>Vikriti Notice:</strong> Your childhood answers indicate a <em>${childhoodAns.toUpperCase()}</em> foundation, but your current answers lean <em>${adultDominant.toUpperCase()}</em>. This suggests an acquired lifestyle imbalance (Vikriti). Review with a Vaidya for Nadi Pariksha verification.`;
  } else {
    if (vikritiTextEl) vikritiTextEl.textContent = "Your lifetime constitutional pattern is coherent and confirmed. Maintain this alignment with seasonal Ritucharya routines.";
  }

  const savedProfile = {
    title: resultTitle,
    vataPct,
    pittaPct,
    kaphaPct,
    date: new Date().toLocaleDateString()
  };
  localStorage.setItem('ardya_prakriti', JSON.stringify(savedProfile));

  showQuizStage('result');

  if (window.confetti) {
    window.confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C4A77D', '#6B7F5E', '#F5F0E8']
    });
  }
}

function retakeAssessment() {
  quizCurrentIndex = 0;
  quizAnswers = [];
  showQuizStage('welcome');
}

function savePrakritiCard() {
  const cardData = localStorage.getItem('ardya_prakriti');
  if (cardData) {
    navigator.clipboard?.writeText(`Ardya Veda Prakriti Card: ${cardData}`);
    alert("Prakriti Card details copied to clipboard! You can also screenshot or print this card.");
  } else {
    alert("Please complete the assessment first.");
  }
}

function bookConsultWithResults() {
  closeAssessmentModal();
  if (typeof openConsultModal === 'function') {
    openConsultModal('sumit-raina');
  } else {
    window.location.href = 'consult.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.trigger-assessment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If we are already on assessment.html, just start flow or scroll up
      if (window.location.pathname.endsWith('assessment.html')) {
        startAssessmentFlow();
      } else {
        openAssessmentModal();
      }
    });
  });

  document.getElementById('open-assessment-nav-btn')?.addEventListener('click', openAssessmentModal);
});
