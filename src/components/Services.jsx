import './Services.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Services = ({ onNavigateToServices }) => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

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
    },
    en: {
      title: "DENTIFY clinic offers the following types of highly qualified dental services",
      button: "For more information",
      services: [
        { name: "Dental Treatment", icon: "treatment" },
        { name: "Implantation", icon: "implant" },
        { name: "Orthodontics", icon: "orthodontics" },
        { name: "Periodontics", icon: "periodontics" },
        { name: "Teeth Whitening", icon: "whitening" },
        { name: "Pediatric Dentistry", icon: "pediatric" },
        { name: "Surgery", icon: "surgery" },
        { name: "Diagnostics", icon: "diagnostics" }
      ]
    }
  };

  const t = translations[language];

  const getServiceIcon = (iconType) => {
    const icons = {
      treatment: (
        <img src="/img/Tish davolash.svg" alt="Tish davolash" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      implant: (
        <img src="/img/Implantatsiya.svg" alt="Implantatsiya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      orthodontics: (
        <img src="/img/Ortodontiya.svg" alt="Ortodontiya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      periodontics: (
        <img src="/img/Parodontologiya.svg" alt="Parodontologiya" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      whitening: (
        <img src="/img/Tish oqartirish.svg" alt="Tish oqartirish" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      pediatric: (
        <img src="/img/Bolalar stomatologiyasi.svg" alt="Bolalar stomatologiyasi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      surgery: (
        <img src="/img/Jarrohlik.svg" alt="Jarrohlik" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      ),
      diagnostics: (
        <img src="/img/Diagnostika.svg" alt="Diagnostika" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )
    };
    return icons[iconType] || icons.treatment;
  };

  return (
    <section id="services" ref={sectionRef} className={`services ${isVisible ? 'visible' : ''}`}>
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

        <button className="services-btn" onClick={onNavigateToServices}>
          {t.button} <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
