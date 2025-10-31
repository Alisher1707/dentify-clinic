import './Hero.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const translations = {
    uz: {
      clinicName: "DENTIFY CLINIC",
      subtitle: "Sizning tabassumingiz - bizning maqsadimiz! Zamonaviy stomatologiya xizmatlari, professional shifokorlar va qulay narxlar. Sog'lom tishlar va chiroyli tabassum uchun bizni tanlang!",
      button1: "Bepul konsultatsiya",
      button2: "📞 +998 99 236 06 31",
      locationBtn: "Bizning manzil"
    },
    ru: {
      clinicName: "DENTIFY CLINIC",
      subtitle: "Ваша улыбка - наша цель! Современные стоматологические услуги, профессиональные врачи и доступные цены. Выбирайте нас для здоровых зубов и красивой улыбки!",
      button1: "Бесплатная консультация",
      button2: "📞 +998 99 236 06 31",
      locationBtn: "Наш адрес"
    },
    en: {
      clinicName: "DENTIFY CLINIC",
      subtitle: "Your smile is our goal! Modern dental services, professional doctors and affordable prices. Choose us for healthy teeth and a beautiful smile!",
      button1: "Free Consultation",
      button2: "📞 +998 99 236 06 31",
      locationBtn: "Our Location"
    }
  };

  const t = translations[language];

  return (
    <section id="home" ref={sectionRef} className={`hero ${isVisible ? 'visible' : ''}`}>
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
              <a
                href="https://maps.google.com/?q=DENTIFY+CLINIC"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-location-btn"
              >
                {t.locationBtn}
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
