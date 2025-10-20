import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [language, setLanguage] = useState('uz');

  const translations = {
    uz: {
      title: "Sizning tabasumingiz - bizning g'urur manbaimiz",
      subtitle: "Zamonaviy stomatologiya xizmatlari va professional shifokorlar jamoasi bilan sog'lom tabassum",
      button1: "Qabulga yozilish",
      button2: "Xizmatlar bilan tanishish",
      features: [
        {
          icon: "⭐",
          title: "Professional shifokorlar",
          description: "15+ yillik tajribaga ega mutaxassislar"
        },
        {
          icon: "🏥",
          title: "Zamonaviy jihozlar",
          description: "Eng so'nggi texnologiyalar"
        },
        {
          icon: "💎",
          title: "Sifatli xizmat",
          description: "Yuqori sifat va qulay narxlar"
        },
        {
          icon: "⏰",
          title: "Qulay vaqt",
          description: "Har kuni 9:00 dan 20:00 gacha"
        }
      ]
    },
    ru: {
      title: "Ваша улыбка - наша гордость",
      subtitle: "Современные стоматологические услуги и профессиональная команда врачей для здоровой улыбки",
      button1: "Записаться на прием",
      button2: "Ознакомиться с услугами",
      features: [
        {
          icon: "⭐",
          title: "Профессиональные врачи",
          description: "Специалисты с опытом 15+ лет"
        },
        {
          icon: "🏥",
          title: "Современное оборудование",
          description: "Новейшие технологии"
        },
        {
          icon: "💎",
          title: "Качественный сервис",
          description: "Высокое качество и доступные цены"
        },
        {
          icon: "⏰",
          title: "Удобное время",
          description: "Ежедневно с 9:00 до 20:00"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.title}</h1>
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

        <div className="hero-features">
          {t.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
