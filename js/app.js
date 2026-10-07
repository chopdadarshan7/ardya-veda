/* =========================================================================
   ARDYA VEDA — APPLICATION LOGIC & INTERACTIVE SUITE
   ========================================================================= */

// ================= 1. LOCALIZATION DATA (EN & HI) =================
const i18nData = {
  en: {
    navPhilosophy: "Philosophy",
    navConsult: "Consult",
    navNourishment: "Nourishment",
    navHowItWorks: "How It Works",
    navBlog: "Patrika",
    navBegin: "Begin",
    navLogin: "Login",
    navCheckin: "Daily Pariksha",
    navFAQ: "Questions",
    heroTagline1: "Ayurveda that",
    heroTagline2: "moves with you.",
    heroSubtext: "5,000 years of classical Vedic wisdom — personalized for your unique Prakriti, biological rhythms, and modern life.",
    heroCta: "Begin Your Journey",
    heroConsultCta: "Meet Our Vaidyas",
    badgeAssessment: "Free 5-Min Prakriti Quiz",
    badgeVaidyas: "Verified MD Vaidyas",
    badgeCustom: "Classical Samhita Protocols",
    panchangaLive: "DAILY RITU & PANCHANGA",
    checkinToday: "Log 60-Sec Pulse",
    doshaEyebrow: "Your Constitution",
    doshaHeading: "Know Your Nature. Heal Accordingly.",
    doshaSub: "According to Ayurveda, you were born with a unique biological blueprint—your Prakriti. It is the precise ratio of Vata, Pitta, and Kapha that governs your cellular metabolism, digestion, and emotional temperament.",
    howEyebrow: "The Path",
    howHeading: "Four Steps to Harmonious Balance",
    howSub: "From ancient Sanskrit manuscripts to your daily routine in under five minutes.",
    step1Title: "Discover",
    step1Desc: "Complete your Prakriti assessment in under 5 minutes. Understand the unique elemental constitution you were born with.",
    step2Title: "Connect",
    step2Desc: "Speak with a verified Vaidya who understands your pulse, tongue, and constitution to design your tailored healing roadmap.",
    step3Title: "Track",
    step3Desc: "Daily 60-second Pariksha check-ins reveal subtle internal patterns over time. Watch your body intelligence unfold.",
    step4Title: "Thrive",
    step4Desc: "Personalized protocols, meals, and classical Rasayanas — all aligned to your biological nature and the current season.",
    vaidyaEyebrow: "Trusted Classical Practitioners",
    vaidyaTitle1: "Your Vaidya.",
    vaidyaTitle2: "Your Guide.",
    vaidyaCta: "Consult a Vaidya",
    featuredEyebrow: "Our Vaidyas",
    featuredTitle: "Meet the Doctors Behind Ardya",
    nourishEyebrow: "Clinical Precision & Food",
    shadRasa: "Shad Rasa: The Harmony of Six Tastes",
    shadRasaBody: "Ayurvedic dietetics is not about counting calories. It is about balancing the six tastes (Shad Rasa) to naturally regulate endocrine balance, digestive enzymes, and cellular hunger.",
    sanghaEyebrow: "The Sangha",
    sanghaTitle1: "Nobody heals",
    sanghaTitle2: "alone.",
    sanghaBody: "Somewhere between what the doctor told you and what your grandmother told you, there is a room full of people asking the same questions you are.",
    sanghaAsked: "What people are asking in the circles:",
    sanghaInsideLabel: "What is inside the Sangha:",
    sanghaF1: "Your Dosha Circle",
    sanghaF1Note: "Vata, Pitta or Kapha — you are grouped with members built exactly like you to exchange real experiences.",
    sanghaF2: "Today's Panchanga",
    sanghaF2Note: "The astrological and biological season, the herb of the day, and one reflective question to answer.",
    sanghaF3: "Reels That Teach",
    sanghaF3Note: "Vaidya explainers, authentic nuskhe from elder practitioners, and documented case reflections.",
    sanghaCta: "Step Into the Sangha →",
    sanghaFootnote: "Free to join · Someone in there has already been where you are.",
    journalHeadline: "Ayurveda, Written Plainly",
    journalCta: "Explore all articles →",
    ctaTitle: "Begin your journey.",
    ctaBody: "Your constitution was decided at conception. Understanding it is the first step to lifelong balance.",
    ctaAssessment: "Take the 5-Minute Prakriti Assessment →"
  },
  hi: {
    navPhilosophy: "दर्शन",
    navConsult: "वैद्य",
    navNourishment: "आहार",
    navHowItWorks: "क्रम",
    navBlog: "पत्रिका",
    navBegin: "शुरू करें",
    navLogin: "प्रवेश",
    navCheckin: "दैनिक परीक्षा",
    navFAQ: "प्रश्न",
    heroTagline1: "प्राचीन ज्ञान।",
    heroTagline2: "आधुनिक उपचार।",
    heroSubtext: "५,००० वर्ष पुराना शास्त्रीय आयुर्वेद — आपकी अद्वितीय प्रकृति, जैविक लय और आधुनिक जीवन के लिए व्यक्तिगत रूप से निर्मित।",
    heroCta: "अपनी यात्रा शुरू करें",
    heroConsultCta: "हमारे वैद्यों से मिलें",
    badgeAssessment: "निःशुल्क ५-मिनट प्रकृति परीक्षा",
    badgeVaidyas: "सत्यापित एम.डी. वैद्य",
    badgeCustom: "शास्त्रीय संहिता उपचार",
    panchangaLive: "दैनिक ऋतु एवं पञ्चाङ्ग",
    checkinToday: "६०-सेकंड नाड़ी जाँच",
    doshaEyebrow: "आपकी प्रकृति",
    doshaHeading: "अपनी प्रकृति जानें। तदनुसार उपचार करें।",
    doshaSub: "आयुर्वेद के अनुसार, आप एक विशिष्ट जैविक खाके (प्रकृति) के साथ जन्मे थे। वात, पित्त और कफ का सटीक संतुलन ही आपके चयापचय, पाचन और मानसिक स्वभाव को निर्धारित करता है।",
    howEyebrow: "मार्ग",
    howHeading: "संतुलन की ओर चार सरल कदम",
    howSub: "प्राचीन संस्कृत ग्रंथों से आपकी दिनचर्या तक मात्र पाँच मिनट में।",
    step1Title: "पहचानें",
    step1Desc: "५ मिनट से कम समय में अपनी प्रकृति का आकलन करें। अपने जन्मजात शारीरिक स्वभाव को समझें।",
    step2Title: "जुड़ें",
    step2Desc: "सत्यापित वैद्य से परामर्श लें जो आपकी नाड़ी, जिह्वा और प्रकृति के अनुसार मार्गदर्शन प्रदान करते हैं।",
    step3Title: "निरीक्षण",
    step3Desc: "दैनिक ६०-सेकंड की परीक्षा से अपने शारीरिक और मानसिक परिवर्तनों को ट्रैक करें।",
    step4Title: "संतुष्ट जीवन",
    step4Desc: "ऋतु और आपके दोष के अनुकूल व्यक्तिगत आहार, जीवनशैली और रसायन औषधियाँ।",
    vaidyaEyebrow: "विश्वसनीय शास्त्रीय चिकित्सक",
    vaidyaTitle1: "आपके वैद्य।",
    vaidyaTitle2: "आपके मार्गदर्शक।",
    vaidyaCta: "वैद्य से परामर्श लें",
    featuredEyebrow: "हमारे चिकित्सक",
    featuredTitle: "आर्ध्य वेद के विशेषज्ञ वैद्य",
    nourishEyebrow: "आहार और षड्रस",
    shadRasa: "षड्रस: छह स्वादों का संतुलन",
    shadRasaBody: "आयुर्वेदिक आहार कैलोरी गिनने के बारे में नहीं है, बल्कि छह स्वादों (मधुर, अम्ल, लवण, कटु, तिक्त, कषाय) का संतुलन है जो हार्मोन और अग्नि को नियंत्रित करता है।",
    sanghaEyebrow: "सङ्घ समुदाय",
    sanghaTitle1: "कोई भी अकेला",
    sanghaTitle2: "स्वस्थ नहीं होता।",
    sanghaBody: "डॉक्टर की सलाह और दादी-नानी के नुस्खों के बीच, एक ऐसा समुदाय जहाँ सब आपकी तरह ही स्वास्थ्य के सवाल पूछ रहे हैं।",
    sanghaAsked: "सङ्घ में लोग क्या पूछ रहे हैं:",
    sanghaInsideLabel: "सङ्घ के भीतर क्या है:",
    sanghaF1: "आपका दोष समूह",
    sanghaF1Note: "वात, पित्त या कफ — आप अपने जैसे शारीरिक स्वभाव वाले लोगों के साथ जुड़े होते हैं।",
    sanghaF2: "आज का पञ्चाङ्ग",
    sanghaF2Note: "ऋतु, आज की औषधि और आत्म-चिंतन का एक दैनिक प्रश्न।",
    sanghaF3: "ज्ञानवर्धक रील्स",
    sanghaF3Note: "वैद्यों के व्याख्यान, पारंपरिक नुस्खे और सदस्यों के अनुभव।",
    sanghaCta: "सङ्घ में प्रवेश करें →",
    sanghaFootnote: "शामिल होना बिल्कुल मुफ़्त है · कोई न कोई आपकी जैसी स्थिति से गुज़र चुका है।",
    journalHeadline: "सरल भाषा में आयुर्वेद",
    journalCta: "सभी लेख पढ़ें →",
    ctaTitle: "अपनी यात्रा शुरू करें।",
    ctaBody: "आपकी प्रकृति गर्भधारण के समय निर्धारित हुई थी। इसे समझना जीवनभर के स्वास्थ्य का पहला कदम है।",
    ctaAssessment: "५-मिनट प्रकृति परीक्षा लें →"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const dict = i18nData[lang];
  if (!dict) return;

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Toggle active pill UI
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-hi').classList.toggle('active', lang === 'hi');
}

// ================= 2. DOCTOR DATA (AUTHENTIC PROFILES) =================
const vaidyasData = [
  {
    id: "sumit-raina",
    name: "Dr. Sumit Raina",
    qualification: "MD Ayurveda",
    experience: 3,
    specialties: ["Digestive Health", "Stress & Anxiety", "Agni Balancing"],
    languages: ["Hindi", "English", "Kashmiri", "Punjabi"],
    initials: "SR",
    highlight: true,
    rating: "4.9 ★ (180+ consultations)"
  },
  {
    id: "shilpa-rajan",
    name: "Dr. Shilpa V. Rajan",
    qualification: "MD Ayurveda",
    experience: 9,
    specialties: ["Osteo-arthritis", "Sciatica", "Joint Pain", "Vata Disorders"],
    languages: ["Hindi", "English"],
    initials: "SR",
    highlight: true,
    rating: "5.0 ★ (450+ consultations)"
  },
  {
    id: "chaithra-s",
    name: "Dr. Chaithra Sethumadhavan",
    qualification: "MD Ayurveda",
    experience: 9,
    specialties: ["Ayurveda Psychiatry", "Manas Prakriti", "Sleep Insomnia"],
    languages: ["English", "Malayalam"],
    initials: "CS",
    highlight: false,
    rating: "4.9 ★ (320+ consultations)"
  },
  {
    id: "radhika-shah",
    name: "Dr. Radhika Shah",
    qualification: "MD (Ayurveda)",
    experience: 3,
    specialties: ["Women's Health", "Hormonal Balance", "Digestive Health"],
    languages: ["Hindi", "English", "Gujarati"],
    initials: "RS",
    highlight: false,
    rating: "4.8 ★ (140+ consultations)"
  },
  {
    id: "priyanka-patil",
    name: "Dr. Priyanka Patil",
    qualification: "MD (Ayurveda)",
    experience: 3,
    specialties: ["PCOS & Women's Health", "Stress", "Skin Radiance"],
    languages: ["Hindi", "English", "Marathi"],
    initials: "PP",
    highlight: false,
    rating: "4.9 ★ (195+ consultations)"
  },
  {
    id: "karan-lakhani",
    name: "Dr. Karan Lakhani",
    qualification: "MD Ayurveda",
    experience: 3,
    specialties: ["Immunity (Ojas)", "General Practice", "Detoxification"],
    languages: ["Hindi", "English"],
    initials: "KL",
    highlight: false,
    rating: "4.8 ★ (110+ consultations)"
  }
];

function renderVaidyasCarousel() {
  const container = document.getElementById('vaidyas-carousel');
  if (!container) return;

  container.innerHTML = vaidyasData.map(v => `
    <div class="vaidya-card-item">
      <div class="vaidya-avatar-wrap">
        <div class="vaidya-initials-fallback">${v.initials}</div>
        <div class="vaidya-verified-badge">
          <i data-lucide="shield-check" class="icon-sm text-gold"></i>
          <span>${v.qualification}</span>
        </div>
      </div>
      <div class="vaidya-card-body">
        <h4 class="vaidya-card-name font-display">${v.name}</h4>
        <div class="vaidya-card-exp">${v.experience} Years in Practice · ${v.rating}</div>
        <div class="vaidya-specs-wrap">
          ${v.specialties.map(s => `<span class="spec-badge">${s}</span>`).join('')}
        </div>
        <div class="vaidya-langs-row">
          <strong>Languages:</strong> ${v.languages.join(', ')}
        </div>
        <button class="vaidya-book-btn" onclick="openConsultModal('${v.id}')">
          <i data-lucide="video" class="icon-sm"></i>
          <span>Consult with ${v.name.split(' ')[1] || 'Doctor'}</span>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ================= 3. 5-MINUTE PRAKRITI ASSESSMENT FLOW =================
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
  document.getElementById('assessment-modal').classList.add('open');
  quizCurrentIndex = 0;
  quizAnswers = [];
  showQuizStage('welcome');
}

function closeAssessmentModal() {
  document.getElementById('assessment-modal').classList.remove('open');
}

function showQuizStage(stage) {
  document.getElementById('quiz-stage-welcome').classList.toggle('active', stage === 'welcome');
  document.getElementById('quiz-stage-questions').classList.toggle('active', stage === 'questions');
  document.getElementById('quiz-stage-result').classList.toggle('active', stage === 'result');
}

function startAssessmentFlow() {
  showQuizStage('questions');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quizQuestions[quizCurrentIndex];
  if (!q) return;

  document.getElementById('quiz-category-tag').textContent = q.category;
  document.getElementById('quiz-step-count').textContent = `Question ${quizCurrentIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quiz-question-title').textContent = q.question;
  document.getElementById('quiz-question-help').textContent = q.help;

  const percent = Math.round(((quizCurrentIndex) / quizQuestions.length) * 100);
  document.getElementById('quiz-progress-fill').style.width = `${percent}%`;

  const optionsContainer = document.getElementById('quiz-options-container');
  const letters = ['A', 'B', 'C'];
  optionsContainer.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option-btn" onclick="selectQuizAnswer(${i})">
      <span class="option-letter-badge">${letters[i]}</span>
      <span>${opt.text}</span>
    </button>
  `).join('');

  document.getElementById('quiz-prev-btn').style.visibility = quizCurrentIndex > 0 ? 'visible' : 'hidden';
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

  // Determine dominant dosha combo
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

  // Populate UI
  document.getElementById('result-dominant-dosha').textContent = resultTitle;
  document.getElementById('result-dominant-subtitle').textContent = resultSub;
  document.getElementById('result-card-badge').textContent = resultEmblem;

  document.getElementById('vata-percentage-text').textContent = `${vataPct}%`;
  document.getElementById('vata-meter-fill').style.width = `${vataPct}%`;

  document.getElementById('pitta-percentage-text').textContent = `${pittaPct}%`;
  document.getElementById('pitta-meter-fill').style.width = `${pittaPct}%`;

  document.getElementById('kapha-percentage-text').textContent = `${kaphaPct}%`;
  document.getElementById('kapha-meter-fill').style.width = `${kaphaPct}%`;

  // Tailored diet and routine text
  const dietEl = document.getElementById('proto-diet-text');
  const routineEl = document.getElementById('proto-routine-text');

  if (primary.name === 'Vata') {
    dietEl.textContent = "Favor warm, grounding, unctuous meals (khichdi, cooked grains, A2 cow ghee). Avoid cold raw salads, iced beverages, and dry crackers.";
    routineEl.textContent = "Daily warm sesame oil Abhyanga massage, steady rhythmic routine, early sleep by 10 PM to protect the Vata nervous system.";
  } else if (primary.name === 'Pitta') {
    dietEl.textContent = "Favor sweet, bitter, and astringent tastes (ghee, basmati rice, coriander, cooling cucumber, coconut water). Limit pungent chilies, alcohol, and fermented foods.";
    routineEl.textContent = "Moonlight walks, cooling pranayama (Sheetali), calming meditation, avoid midday harsh sunlight and competitive stress.";
  } else {
    dietEl.textContent = "Favor light, warm, pungent, and bitter foods with warming spices (ginger, black pepper, pippali). Minimize heavy dairy, refined sugars, and deep-fried dishes.";
    routineEl.textContent = "Vigorous morning exercise (Vyayama) at half-strength, dry powder massage (Udvartana), wake up before 6 AM to dispel heaviness.";
  }

  // Childhood vs adult check (Vikriti alert)
  const childhoodAns = quizAnswers[9];
  const adultDominant = primary.name.toLowerCase();
  const vikritiTextEl = document.getElementById('proto-vikriti-text');

  if (childhoodAns && childhoodAns !== adultDominant) {
    vikritiTextEl.innerHTML = `<strong>Vikriti Notice:</strong> Your childhood answers indicate a <em>${childhoodAns.toUpperCase()}</em> foundation, but your current answers lean <em>${adultDominant.toUpperCase()}</em>. This suggests an acquired lifestyle imbalance (Vikriti). Review with a Vaidya for Nadi Pariksha verification.`;
  } else {
    vikritiTextEl.textContent = "Your lifetime constitutional pattern is coherent and confirmed. Maintain this alignment with seasonal Ritucharya routines.";
  }

  // Store in LocalStorage
  const savedProfile = {
    title: resultTitle,
    vataPct,
    pittaPct,
    kaphaPct,
    date: new Date().toLocaleDateString()
  };
  localStorage.setItem('ardya_prakriti', JSON.stringify(savedProfile));

  showQuizStage('result');

  // Trigger celebration confetti
  if (window.confetti) {
    window.confetti({
      particleCount: 60,
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
    navigator.clipboard.writeText(`Ardya Veda Prakriti Card: ${cardData}`);
    alert("Prakriti Card details copied to clipboard! You can also screenshot this card.");
  } else {
    alert("Please complete the assessment first.");
  }
}

function bookConsultWithResults() {
  closeAssessmentModal();
  openConsultModal('sumit-raina');
}

// ================= 4. VAIDYA CONSULTATION MODAL =================
let selectedVaidyaId = 'sumit-raina';
let selectedConsultMode = 'video';

function openConsultModal(vaidyaId) {
  selectedVaidyaId = vaidyaId || 'sumit-raina';
  const doc = vaidyasData.find(v => v.id === selectedVaidyaId) || vaidyasData[0];

  document.getElementById('modal-vaidya-name').textContent = doc.name;
  document.getElementById('modal-vaidya-qual').textContent = `${doc.qualification} · ${doc.experience} Years in Practice · ${doc.languages.join(', ')}`;
  document.getElementById('consult-modal').classList.add('open');
}

function closeConsultModal() {
  document.getElementById('consult-modal').classList.remove('open');
}

function selectConsultMode(mode) {
  selectedConsultMode = mode;
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-mode') === mode);
  });
}

function confirmDoctorBooking() {
  const doc = vaidyasData.find(v => v.id === selectedVaidyaId) || vaidyasData[0];
  const slot = document.getElementById('consult-slot-select').value;
  const reason = document.getElementById('consult-reason-input').value || "Constitutional Prakriti Guidance";

  alert(`✓ Consultation Confirmed with ${doc.name}!\nFormat: ${selectedConsultMode.toUpperCase()}\nSlot: ${slot}\nFocus: ${reason}\n\nA secure invitation link has been generated. Our clinic desk will connect with you 10 minutes prior.`);
  closeConsultModal();
}

// ================= 5. DAILY PARIKSHA (60-SECOND HEALTH LOG) =================
function openCheckinModal() {
  document.getElementById('checkin-modal').classList.add('open');
  document.getElementById('checkin-form').style.display = 'block';
  document.getElementById('checkin-result-box').style.display = 'none';
}

function closeCheckinModal() {
  document.getElementById('checkin-modal').classList.remove('open');
}

function handleCheckinSubmit(e) {
  e.preventDefault();
  const digestion = document.querySelector('input[name="checkin_digestion"]:checked')?.value || 'balanced';
  const energy = document.querySelector('input[name="checkin_energy"]:checked')?.value || 'balanced';
  const sleep = document.querySelector('input[name="checkin_sleep"]:checked')?.value || 'balanced';

  const titleEl = document.getElementById('checkin-advice-title');
  const bodyEl = document.getElementById('checkin-advice-body');

  if (digestion === 'vata' || energy === 'vata' || sleep === 'vata') {
    titleEl.textContent = "Vata Bio-Pulse Elevated Today";
    bodyEl.textContent = "Your body shows dry/irregular signatures. Sip warm boiled water with ginger and cumin. Apply 3 drops of warm sesame oil to the soles of your feet tonight.";
  } else if (digestion === 'pitta' || energy === 'pitta' || sleep === 'pitta') {
    titleEl.textContent = "Pitta Internal Heat Detected";
    bodyEl.textContent = "Your metabolic Agni is running hot and sharp. Drink cooling coriander-seed infusion. Avoid spicy or fried lunch; favor sweet juicy fruits and coconut.";
  } else if (digestion === 'kapha' || energy === 'kapha' || sleep === 'kapha') {
    titleEl.textContent = "Kapha Heaviness Active";
    bodyEl.textContent = "Your lymphatic circulation is sluggish today. Take warm ginger-tulsi tea before noon. Walk briskly for 20 minutes to awaken metabolic fire.";
  } else {
    titleEl.textContent = "Tridosha Harmony Confirmed (Samadosha)";
    bodyEl.textContent = "Your digestive Agni, nervous vitality, and sleep are well-balanced. Follow your regular seasonal routine and maintain peaceful mindfulness.";
  }

  document.getElementById('checkin-form').style.display = 'none';
  document.getElementById('checkin-result-box').style.display = 'block';
}

// ================= 6. DOSHA DETAILS MODAL =================
const doshaDetailsMap = {
  vata: {
    title: "Vata Dosha (वात)",
    elements: "Air + Ether (Vayu + Akasha)",
    desc: "Vata is the kinetic force behind every heartbeat, nerve transmission, inhalation, and cellular movement in the universe.",
    good: "Creativity, quick learning, enthusiasm, flexibility, lightness of being.",
    bad: "Dry skin, insomnia, chronic constipation, tremors, overthinking, feeling cold.",
    food: "Warm soups, unctuous ghee, cooked oats, stewed apples, ginger, cinnamon, sesame oil."
  },
  pitta: {
    title: "Pitta Dosha (पित्त)",
    elements: "Fire + Water (Agni + Jala)",
    desc: "Pitta governs cellular metabolism, thermal homeostasis, enzymatic digestion, and intellectual discernment.",
    good: "Sharp intellect, courage, warm digestion, glowing complexion, strong leadership.",
    bad: "Acid reflux, irritability, inflammatory skin rashes, premature graying, burnouts.",
    food: "Basmati rice, ghee, coriander, cucumber, melon, mint, fennel, coconut water."
  },
  kapha: {
    title: "Kapha Dosha (कफ)",
    elements: "Earth + Water (Prithvi + Jala)",
    desc: "Kapha supplies structural stability, biological immunity (Ojas), lubrication of the joints, and psychological groundedness.",
    good: "Deep compassion, physical endurance, loyal affection, luxurious hair, steady calm.",
    bad: "Weight gain, sinus congestion, excessive sleepiness, sluggish metabolism, stubbornness.",
    food: "Mung beans, barley, roasted veggies, ginger, black pepper, turmeric, light warm broths."
  }
};

function openDoshaModal(doshaKey) {
  if (doshaKey === 'all') doshaKey = 'vata';
  const info = doshaDetailsMap[doshaKey] || doshaDetailsMap.vata;

  document.getElementById('d-modal-title').textContent = info.title;
  document.getElementById('d-modal-elements').textContent = info.elements;
  document.getElementById('d-modal-desc').textContent = info.desc;
  document.getElementById('d-modal-good').textContent = info.good;
  document.getElementById('d-modal-bad').textContent = info.bad;
  document.getElementById('d-modal-food').textContent = info.food;

  document.getElementById('dosha-modal').classList.add('open');
}

function closeDoshaModal() {
  document.getElementById('dosha-modal').classList.remove('open');
}

// ================= 7. SHAD RASA 6 TASTES INTERACTION =================
const tasteMessages = {
  sweet: "Madhura (Sweet): Builds tissue and calms Vata & Pitta. Consume natural sweets (ghee, rice, milk, dates) rather than refined cane sugar.",
  sour: "Amla (Sour): Stimulates salivary and gastric secretion, refreshing the palate and assisting liver digestion.",
  salty: "Lavana (Salty): Enhances water retention and maintains cellular electrolytes. Use rock salt (Saindhava) rather than bleached table salt.",
  pungent: "Katu (Pungent): Increases digestive fire (Agni), clears sinuses, and dissolves excess Kapha mucus with warming spices like ginger and pepper.",
  bitter: "Tikta (Bitter): Deeply cooling and detoxifying; cleanses the liver, purifies blood, and removes cravings for artificial sweets.",
  astringent: "Kashaya (Astringent): Draws tissues together, stops excessive secretions, and cools systemic inflammation."
};

function selectTaste(tasteKey) {
  document.querySelectorAll('.taste-card').forEach(c => c.classList.remove('active'));
  const clicked = event?.currentTarget;
  if (clicked) clicked.classList.add('active');

  const text = tasteMessages[tasteKey] || tasteMessages.sweet;
  document.getElementById('taste-detail-text').innerHTML = `<strong>Taste Analysis:</strong> ${text}`;
}

// ================= 8. SANGHA INTERACTION =================
function openSanghaModal() {
  alert("Namaste! The Sangha community has over 12,000 active members sharing daily recipes, grandmother remedies, and doctor explainers.\n\nFree enrollment confirmed. You have been connected to the Daily Panchanga Circle.");
}

// ================= 9. ARTICLE READER MODAL =================
const articlesData = {
  1: {
    title: "The Circadian Body: How Ayurveda Predicted Modern Chronobiology by 3,000 Years",
    cat: "CHRONOBIOLOGY",
    body: `
      <p>Modern science only recently awarded the Nobel Prize in 2017 for circadian clock genes. Yet, the classical Ayurvedic compendium, <em>Ashtanga Hridayam</em>, divided the 24-hour cycle into distinct doshic phases millennia ago.</p>
      <p>From 6 AM to 10 AM, the Earth-Water elements of <strong>Kapha</strong> dominate. This is why morning sluggishness occurs if you wake up late. From 10 AM to 2 PM, the solar fire of <strong>Pitta</strong> peaks, making it the biological mandate for your largest meal of the day.</p>
      <p>By synchronizing your meals, work focus, and sleep with these classical biological windows, fatigue disappears without needing stimulants.</p>
    `
  },
  2: {
    title: "Transitioning Your Digestive Agni: The Autumn Ritual of Sharad Ritu",
    cat: "RITUCHARYA",
    body: `
      <p>In classical Ayurveda, seasons do not change overnight. The transition period (<em>Ritusandhi</em>) is when 80% of human illnesses strike, because internal digestion fails to adapt to exterior atmospheric shifts.</p>
      <p>During autumn (Sharad Ritu), the heat accumulated throughout the late summer begins to boil over, showing up as skin eruptions, mouth ulcers, and sudden acid reflux. Classical texts advise the intake of Tikta Ghrita (bitter medicated ghee) and sweet, cooling herbs like Amalaki.</p>
    `
  },
  3: {
    title: "Ashwagandha vs Brahmi: Classical Distinction for Modern Anxiety",
    cat: "PHARMACOLOGY",
    body: `
      <p>In modern wellness stores, adaptogenic herbs are often marketed interchangeably. However, Ayurvedic pharmacology (Dravyaguna) treats Ashwagandha and Brahmi as polar complements.</p>
      <p><strong>Ashwagandha</strong> is warm, heavy, and unctuous (Ushna & Snigdha). It grounds deep adrenal exhaustion, emaciation, and physical weakness. If taken by someone with high internal Pitta heat, it may cause breakouts or overheating.</p>
      <p><strong>Brahmi</strong> (Bacopa), by contrast, is cold and calming (Sheeta). It directly soothes a heated, overstimulated cerebral cortex, fostering meditative focus and cooling mental frustration.</p>
    `
  }
};

function openArticleModal(id) {
  const art = articlesData[id] || articlesData[1];
  document.getElementById('article-modal-cat').textContent = art.cat;
  document.getElementById('article-modal-title').textContent = art.title;
  document.getElementById('article-modal-body').innerHTML = art.body;
  document.getElementById('article-modal-backdrop') || document.getElementById('article-modal').classList.add('open');
}

function closeArticleModal() {
  document.getElementById('article-modal').classList.remove('open');
}

// ================= 10. FAQ ACCORDION =================
function toggleFaq(id) {
  const item = document.getElementById(id);
  const isActive = item.classList.contains('active');
  
  // Close others
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  
  if (!isActive) {
    item.classList.add('active');
  }
}

// ================= 11. NAVBAR & EVENT LISTENERS =================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Render doctors carousel
  renderVaidyasCarousel();

  // Carousel navigation buttons
  const carousel = document.getElementById('vaidyas-carousel');
  document.getElementById('carousel-prev-btn')?.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });
  document.getElementById('carousel-next-btn')?.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });

  // Attach buttons that trigger the assessment modal
  document.querySelectorAll('.trigger-assessment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAssessmentModal();
    });
  });

  document.getElementById('open-assessment-nav-btn')?.addEventListener('click', openAssessmentModal);

  // Attach buttons that trigger the daily checkin modal
  document.querySelectorAll('.trigger-checkin-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckinModal();
    });
  });

  document.getElementById('open-checkin-nav-btn')?.addEventListener('click', openCheckinModal);

  // Language toggle button (stable)
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  langToggleBtn?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'hi' : 'en');
  });

  // Mobile drawer controls
  const drawer = document.getElementById('mobile-drawer');
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    drawer.classList.add('open');
  });
  document.getElementById('close-drawer-btn')?.addEventListener('click', () => {
    drawer.classList.remove('open');
  });
  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });

  // Login button placeholder
  document.getElementById('login-modal-btn')?.addEventListener('click', () => {
    alert("Namaste! User authentication portal is active. You can explore the full assessment, check-ins, and doctor consultations immediately without an account.");
  });

  // Sangha question click interaction
  document.querySelectorAll('.q-bubble').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.q-bubble').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
    });
  });
});
