/* =========================================================================
   ARDYA VEDA — MEMBER PORTAL & DASHBOARD JAVASCRIPT
   Interactivity for concentric rings, Vaidya filters, AI chat, & bookings
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Mobile Sidebar Drawer Controls
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const openSidebarBtns = [
    document.getElementById('mobile-sidebar-toggle'),
    document.getElementById('bottom-more-btn')
  ];
  const closeSidebarBtn = document.getElementById('close-sidebar-btn');

  function openMobileSidebar() {
    sidebar?.classList.add('mobile-open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    sidebar?.classList.remove('mobile-open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  openSidebarBtns.forEach(btn => btn?.addEventListener('click', openMobileSidebar));
  closeSidebarBtn?.addEventListener('click', closeMobileSidebar);
  backdrop?.addEventListener('click', closeMobileSidebar);

  // 3. Alert Banner Dismissal
  const closeAlertBtn = document.getElementById('close-profile-alert');
  const alertBanner = document.getElementById('profile-alert-banner');
  if (closeAlertBtn && alertBanner) {
    closeAlertBtn.addEventListener('click', () => {
      alertBanner.style.opacity = '0';
      alertBanner.style.transform = 'translateY(-10px)';
      setTimeout(() => alertBanner.style.display = 'none', 250);
    });
  }

  // 3. Vaidya Filter Buttons (Chat / Call / Video)
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterType = btn.getAttribute('data-filter');
      
      const cards = document.querySelectorAll('.doctor-app-card');
      cards.forEach(card => {
        if (filterType === 'all' || card.getAttribute('data-supports')?.includes(filterType)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Video Now Consultation Trigger
  document.querySelectorAll('.btn-video-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docName = btn.closest('.doctor-app-card')?.querySelector('.doc-name')?.textContent || 'Vaidya';
      openQuickConsultModal(docName, 'Video Consultation');
    });
  });

  // 5. Schedule Later Consultation Trigger
  document.querySelectorAll('.btn-schedule-sub').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docName = btn.closest('.doctor-app-card')?.querySelector('.doc-name')?.textContent || 'Vaidya';
      openQuickConsultModal(docName, 'Scheduled Consultation');
    });
  });

  // 6. Ask Ardya AI Assistant Modal / Drawer
  const askArdyaTriggers = [
    document.getElementById('ask-ardya-sidebar-btn'),
    document.getElementById('ask-ardya-banner-btn'),
    document.getElementById('fab-vaidya-btn')
  ];

  askArdyaTriggers.forEach(el => {
    el?.addEventListener('click', (e) => {
      e.preventDefault();
      openAskArdyaModal();
    });
  });

  // 7. Notification Bell Popover
  const notifBtn = document.getElementById('notif-bell-btn');
  notifBtn?.addEventListener('click', () => {
    alert("🔔 Notifications:\n\n• Your morning Pitta pacification herbal tea reminder.\n• Dr. Sumit Raina is available for an instant video call.\n• Daily Ahara Krama recipe ready for lunch: Barley & Mung Dal Khichdi.");
  });

  // 8. Prakriti Card Trigger
  document.getElementById('view-prakriti-card-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openPrakritiCardModal();
  });
});

// Quick Consult Modal Generator
function openQuickConsultModal(doctorName, mode) {
  let modal = document.getElementById('quick-consult-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-consult-modal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box" style="max-width: 480px; text-align: left; background: #FAF7F2; border: 1px solid #C4A77D; border-radius: 16px; padding: 28px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span style="font-size:10px; font-weight:700; letter-spacing:0.12em; color:#B38646; text-transform:uppercase;">Ardya Veda Tele-Health</span>
        <button onclick="document.getElementById('quick-consult-modal').classList.remove('open')" style="background:none; border:none; font-size:22px; cursor:pointer; color:#7D7365;">×</button>
      </div>
      <h3 style="font-family:'Playfair Display', serif; font-size:24px; color:#2C2825; margin-bottom:6px;">Connect with ${doctorName}</h3>
      <p style="font-size:13px; color:#6B6254; margin-bottom:20px;">Mode: <strong>${mode}</strong> · Verified Ayurvedic Practitioner</p>
      
      <div style="background:#FFFFFF; border:1px solid rgba(196,167,125,0.3); border-radius:10px; padding:16px; margin-bottom:20px;">
        <div style="font-size:12px; font-weight:600; color:#2C2825; margin-bottom:8px;">Chief Health Focus / Symptoms:</div>
        <select style="width:100%; padding:10px; border:1px solid #E5DFD5; border-radius:6px; font-size:13px; margin-bottom:12px; background:#FAF7F2;">
          <option>Pitta imbalance / Acidity & Heartburn</option>
          <option>Gut Health / IBS / Bloating</option>
          <option>Skin Radiance / Inflammation</option>
          <option>Sleep & Stress Regulation</option>
          <option>Joint Pain / Vata Pacification</option>
        </select>
        <div style="font-size:11px; color:#7D7365;">Wallet balance: ₹75 available · Consultation covered with complimentary trial.</div>
      </div>

      <button onclick="alert('Namaste Chopda! Connecting you with ${doctorName} via secure encrypted Ayurvedic portal...'); document.getElementById('quick-consult-modal').classList.remove('open');" 
        style="width:100%; background:#4E6044; color:#FAF7F2; border:none; border-radius:8px; padding:12px; font-weight:600; font-size:13px; cursor:pointer;">
        Join ${mode} Now
      </button>
    </div>
  `;

  modal.classList.add('open');
}

// Ask Ardya AI Assistant Modal
function openAskArdyaModal() {
  let modal = document.getElementById('ask-ardya-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ask-ardya-modal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box" style="max-width: 520px; text-align: left; background: #FAF7F2; border: 1px solid #C4A77D; border-radius: 16px; padding: 24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:28px; height:28px; border-radius:50%; background:#C4A77D; display:flex; align-items:center; justify-content:center; color:#2C2825; font-size:14px;">ॐ</div>
          <div>
            <div style="font-size:10px; font-weight:700; color:#B38646; letter-spacing:0.1em;">VEDIC AI VAIDYA</div>
            <div style="font-size:15px; font-weight:600; color:#2C2825;">Ask Ardya Anything</div>
          </div>
        </div>
        <button onclick="document.getElementById('ask-ardya-modal').classList.remove('open')" style="background:none; border:none; font-size:22px; cursor:pointer; color:#7D7365;">×</button>
      </div>

      <div style="background:#FFFFFF; border:1px solid rgba(196,167,125,0.3); border-radius:12px; height:220px; overflow-y:auto; padding:14px; margin-bottom:14px; font-size:13px; display:flex; flex-direction:column; gap:10px;">
        <div style="background:#F6F1E8; padding:10px 14px; border-radius:12px; max-width:85%;">
          Namaste Chopda! Based on your <strong>Pitta (74%) · Kapha (26%)</strong> constitution during this Śarad (Autumn) season, how is your Agni and digestion feeling today?
        </div>
      </div>

      <div style="display:flex; gap:8px;">
        <input type="text" placeholder="Ask about spices, herbs, gut health, sleep..." style="flex:1; padding:12px 14px; border:1px solid #E5DFD5; border-radius:8px; font-size:13px; background:#FFFFFF;">
        <button onclick="alert('Query received. Analyzing Charaka Samhita & your Pitta profile...');" style="background:#B38646; color:#FAF7F2; border:none; border-radius:8px; padding:0 18px; font-weight:600; cursor:pointer;">
          Send
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// Prakriti Card Modal Generator
function openPrakritiCardModal() {
  let modal = document.getElementById('prakriti-card-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'prakriti-card-modal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box" style="max-width: 440px; text-align: center; background: #FAF7F2; border: 1.5px solid #C4A77D; border-radius: 18px; padding: 32px 24px; position:relative;">
      <button onclick="document.getElementById('prakriti-card-modal').classList.remove('open')" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:22px; cursor:pointer; color:#7D7365;">×</button>
      
      <div style="font-size:11px; font-weight:700; letter-spacing:0.18em; color:#B38646; text-transform:uppercase; margin-bottom:6px;">Official Ardya Veda Dossier</div>
      <h2 style="font-family:'Playfair Display', serif; font-size:30px; color:#2C2825; margin-bottom:4px;">Chopda</h2>
      <div style="font-family:'Cormorant Garamond', serif; font-size:22px; font-style:italic; color:#B38646; margin-bottom:20px;">Pitta · Kapha Prakriti</div>
      
      <div style="display:flex; justify-content:space-around; background:#FFFFFF; border:1px solid rgba(196,167,125,0.3); border-radius:12px; padding:16px; margin-bottom:20px;">
        <div>
          <div style="font-size:20px; font-weight:700; color:#64748B;">0%</div>
          <div style="font-size:10px; font-weight:600; color:#7D7365;">VATA</div>
        </div>
        <div style="border-left:1px solid #EBE4D5;"></div>
        <div>
          <div style="font-size:20px; font-weight:700; color:#D97706;">74%</div>
          <div style="font-size:10px; font-weight:600; color:#7D7365;">PITTA</div>
        </div>
        <div style="border-left:1px solid #EBE4D5;"></div>
        <div>
          <div style="font-size:20px; font-weight:700; color:#65A30D;">26%</div>
          <div style="font-size:10px; font-weight:600; color:#7D7365;">KAPHA</div>
        </div>
      </div>

      <div style="text-align:left; font-size:12px; color:#5C5245; line-height:1.6; margin-bottom:24px; background:#F5EFE6; padding:14px; border-radius:10px;">
        <strong>Dominant Bio-Energy:</strong> Fiery Pitta confers sharp intellect, strong digestive fire (Tikshnagni), and natural leadership. Secondary Kapha provides structural stamina and immunity (Ojas).
      </div>

      <button onclick="window.print()" style="background:#B38646; color:#FAF7F2; border:none; border-radius:999px; padding:10px 24px; font-size:12px; font-weight:600; cursor:pointer;">
        Download Prakriti Card (PDF)
      </button>
    </div>
  `;

  modal.classList.add('open');
}
