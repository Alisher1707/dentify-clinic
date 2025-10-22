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
        { name: "Tish oqartirish", icon: "whitening", badge: "TOP" },
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
        { name: "Отбеливание зубов", icon: "whitening", badge: "TOP" },
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
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M38 25 Q32 25 28 30 L28 52 Q28 62 34 68 Q36 70 36 65 L36 30 M62 25 Q68 25 72 30 L72 52 Q72 62 66 68 Q64 70 64 65 L64 30"/>
          <line x1="38" y1="25" x2="62" y2="25"/>
          <circle cx="50" cy="48" r="10"/>
          <path d="M44 48 L48 52 L56 42" strokeWidth="2.5"/>
          <circle cx="42" cy="35" r="1.5" fill="currentColor"/>
          <circle cx="58" cy="35" r="1.5" fill="currentColor"/>
        </svg>
      ),
      implant: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="44" y="18" width="12" height="20" rx="1.5"/>
          <path d="M47 38 L47 50 Q47 58 50 62 Q53 58 53 50 L53 38"/>
          <circle cx="50" cy="67" r="7"/>
          <path d="M44 67 L56 67"/>
          <line x1="40" y1="28" x2="60" y2="28"/>
          <line x1="47" y1="22" x2="53" y2="22"/>
          <line x1="47" y1="26" x2="53" y2="26"/>
          <line x1="47" y1="30" x2="53" y2="30"/>
          <line x1="47" y1="34" x2="53" y2="34"/>
        </svg>
      ),
      orthodontics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 45 Q28 28 50 28 Q72 28 82 45"/>
          <rect x="28" y="42" width="7" height="10" rx="1.5"/>
          <rect x="46" y="42" width="7" height="10" rx="1.5"/>
          <rect x="64" y="42" width="7" height="10" rx="1.5"/>
          <path d="M22 45 L78 45" strokeWidth="2"/>
          <circle cx="31.5" cy="47" r="2" fill="currentColor"/>
          <circle cx="49.5" cy="47" r="2" fill="currentColor"/>
          <circle cx="67.5" cy="47" r="2" fill="currentColor"/>
        </svg>
      ),
      periodontics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 48 Q30 42 30 36 Q30 32 34 30 L34 48 M50 48 Q48 42 48 36 Q48 32 52 30 L52 48 M68 48 Q66 42 66 36 Q66 32 70 30 L70 48"/>
          <path d="M28 48 Q28 54 32 60 L32 72 M48 48 Q48 54 52 60 L52 72 M68 48 Q68 54 72 60 L72 72"/>
          <ellipse cx="50" cy="48" rx="28" ry="3" fill="currentColor" opacity="0.2"/>
          <line x1="24" y1="48" x2="76" y2="48" strokeWidth="3"/>
        </svg>
      ),
      whitening: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M38 32 Q32 32 28 38 L28 55 Q28 64 34 70 L34 38 M62 32 Q68 32 72 38 L72 55 Q72 64 66 70 L66 38"/>
          <line x1="38" y1="32" x2="62" y2="32"/>
          <path d="M28 22 L32 12 M50 18 L50 8 M72 22 L68 12" strokeWidth="3"/>
          <path d="M24 26 L28 16 M76 26 L72 16" strokeWidth="2"/>
          <circle cx="42" cy="52" r="2.5" fill="currentColor"/>
          <circle cx="58" cy="52" r="2.5" fill="currentColor"/>
          <path d="M40 60 Q45 64 50 64 Q55 64 60 60" strokeWidth="2"/>
        </svg>
      ),
      pediatric: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="38" r="20"/>
          <circle cx="42" cy="35" r="3.5" fill="currentColor"/>
          <circle cx="58" cy="35" r="3.5" fill="currentColor"/>
          <path d="M38 48 Q50 56 62 48" strokeWidth="3"/>
          <path d="M30 30 Q25 24 22 27 M70 30 Q75 24 78 27"/>
          <path d="M32 58 L32 75 Q32 82 38 82 L62 82 Q68 82 68 75 L68 58"/>
          <path d="M42 68 L42 75 M50 68 L50 75 M58 68 L58 75"/>
        </svg>
      ),
      surgery: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 22 L32 58 Q32 66 38 72 L38 88"/>
          <path d="M28 28 L36 28 M28 38 L36 38 M28 48 L36 48"/>
          <circle cx="62" cy="42" r="18"/>
          <path d="M48 42 L76 42 M62 28 L62 56" strokeWidth="3"/>
          <circle cx="38" cy="88" r="5"/>
        </svg>
      ),
      diagnostics: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="28" y="32" width="44" height="52" rx="4"/>
          <path d="M42 32 L42 24 L58 24 L58 32"/>
          <circle cx="50" cy="52" r="12"/>
          <circle cx="50" cy="52" r="8"/>
          <path d="M58 58 L66 66"/>
          <path d="M34 70 L44 70 M52 70 L66 70"/>
          <path d="M34 78 L48 78 M54 78 L66 78"/>
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
