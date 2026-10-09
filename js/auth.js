/* =========================================================================
   ARDYA VEDA — SWAGATAM (AUTH & WELCOME) JAVASCRIPT
   Clean, simple, reliable sign-in flow with gentle confirmation on sign in
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Dynamic Time-Aware Greeting (Good Morning / Afternoon / Evening)
  const timeGreetingEl = document.getElementById('auth-time-greeting');
  let currentLanguage = 'en';

  function updateTimeGreeting() {
    const hour = new Date().getHours();
    let greetingEn = 'G O O D   M O R N I N G';
    let greetingHi = 'शु भ   प्र भा त';

    if (hour >= 12 && hour < 17) {
      greetingEn = 'G O O D   A F T E R N O O N';
      greetingHi = 'शु भ   दो प ह र';
    } else if (hour >= 17 && hour < 22) {
      greetingEn = 'G O O D   E V E N I N G';
      greetingHi = 'शु भ   सं ध्या';
    } else if (hour >= 22 || hour < 5) {
      greetingEn = 'G O O D   N I G H T';
      greetingHi = 'शु भ   रा त्रि';
    }

    if (timeGreetingEl) {
      timeGreetingEl.textContent = currentLanguage === 'hi' ? greetingHi : greetingEn;
    }
  }

  updateTimeGreeting();

  // 3. Password Visibility Toggle
  const pwdInput = document.getElementById('auth-password-input');
  const togglePwdBtn = document.getElementById('auth-toggle-pwd-btn');
  const eyeIcon = document.getElementById('pwd-eye-icon');

  if (togglePwdBtn && pwdInput) {
    togglePwdBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isPassword = pwdInput.getAttribute('type') === 'password';
      pwdInput.setAttribute('type', isPassword ? 'text' : 'password');
      if (eyeIcon) {
        eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }

  // 4. Soft Temple Chime — ONLY plays when sign-in is successful
  function playSignInSuccessChime() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.35, now);
      master.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      master.connect(ctx.destination);

      // Sacred 528Hz bell chime harmonic
      [528, 1056, 1584].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (1.2 - idx * 0.2));

        osc.connect(gain);
        gain.connect(master);

        osc.start(now);
        osc.stop(now + 1.3);
      });
    } catch(e) {
      // Audio fallback silent
    }
  }

  // 5. Bilingual Language Translations (English / Hindi)
  const translations = {
    en: {
      goHome: 'Go home',
      stepInto: 'Step into your own',
      light: 'light.',
      swagatamDesc: 'A quiet place that comes to know your nature, your rhythms and your Vaidya, and keeps them together, for you alone.',
      p1Title: 'Know your nature',
      p1Desc: 'Your Prakriti and Manas Prakriti, read in minutes',
      p2Title: 'Live by your rhythm',
      p2Desc: 'Daily check-ins that change with you',
      p3Title: 'A Vaidya beside you',
      p3Desc: 'Chat, call or video, whenever you need one',
      shlokaTrans: 'May all beings be happy.',
      lampLitTag: 'C O M E   I N ,   T H E   L A M P   I S   L I T',
      welcomeTitle: 'Welcome to Ardya Veda',
      welcomeSubtitle: 'Enter your email and password, then Sign Up<br>Complete your profile after OTP verification',
      googleBtn: 'Continue with Google',
      forgotPwd: 'Forgot password?',
      signUpBtn: 'SIGN UP',
      signInBtn: 'SIGN IN',
      footerPrompt: 'New user? ',
      footerSignup: 'Sign Up',
      alreadyAccount: 'Already have an account? ',
      footerSignin: 'Sign In'
    },
    hi: {
      goHome: 'होम पर जाएं',
      stepInto: 'स्वयं के प्रकाश में कदम रखें',
      light: '',
      swagatamDesc: 'एक शांत स्थान जो आपकी प्रकृति, आपकी लय और आपके वैद्य को समझता है, और आपको संपूर्ण स्वास्थ्य से जोड़ता है।',
      p1Title: 'अपनी प्रकृति जानें',
      p1Desc: 'आपकी प्रकृति और मानस प्रकृति, कुछ ही मिनटों में',
      p2Title: 'अपनी लय के अनुसार जिएं',
      p2Desc: 'दैनिक चेक-इन जो आपके साथ अनुकूलित होते हैं',
      p3Title: 'आपके साथ एक वैद्य',
      p3Desc: 'चैट, कॉल या वीडियो, जब भी आपको आवश्यकता हो',
      shlokaTrans: 'सभी प्राणी सुखी और निरोगी रहें।',
      lampLitTag: 'अं द र   आ इ ए ,   दी प   प्र ज्व लि त   है',
      welcomeTitle: 'अर्द्य वेद में आपका स्वागत है',
      welcomeSubtitle: 'अपना ईमेल और पासवर्ड दर्ज करें, फिर साइन अप करें<br>ओटीपी सत्यापन के बाद प्रोफ़ाइल पूरी करें',
      googleBtn: 'गूगल के साथ जारी रखें',
      forgotPwd: 'पासवर्ड भूल गए?',
      signUpBtn: 'साइन अप',
      signInBtn: 'साइन इन',
      footerPrompt: 'नए उपयोगकर्ता? ',
      footerSignup: 'साइन अप करें',
      alreadyAccount: 'पहले से खाता है? ',
      footerSignin: 'साइन इन करें'
    }
  };

  const btnLangEn = document.getElementById('btn-lang-en');
  const btnLangHi = document.getElementById('btn-lang-hi');

  function setLanguage(lang) {
    currentLanguage = lang;
    btnLangEn?.classList.toggle('active', lang === 'en');
    btnLangHi?.classList.toggle('active', lang === 'hi');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    updateTimeGreeting();
  }

  btnLangEn?.addEventListener('click', () => setLanguage('en'));
  btnLangHi?.addEventListener('click', () => setLanguage('hi'));

  // 6. Toast Notification Helper
  const toast = document.getElementById('auth-toast');
  const toastMsg = document.getElementById('auth-toast-msg');
  let toastTimer = null;

  function showToast(message, duration = 2400) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // 7. Golden Confetti
  function triggerGoldenConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.65 },
        colors: ['#F59E0B', '#FEF08A', '#C4A77D', '#D97706', '#FAF7F2']
      });
    }
  }

  // 8. Sign In Execution — Straight to Dashboard
  const authForm = document.getElementById('auth-main-form');
  const btnSignIn = document.getElementById('btn-submit-signin');
  const btnSignUp = document.getElementById('btn-submit-signup');
  const btnGoogle = document.getElementById('btn-google-login');
  const forgotLink = document.getElementById('auth-forgot-link');
  const emailInput = document.getElementById('auth-email-input');

  function proceedToDashboard(successMessage) {
    // 🔔 Play chime on successful sign-in
    playSignInSuccessChime();
    triggerGoldenConfetti();
    showToast(successMessage, 1500);

    const userEmail = emailInput?.value?.trim() || 'Chopda';
    localStorage.setItem('ardya_user', userEmail);

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 450);
  }

  // Form Submit (Handles Enter key in email or password field)
  authForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    proceedToDashboard(currentLanguage === 'hi' ? 'स्वागतम्! डैशबोर्ड खुल रहा है...' : 'Welcome back, Chopda! Opening Dashboard...');
  });

  // Direct Button Click
  btnSignIn?.addEventListener('click', (e) => {
    e.preventDefault();
    proceedToDashboard(currentLanguage === 'hi' ? 'स्वागतम्! डैशबोर्ड खुल रहा है...' : 'Welcome back, Chopda! Opening Dashboard...');
  });

  // Google Sign In Click
  btnGoogle?.addEventListener('click', (e) => {
    e.preventDefault();
    proceedToDashboard(currentLanguage === 'hi' ? 'गूगल से प्रमाणित! स्वागतम्...' : 'Signed in with Google! Opening Dashboard...');
  });

  // Sign Up Click
  btnSignUp?.addEventListener('click', (e) => {
    e.preventDefault();
    proceedToDashboard(currentLanguage === 'hi' ? 'साइन अप सफल! स्वागतम्...' : 'Sign up successful! Opening Dashboard...');
  });

  // Forgot Password
  forgotLink?.addEventListener('click', (e) => {
    e.preventDefault();
    const emailVal = emailInput?.value?.trim() || 'your email';
    showToast(`Password reset link sent to ${emailVal}!`, 3000);
  });

  // 9. Switcher Links
  const switchToSignup = document.getElementById('switch-to-signup');
  const switchToSignin = document.getElementById('switch-to-signin');
  const titleText = document.getElementById('auth-title-text');
  const subtitleText = document.getElementById('auth-subtitle-text');

  switchToSignup?.addEventListener('click', () => {
    if (titleText) titleText.textContent = currentLanguage === 'hi' ? 'नया खाता बनाएं' : 'Create your Ardya Account';
    if (subtitleText) subtitleText.innerHTML = currentLanguage === 'hi' ? 'अपनी प्रकृति जानने के लिए साइन अप करें' : 'Sign up to discover your Prakriti & connect with Vaidyas';
    btnSignUp?.focus();
    showToast('Switched to Sign Up mode');
  });

  switchToSignin?.addEventListener('click', () => {
    if (titleText) titleText.textContent = currentLanguage === 'hi' ? 'अर्द्य वेद में आपका स्वागत है' : 'Welcome to Ardya Veda';
    if (subtitleText) subtitleText.innerHTML = currentLanguage === 'hi' ? 'अपना ईमेल और पासवर्ड दर्ज करें, फिर साइन इन करें' : 'Enter your email and password, then Sign In';
    emailInput?.focus();
    showToast('Switched to Sign In mode');
  });
});
