import { useState } from 'react';
import './About.css';

const About = () => {
  const [language, setLanguage] = useState('uz');

  const translations = {
    uz: {
      badge: "Biz haqimizda",
      title: "DENTIFY CLINIC",
      description1: "zamonaviy stomatologiya klinikasi bo'lib, og'iz bo'shligi salomatligini saqlash va tiklashda ilg'or texnologiyalardan foydalanadi. Biz har bir bemorga professional xizmat, og'riqsiz davolash va qulay muhitni taqdim etishga intilamiz.",
      description2: "Klinikamizda yuqori malakali shifokorlar, zamonaviy uskunalar va individual yondashuv orqali tishlaringizning sog'ligi va chiroyli tabassumingizni ta'minlaymiz. Profilaktikadan tortib, murakkab implantatsiya va estetik stomatologiyagacha barcha xizmatlarni ko'rsatamiz.",
      button: "Xizmatlarimiz"
    },
    ru: {
      badge: "О нас",
      title: "DENTIFY CLINIC",
      description1: "современная стоматологическая клиника, использующая передовые технологии в сохранении и восстановлении здоровья полости рта. Мы стремимся предоставить каждому пациенту профессиональное обслуживание, безболезненное лечение и комфортную атмосферу.",
      description2: "В нашей клинике высококвалифицированные врачи, современное оборудование и индивидуальный подход обеспечивают здоровье ваших зубов и красивую улыбку. Мы предоставляем все услуги от профилактики до сложной имплантации и эстетической стоматологии.",
      button: "Наши услуги"
    }
  };

  const t = translations[language];

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Dentify Clinic Interior"
                className="clinic-image"
              />
              <div className="image-badge">
                <span>{t.badge}</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              <span className="clinic-name-highlight">DENTIFY CLINIC</span> - {t.description1}
            </p>

            <p className="about-description">
              {t.description2}
            </p>

            <button className="about-btn">
              {t.button} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
