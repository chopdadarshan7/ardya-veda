/* =========================================================================
   ARDYA VEDA — SWAGATAM (AUTH & WELCOME) JAVASCRIPT
   Interactive Diwali Atmosphere, Meditative Audio, Language Toggle & Auth
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
    togglePwdBtn.addEventListener('click', () => {
      const isPassword = pwdInput.getAttribute('type') === 'password';
      pwdInput.setAttribute('type', isPassword ? 'text' : 'password');
      if (eyeIcon) {
        eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }

  // 4. Meditative Temple Bell, Singing Bowl & Tanpura Drone Engine (Web Audio API)
  const soundBtn = document.getElementById('auth-sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon-on');
  let audioCtx = null;
  let isSoundPlaying = false;
  let chimeInterval = null;
  let droneNodes = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Play an authentic resonant Bronze Temple Bell strike with rich overtones
  function strikeTempleBell() {
    try {
      initAudioContext();
      const now = audioCtx.currentTime;

      // Master bell gain node
      const bellGain = audioCtx.createGain();
      bellGain.gain.setValueAtTime(0.42, now);
      bellGain.connect(audioCtx.destination);

      // Sacred Solfeggio & Vedic harmonic frequencies for Temple Bell (Fundamental ~528Hz + Tibetan bowl partials)
      const harmonics = [
        { freq: 528, gain: 0.55, decay: 6.5 },   // Fundamental ring (Love & Healing tone)
        { freq: 1457, gain: 0.32, decay: 4.8 },  // Metallic overtone (2.76x)
        { freq: 2154, gain: 0.22, decay: 3.5 },  // Bright shimmer (4.08x)
        { freq: 2851, gain: 0.14, decay: 2.2 },  // High bell sparkle (5.4x)
        { freq: 132, gain: 0.40, decay: 7.5 }    // Deep grounding bronze resonance (Om tone)
      ];

      harmonics.forEach(h => {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();

        osc.type = h.freq < 300 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(h.freq, now);

        // Immediate crisp bell strike attack, then long golden exponential decay
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(h.gain, now + 0.025);
        g.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(g);
        g.connect(bellGain);

        osc.start(now);
        osc.stop(now + h.decay + 0.2);
      });

      // Wooden mallet / bronze clapper strike transient (filtered noise burst)
      const bufferSize = Math.floor(audioCtx.sampleRate * 0.07);
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(3.5, now);

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.28, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      noiseSource.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(bellGain);

      noiseSource.start(now);
    } catch (err) {
      console.warn('Audio synthesis warning:', err);
    }
  }

  // Warm background meditative drone (Om vibration 108Hz)
  function startWarmDrone() {
    try {
      initAudioContext();
      const now = audioCtx.currentTime;

      const droneGain = audioCtx.createGain();
      droneGain.gain.setValueAtTime(0.0001, now);
      droneGain.gain.exponentialRampToValueAtTime(0.12, now + 1.5);
      droneGain.connect(audioCtx.destination);

      // 108 Hz Sacred Vedic Tanpura drone with LFO warmth
      const osc1 = audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, now);

      const osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(216, now); // Octave overtone

      const lfo = audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.2, now); // Gentle slow breath wave (every 5 seconds)
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(0.04, now);
      lfo.connect(lfoGain);
      lfoGain.connect(droneGain.gain);

      osc1.connect(droneGain);
      osc2.connect(droneGain);

      osc1.start(now);
      osc2.start(now);
      lfo.start(now);

      droneNodes = { osc1, osc2, lfo, droneGain };
    } catch (e) {
      console.warn('Drone error:', e);
    }
  }

  function stopWarmDrone() {
    if (droneNodes && audioCtx) {
      try {
        const now = audioCtx.currentTime;
        droneNodes.droneGain.gain.setValueAtTime(droneNodes.droneGain.gain.value, now);
        droneNodes.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          droneNodes.osc1.stop();
          droneNodes.osc2.stop();
          droneNodes.lfo.stop();
          droneNodes = null;
        }, 550);
      } catch (e) {}
    }
  }

  function startTempleSoundscape() {
    initAudioContext();
    isSoundPlaying = true;
    soundBtn?.classList.add('playing');
    if (soundIcon) {
      soundIcon.setAttribute('data-lucide', 'volume-2');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Play immediate first resonant bell strike
    strikeTempleBell();
    startWarmDrone();

    // Repeat a serene bell strike every 8 seconds
    chimeInterval = setInterval(() => {
      if (isSoundPlaying) {
        strikeTempleBell();
      }
    }, 8200);

    showToast(currentLanguage === 'hi' ? '🪔 मंदिर की घंटियां और ध्यान ध्वनि चालू...' : '🪔 Sacred temple chimes playing...');
  }

  function stopTempleSoundscape() {
    isSoundPlaying = false;
    soundBtn?.classList.remove('playing');
    if (soundIcon) {
      soundIcon.setAttribute('data-lucide', 'volume-x');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    if (chimeInterval) {
      clearInterval(chimeInterval);
      chimeInterval = null;
    }
    stopWarmDrone();
    showToast(currentLanguage === 'hi' ? 'ध्वनि बंद की गई' : 'Sound muted');
  }

  soundBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (isSoundPlaying) {
      stopTempleSoundscape();
    } else {
      startTempleSoundscape();
    }
  });

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

  // 6. Interactive Toast Message Helper
  const toast = document.getElementById('auth-toast');
  const toastMsg = document.getElementById('auth-toast-msg');
  let toastTimer = null;

  function showToast(message, duration = 3200) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // 7. Confetti Sparkles Effect
  function triggerGoldenConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F59E0B', '#FEF08A', '#C4A77D', '#D97706', '#FAF7F2']
      });
    }
  }

  // 8. One-Click Sign In & Google Continue
  const btnSignIn = document.getElementById('btn-submit-signin');
  const btnSignUp = document.getElementById('btn-submit-signup');
  const btnGoogle = document.getElementById('btn-google-login');
  const forgotLink = document.getElementById('auth-forgot-link');
  const emailInput = document.getElementById('auth-email-input');

  function proceedToDashboard(successMessage) {
    triggerGoldenConfetti();
    showToast(successMessage, 2200);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 950);
  }

  btnSignIn?.addEventListener('click', (e) => {
    e.preventDefault();
    const emailVal = emailInput?.value?.trim();
    if (emailVal && !emailVal.includes('@')) {
      showToast('Please enter a valid email address');
      emailInput.focus();
      return;
    }
    proceedToDashboard(currentLanguage === 'hi' ? 'स्वागतम्! डैशबोर्ड में प्रवेश कर रहे हैं...' : 'Welcome back, Chopda! Entering your sanctuary...');
  });

  btnGoogle?.addEventListener('click', (e) => {
    e.preventDefault();
    proceedToDashboard(currentLanguage === 'hi' ? 'गूगल से प्रमाणित! स्वागतम्...' : 'Signed in with Google! Entering sanctuary...');
  });

  btnSignUp?.addEventListener('click', (e) => {
    e.preventDefault();
    triggerGoldenConfetti();
    showToast(currentLanguage === 'hi' ? 'ओटीपी कोड आपके ईमेल पर भेजा गया है!' : 'OTP verification sent! Proceeding to setup...', 2000);
    setTimeout(() => {
      window.location.href = 'assessment.html';
    }, 1000);
  });

  forgotLink?.addEventListener('click', (e) => {
    e.preventDefault();
    const emailVal = emailInput?.value?.trim() || 'your email';
    showToast(`Password reset link sent to ${emailVal}!`, 3500);
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
