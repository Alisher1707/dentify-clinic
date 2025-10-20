import { useState } from 'react';
import './About.css';

const About = () => {
  const [language, setLanguage] = useState('uz');

  const translations = {
    uz: {
      badge: "Biz haqimizda",
      title: "DENTIFY CLINIC",
      description1: "DENTIFY CLINIC - bu zamonaviy tibbiyot muassasasi bo'lib, tibbiyotning eng yaxshi an'analari va ilg'or texnologiyalarni o'zida mujassam etadi. Ochiqligimizdan beri biz bemorlarimizga nafaqat samarali davolashni, balki yuqori darajadagi g'amxo'rlik va qulaylikni taqdim etishga intilamiz.",
      description2: "Bizning falsafamiz har bir bemorga individual yondashish, ishonchli munosabatlar yaratish va davolanish jarayonining barcha bosqichlarida maksimal ochiqlikni ta'minlashdan iborat.",
      button: "Xizmatlarimiz"
    },
    ru: {
      badge: "О нас",
      title: "DENTIFY CLINIC",
      description1: "это современное медицинское учреждение, воплощающее в себе лучшие традиции медицины и передовые технологии. С момента нашего открытия мы стремимся предоставить нашим пациентам не только эффективное лечение, но и высокий уровень заботы и комфорта.",
      description2: "Наша философия заключается в индивидуальном подходе к каждому пациенту, создании доверительных отношений и обеспечении максимальной открытости на всех этапах лечения.",
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
              {t.description1}
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
