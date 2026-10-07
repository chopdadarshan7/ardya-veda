/* =========================================================================
   ARDYA VEDA — VAIDYAS & CONSULTATION BOOKING MODULE
   ========================================================================= */

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

let selectedVaidyaId = 'sumit-raina';
let selectedConsultMode = 'video';

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

function openConsultModal(vaidyaId) {
  selectedVaidyaId = vaidyaId || 'sumit-raina';
  const doc = vaidyasData.find(v => v.id === selectedVaidyaId) || vaidyasData[0];

  const nameEl = document.getElementById('modal-vaidya-name');
  const qualEl = document.getElementById('modal-vaidya-qual');
  const modal = document.getElementById('consult-modal');

  if (nameEl) nameEl.textContent = doc.name;
  if (qualEl) qualEl.textContent = `${doc.qualification} · ${doc.experience} Years in Practice · ${doc.languages.join(', ')}`;
  if (modal) modal.classList.add('open');
}

function closeConsultModal() {
  const modal = document.getElementById('consult-modal');
  if (modal) modal.classList.remove('open');
}

function selectConsultMode(mode) {
  selectedConsultMode = mode;
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-mode') === mode);
  });
}

function confirmDoctorBooking() {
  const doc = vaidyasData.find(v => v.id === selectedVaidyaId) || vaidyasData[0];
  const slot = document.getElementById('consult-slot-select')?.value || "Today — 06:30 PM";
  const reason = document.getElementById('consult-reason-input')?.value || "Constitutional Prakriti Guidance";

  alert(`✓ Consultation Confirmed with ${doc.name}!\nFormat: ${selectedConsultMode.toUpperCase()}\nSlot: ${slot}\nFocus: ${reason}\n\nA secure invitation link has been generated. Our clinical desk will connect with you 10 minutes prior.`);
  closeConsultModal();
}

// Carousel listeners
document.addEventListener('DOMContentLoaded', () => {
  renderVaidyasCarousel();

  const carousel = document.getElementById('vaidyas-carousel');
  document.getElementById('carousel-prev-btn')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: -320, behavior: 'smooth' });
  });
  document.getElementById('carousel-next-btn')?.addEventListener('click', () => {
    carousel?.scrollBy({ left: 320, behavior: 'smooth' });
  });
});
