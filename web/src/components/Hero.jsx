import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [language, setLanguage] = useState('uz');

  const translations = {
    uz: {
      clinicName: "DENTIFY CLINIC",
      subtitle: "Sizning tabassumingiz - bizning maqsadimiz! Zamonaviy stomatologiya xizmatlari, professional shifokorlar va qulay narxlar. Sog'lom tishlar va chiroyli tabassum uchun bizni tanlang!",
      button1: "Bepul konsultatsiya",
      button2: "📞 +998 99 236 06 31"
    },
    ru: {
      clinicName: "DENTIFY CLINIC",
      subtitle: "Ваша улыбка - наша цель! Современные стоматологические услуги, профессиональные врачи и доступные цены. Выбирайте нас для здоровых зубов и красивой улыбки!",
      button1: "Бесплатная консультация",
      button2: "📞 +998 99 236 06 31"
    }
  };

  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="clinic-name">{t.clinicName}</span>
            </h1>
            <p className="hero-subtitle">{t.subtitle}</p>

            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary">
                {t.button1}
              </button>
              <button className="hero-btn hero-btn-secondary">
                {t.button2}
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="tooth-circle">
              <span className="tooth-emoji">🦷</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
