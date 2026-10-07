/* =========================================================================
   ARDYA VEDA — DAILY PARIKSHA (HEALTH CHECK-IN) MODULE
   ========================================================================= */

function openCheckinModal() {
  const modal = document.getElementById('checkin-modal');
  const form = document.getElementById('checkin-form');
  const resultBox = document.getElementById('checkin-result-box');

  if (modal) {
    modal.classList.add('open');
    if (form) form.style.display = 'block';
    if (resultBox) resultBox.style.display = 'none';
  } else {
    window.location.href = 'checkin.html';
  }
}

function closeCheckinModal() {
  document.getElementById('checkin-modal')?.classList.remove('open');
}

function handleCheckinSubmit(e) {
  if (e) e.preventDefault();
  const digestion = document.querySelector('input[name="checkin_digestion"]:checked')?.value || 'balanced';
  const energy = document.querySelector('input[name="checkin_energy"]:checked')?.value || 'balanced';
  const sleep = document.querySelector('input[name="checkin_sleep"]:checked')?.value || 'balanced';

  const titleEl = document.getElementById('checkin-advice-title');
  const bodyEl = document.getElementById('checkin-advice-body');

  let checkinResult = {};

  if (digestion === 'vata' || energy === 'vata' || sleep === 'vata') {
    checkinResult = {
      title: "Vata Bio-Pulse Elevated Today",
      body: "Your body shows dry/irregular signatures. Sip warm boiled water with ginger and cumin. Apply 3 drops of warm sesame oil to the soles of your feet tonight."
    };
  } else if (digestion === 'pitta' || energy === 'pitta' || sleep === 'pitta') {
    checkinResult = {
      title: "Pitta Internal Heat Detected",
      body: "Your metabolic Agni is running hot and sharp. Drink cooling coriander-seed infusion. Avoid spicy or fried lunch; favor sweet juicy fruits and coconut."
    };
  } else if (digestion === 'kapha' || energy === 'kapha' || sleep === 'kapha') {
    checkinResult = {
      title: "Kapha Heaviness Active",
      body: "Your lymphatic circulation is sluggish today. Take warm ginger-tulsi tea before noon. Walk briskly for 20 minutes to awaken metabolic fire."
    };
  } else {
    checkinResult = {
      title: "Tridosha Harmony Confirmed (Samadosha)",
      body: "Your digestive Agni, nervous vitality, and sleep are well-balanced. Follow your regular seasonal routine and maintain peaceful mindfulness."
    };
  }

  if (titleEl) titleEl.textContent = checkinResult.title;
  if (bodyEl) bodyEl.textContent = checkinResult.body;

  const form = document.getElementById('checkin-form');
  const resultBox = document.getElementById('checkin-result-box');
  if (form) form.style.display = 'none';
  if (resultBox) resultBox.style.display = 'block';

  localStorage.setItem('ardya_last_checkin', JSON.stringify({
    ...checkinResult,
    timestamp: new Date().toISOString()
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.trigger-checkin-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.location.pathname.endsWith('checkin.html')) {
        // already on checkin page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        openCheckinModal();
      }
    });
  });

  document.getElementById('open-checkin-nav-btn')?.addEventListener('click', openCheckinModal);
});
