import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const translations = {
    uz: {
      badge: "Biz haqimizda",
      title: "DENTIFY CLINIC",
      description1: "zamonaviy stomatologiya klinikasi bo'lib, og'iz bo'shligi salomatligini saqlash va tiklashda ilg'or texnologiyalardan foydalanadi. Biz har bir bemorga professional xizmat, og'riqsiz davolash va qulay muhitni taqdim etishga intilamiz.",
      description2: "Klinikamizda yuqori malakali shifokorlar, zamonaviy uskunalar va individual yondashuv orqali tishlaringizning sog'ligi va chiroyli tabassumingizni ta'minlaymiz. Profilaktikadan tortib, murakkab implantatsiya va estetik stomatologiyagacha barcha xizmatlarni ko'rsatamiz.",
      button: "Xizmatlarimiz",
      partnershipTitle: "DENTIFY klinikasining asosiy maqsadlari",
      features: [
        {
          title: "Har bir bemor uchun individual yondashuv va zamonaviy davolash usullari"
        },
        {
          title: "10 yildan ortiq tajribaga ega malakali stomatologlar jamoasi"
        },
        {
          title: "Og'iz bo'shligi diagnostikasi uchun eng zamonaviy uskunalar"
        },
        {
          title: "Tish salomatligi bilan birga go'zal tabassum yaratish"
        }
      ]
    },
    ru: {
      badge: "О нас",
      title: "DENTIFY CLINIC",
      description1: "современная стоматологическая клиника, использующая передовые технологии в сохранении и восстановлении здоровья полости рта. Мы стремимся предоставить каждому пациенту профессиональное обслуживание, безболезненное лечение и комфортную атмосферу.",
      description2: "В нашей клинике высококвалифицированные врачи, современное оборудование и индивидуальный подход обеспечивают здоровье ваших зубов и красивую улыбку. Мы предоставляем все услуги от профилактики до сложной имплантации и эстетической стоматологии.",
      button: "Наши услуги",
      partnershipTitle: "Основные цели клиники DENTIFY",
      features: [
        {
          title: "Индивидуальный подход к каждому пациенту и современные методы лечения"
        },
        {
          title: "Команда квалифицированных стоматологов с опытом более 10 лет"
        },
        {
          title: "Современнейшее оборудование для диагностики полости рта"
        },
        {
          title: "Создание красивой улыбки вместе со здоровьем зубов"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section ref={sectionRef} className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="/img/reception.jpg"
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

        {/* Partnership Section */}
        <div className="partnership-section">
          <h2 className="partnership-title">{t.partnershipTitle}</h2>
          <div className="features-grid">
            {t.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-circle">
                    {index === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
                        <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                        <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
                        <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                        <circle cx="12" cy="7" r="4" strokeWidth="2"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="2"/>
                        <path d="M16 3v4M8 3v4M2 11h20" strokeWidth="2"/>
                      </svg>
                    )}
                    {index === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" strokeWidth="2"/>
                        <path d="M12 6c-4 0-7 3-7 7v5h14v-5c0-4-3-7-7-7z" strokeWidth="2"/>
                        <path d="M5 18v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" strokeWidth="2"/>
                      </svg>
                    )}
                  </div>
                </div>
                <p className="feature-description">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
