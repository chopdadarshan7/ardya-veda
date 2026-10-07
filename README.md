# Ardya Veda — Modular Architecture

A luxury Ayurvedic lifestyle web platform modeled after [ardyaveda.com](https://www.ardyaveda.com/), organized into a clean, modular multi-page codebase.

- **GitHub Repository**: [https://github.com/chopdadarshan7/ardya-veda](https://github.com/chopdadarshan7/ardya-veda)
- **Live Website (GitHub Pages)**: [https://chopdadarshan7.github.io/ardya-veda/](https://chopdadarshan7.github.io/ardya-veda/)

---

## 📁 Project Structure

```
ardya veda/
│
├── index.html          # Main Landing Page (Hero, Philosophy, Ritual, Shad Rasa, Sangha, FAQ)
├── assessment.html     # Dedicated 5-Minute Prakriti Assessment Quiz & Prakriti Card
├── consult.html        # Dedicated Verified Vaidyas Directory & Consultation Booking
├── checkin.html        # Dedicated Daily Pariksha 60-Second Pulse Log & Bio-Remedy
├── dosha.html          # Dedicated Dosha Science Guide (Vata, Pitta, Kapha)
├── blog.html           # Dedicated Patrika Journal (Ayurvedic Research & Chronobiology)
│
├── css/                # Modular CSS Architecture
│   ├── variables.css   # Colors (Vastra cream, Kala earth, Gold, Olive), typography, golden-ratio
│   ├── base.css        # Resets, paper grain texture, utility classes, buttons
│   ├── navbar.css      # Header navigation, brand mark, language switcher, mobile drawer
│   ├── hero.css        # Hero 100dvh cinematic visual, scroll indicator, Panchanga bar
│   ├── sections.css    # Dosha grid, brass ritual, timeline, 6 tastes, sangha, quote, FAQ
│   ├── components.css  # Vaidya cards, carousel track, modals, quiz progress, Prakriti card
│   └── footer.css      # Footer, copyright, badges, and responsive media queries
│
├── js/                 # Modular JavaScript Architecture
│   ├── i18n.js         # Bilingual translation dictionary (EN / HI) & real-time switcher
│   ├── vaidyas.js      # Verified doctor profiles, carousel controls, booking modal
│   ├── assessment.js   # 10 diagnostic questions, scoring engine, Vikriti alert, Prakriti card
│   ├── checkin.js      # Daily Pariksha 60-second pulse log & custom daily bio-remedies
│   ├── navigation.js   # Dosha modal, 6-taste explorer, article reader, FAQ accordion, scroll
│   └── main.js         # Entry point & Lucide icon initializations
│
├── styles.css          # Master stylesheet importing all css/*.css modules
├── app.js              # Backward-compatible script bundle
└── README.md
```

---

## 🌐 Local Live Server

The application is served live on:
👉 **[http://localhost:3000](http://localhost:3000)**

Direct Sub-Pages:
- **Home:** [http://localhost:3000/index.html](http://localhost:3000/index.html)
- **Prakriti Quiz:** [http://localhost:3000/assessment.html](http://localhost:3000/assessment.html)
- **Vaidya Consultations:** [http://localhost:3000/consult.html](http://localhost:3000/consult.html)
- **Daily Pariksha Log:** [http://localhost:3000/checkin.html](http://localhost:3000/checkin.html)
- **Dosha Guide:** [http://localhost:3000/dosha.html](http://localhost:3000/dosha.html)
- **Patrika Journal:** [http://localhost:3000/blog.html](http://localhost:3000/blog.html)
