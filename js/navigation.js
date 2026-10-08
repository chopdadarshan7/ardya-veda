/* =========================================================================
   ARDYA VEDA — NAVIGATION, MODALS & INTERACTIONS MODULE
   ========================================================================= */

// ================= DOSHA EXPLORER DETAILS =================
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

  const titleEl = document.getElementById('d-modal-title');
  const elemEl = document.getElementById('d-modal-elements');
  const descEl = document.getElementById('d-modal-desc');
  const goodEl = document.getElementById('d-modal-good');
  const badEl = document.getElementById('d-modal-bad');
  const foodEl = document.getElementById('d-modal-food');
  const modal = document.getElementById('dosha-modal');

  if (titleEl) titleEl.textContent = info.title;
  if (elemEl) elemEl.textContent = info.elements;
  if (descEl) descEl.textContent = info.desc;
  if (goodEl) goodEl.textContent = info.good;
  if (badEl) badEl.textContent = info.bad;
  if (foodEl) foodEl.textContent = info.food;

  if (modal) {
    modal.classList.add('open');
  } else {
    window.location.href = `dosha.html#${doshaKey}`;
  }
}

function closeDoshaModal() {
  document.getElementById('dosha-modal')?.classList.remove('open');
}

// ================= SHAD RASA 6 TASTES INTERACTION =================
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
  const clicked = window.event?.currentTarget;
  if (clicked) clicked.classList.add('active');

  const text = tasteMessages[tasteKey] || tasteMessages.sweet;
  const detailBox = document.getElementById('taste-detail-text');
  if (detailBox) {
    detailBox.innerHTML = `<strong>Taste Analysis:</strong> ${text}`;
  }
}

// ================= SANGHA COMMUNITY INTERACTION =================
function openSanghaModal() {
  alert("Namaste! The Sangha community has over 12,000 active members sharing daily recipes, grandmother remedies, and doctor explainers.\n\nFree enrollment confirmed. You have been connected to the Daily Panchanga Circle.");
}

// ================= PATRIKA ARTICLES MODAL =================
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
  const catEl = document.getElementById('article-modal-cat');
  const titleEl = document.getElementById('article-modal-title');
  const bodyEl = document.getElementById('article-modal-body');
  const modal = document.getElementById('article-modal');

  if (catEl) catEl.textContent = art.cat;
  if (titleEl) titleEl.textContent = art.title;
  if (bodyEl) bodyEl.innerHTML = art.body;
  if (modal) modal.classList.add('open');
}

function closeArticleModal() {
  document.getElementById('article-modal')?.classList.remove('open');
}

// ================= FAQ ACCORDION =================
function toggleFaq(id) {
  const item = document.getElementById(id);
  if (!item) return;
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

// ================= NAVBAR & GLOBAL EVENT LISTENERS =================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Mobile drawer controls
  const drawer = document.getElementById('mobile-drawer');
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    drawer?.classList.add('open');
  });
  document.getElementById('close-drawer-btn')?.addEventListener('click', () => {
    drawer?.classList.remove('open');
  });
  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer?.classList.remove('open');
    });
  });

  // Login action -> Member Dashboard
  document.getElementById('login-modal-btn')?.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
  });

  // Sangha question clicks
  document.querySelectorAll('.q-bubble').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.q-bubble').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
    });
  });
});
