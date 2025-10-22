import { useState } from 'react';
import './Services.css';

const Services = () => {
  const [language, setLanguage] = useState('uz');

  const translations = {
    uz: {
      title: "DENTIFY klinikasi yuqori malakali stomatologik xizmatlarning quyidagi turlarini taklif etadi",
      button: "Batafsil ma'lumot olish uchun",
      services: [
        { name: "Tish davolash", icon: "treatment" },
        { name: "Implantatsiya", icon: "implant" },
        { name: "Ortodontiya", icon: "orthodontics" },
        { name: "Parodontologiya", icon: "periodontics" },
        { name: "Tish oqartirish", icon: "whitening" },
        { name: "Bolalar stomatologiyasi", icon: "pediatric" },
        { name: "Jarrohlik", icon: "surgery" },
        { name: "Diagnostika", icon: "diagnostics" }
      ]
    },
    ru: {
      title: "Клиника DENTIFY предлагает следующие виды высококвалифицированных стоматологических услуг",
      button: "Для получения подробной информации",
      services: [
        { name: "Лечение зубов", icon: "treatment" },
        { name: "Имплантация", icon: "implant" },
        { name: "Ортодонтия", icon: "orthodontics" },
        { name: "Пародонтология", icon: "periodontics" },
        { name: "Отбеливание зубов", icon: "whitening" },
        { name: "Детская стоматология", icon: "pediatric" },
        { name: "Хирургия", icon: "surgery" },
        { name: "Диагностика", icon: "diagnostics" }
      ]
    }
  };

  const t = translations[language];

  const getServiceIcon = (iconType) => {
    const icons = {
      treatment: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Tooth outline */}
          <path d="M50 20 C40 20 35 25 35 35 L35 50 C35 55 33 60 33 65 C33 72 35 78 40 78 C42 78 43 75 43 70 L43 55 C43 52 45 50 50 50 C55 50 57 52 57 55 L57 70 C57 75 58 78 60 78 C65 78 67 72 67 65 C67 60 65 55 65 50 L65 35 C65 25 60 20 50 20 Z"/>
          {/* Shine marks */}
          <path d="M42 28 L45 32" strokeWidth="2.5"/>
          <path d="M48 24 L50 28" strokeWidth="2.5"/>
        </svg>
      ),
      implant: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Crown */}
          <path d="M35 45 C35 38 40 32 50 32 C60 32 65 38 65 45 L65 52 C65 55 62 58 50 58 C38 58 35 55 35 52 Z"/>
          {/* Abutment */}
          <rect x="46" y="58" width="8" height="12" rx="1"/>
          {/* Screw */}
          <path d="M48 70 L48 78 M52 70 L52 78"/>
          <line x1="46" y1="74" x2="54" y2="74"/>
          {/* Bone integration lines */}
          <path d="M40 80 L35 82 M44 82 L40 84"/>
          <path d="M60 80 L65 82 M56 82 L60 84"/>
        </svg>
      ),
      orthodontics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Teeth outline */}
          <path d="M25 50 Q25 35 35 30 Q40 35 45 30 Q50 35 55 30 Q60 35 65 30 Q75 35 75 50"/>
          {/* Braces brackets */}
          <rect x="33" y="45" width="6" height="8" rx="1"/>
          <rect x="47" y="45" width="6" height="8" rx="1"/>
          <rect x="61" y="45" width="6" height="8" rx="1"/>
          {/* Wire */}
          <path d="M20 49 L80 49" strokeWidth="2.5"/>
          {/* Bracket dots */}
          <circle cx="36" cy="49" r="1.5" fill="currentColor"/>
          <circle cx="50" cy="49" r="1.5" fill="currentColor"/>
          <circle cx="64" cy="49" r="1.5" fill="currentColor"/>
        </svg>
      ),
      periodontics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Teeth */}
          <path d="M30 35 C30 30 32 25 35 25 C38 25 40 30 40 35 L40 48"/>
          <path d="M45 35 C45 30 47 25 50 25 C53 25 55 30 55 35 L55 48"/>
          <path d="M60 35 C60 30 62 25 65 25 C68 25 70 30 70 35 L70 48"/>
          {/* Gum line */}
          <path d="M25 48 C28 45 32 45 35 48 C38 45 42 45 45 48 C48 45 52 45 55 48 C58 45 62 45 65 48 C68 45 72 45 75 48" strokeWidth="3.5" fill="currentColor" fillOpacity="0.1"/>
          {/* Roots */}
          <path d="M35 48 L35 68 M50 48 L50 68 M65 48 L65 68" strokeWidth="2"/>
          {/* Care symbol */}
          <path d="M42 60 L46 64 L54 56" strokeWidth="2.5"/>
        </svg>
      ),
      whitening: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Tooth */}
          <path d="M50 25 C42 25 35 30 35 40 L35 55 C35 60 33 65 33 68 C33 73 36 78 42 78 C44 78 45 75 45 70 L45 58 C45 55 47 53 50 53 C53 53 55 55 55 58 L55 70 C55 75 56 78 58 78 C64 78 67 73 67 68 C67 65 65 60 65 55 L65 40 C65 30 58 25 50 25 Z"/>
          {/* Sparkle effects */}
          <path d="M25 35 L28 38 M28 35 L25 38" strokeWidth="2.5"/>
          <path d="M72 35 L75 38 M75 35 L72 38" strokeWidth="2.5"/>
          <path d="M50 15 L52 18 M52 15 L50 18" strokeWidth="2.5"/>
          <path d="M35 22 L37 24 M37 22 L35 24" strokeWidth="2"/>
          <path d="M65 22 L63 24 M63 22 L65 24" strokeWidth="2"/>
        </svg>
      ),
      pediatric: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Baby tooth with cute face */}
          <path d="M50 28 C40 28 33 33 33 42 L33 52 C33 58 36 62 40 62 C42 62 43 60 43 56 L43 50 C43 48 46 46 50 46 C54 46 57 48 57 50 L57 56 C57 60 58 62 60 62 C64 62 67 58 67 52 L67 42 C67 33 60 28 50 28 Z"/>
          {/* Happy eyes */}
          <circle cx="43" cy="40" r="2.5" fill="currentColor"/>
          <circle cx="57" cy="40" r="2.5" fill="currentColor"/>
          {/* Smile */}
          <path d="M40 48 Q50 54 60 48" strokeWidth="2.5"/>
          {/* Baby bottle */}
          <circle cx="72" cy="72" r="6"/>
          <rect x="70" y="65" width="4" height="8" rx="1"/>
          <circle cx="72" cy="64" r="2"/>
        </svg>
      ),
      surgery: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Scalpel handle */}
          <path d="M25 65 L35 55 L45 65 Z" fill="currentColor" fillOpacity="0.2"/>
          <path d="M25 65 L35 55 L45 65"/>
          {/* Blade */}
          <path d="M35 55 L42 20 L45 20 L38 55" fill="currentColor" fillOpacity="0.1"/>
          <path d="M35 55 L42 20"/>
          {/* Tooth outline being operated */}
          <path d="M55 45 C55 40 58 35 62 35 C66 35 68 38 68 42 L68 50 C68 54 66 58 62 58 C58 58 55 54 55 50 Z"/>
          {/* Medical cross */}
          <path d="M60 70 L64 70 M62 68 L62 72" strokeWidth="3.5"/>
          {/* Incision line */}
          <path d="M58 48 L66 48" strokeWidth="1.5" strokeDasharray="2,2"/>
        </svg>
      ),
      diagnostics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* X-ray film */}
          <rect x="30" y="25" width="40" height="50" rx="3"/>
          {/* Film holder top */}
          <path d="M40 25 L40 20 L60 20 L60 25"/>
          {/* Tooth X-ray image */}
          <path d="M50 35 C45 35 42 38 42 43 L42 50 C42 53 44 56 47 56 C48 56 49 55 49 52 L49 48 C49 47 49.5 46 50 46 C50.5 46 51 47 51 48 L51 52 C51 55 52 56 53 56 C56 56 58 53 58 50 L58 43 C58 38 55 35 50 35 Z" fillOpacity="0.15" fill="currentColor"/>
          {/* Magnifying glass */}
          <circle cx="65" cy="65" r="8"/>
          <path d="M71 71 L78 78" strokeWidth="3.5"/>
          {/* Checkmark in magnifier */}
          <path d="M61 65 L64 68 L69 62" strokeWidth="2"/>
        </svg>
      )
    };
    return icons[iconType] || icons.treatment;
  };

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">{t.title}</h2>

        <div className="services-grid">
          {t.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {getServiceIcon(service.icon)}
              </div>
              {service.badge && (
                <span className="service-badge">{service.badge}</span>
              )}
              <p className="service-name">{service.name}</p>
            </div>
          ))}
        </div>

        <button className="services-btn">
          {t.button} <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
