import { useLanguage } from '../contexts/LanguageContext';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './ServicesPage.css';

const ServicesPage = ({ onBackToHome }) => {
  const { language } = useLanguage();

  const translations = {
    uz: {
      title: "DENTIFY CLINIC xizmatlari",
      detailsTitle: "Taqdim etilgan xizmatlar ro'yxati",
      clinicLocation: "DENTIFY Clinic, Filial – Muqimiy 7/1",
      servicesLabel: "Xizmatlar:",
      consultationTitle: "Batafsil maslahat uchun so'rov qoldiring!",
      namePlaceholder: "Ism va familiya",
      phonePlaceholder: "998",
      messagePlaceholder: "savollaringiz / afzal yozib olish vaqti",
      submitButton: "Yuborish",
      servicesList: [
        "Tish davolash",
        "Implantatsiya",
        "Ortodontiya",
        "Parodontologiya",
        "Tish oqartirish",
        "Bolalar stomatologiyasi",
        "Jarrohlik",
        "Diagnostika",
        "Terapiya",
        "Ortopediya",
        "Profilaktika",
        "Estetik stomatologiya"
      ]
    },
    ru: {
      title: "Услуги DENTIFY CLINIC",
      detailsTitle: "Список предоставляемых услуг",
      clinicLocation: "DENTIFY Clinic, Филиал – Мукимий 7/1",
      servicesLabel: "Услуги:",
      consultationTitle: "Оставьте заявку для подробной консультации!",
      namePlaceholder: "Имя и фамилия",
      phonePlaceholder: "998",
      messagePlaceholder: "ваши вопросы / удобное время записи",
      submitButton: "Отправить",
      servicesList: [
        "Лечение зубов",
        "Имплантация",
        "Ортодонтия",
        "Пародонтология",
        "Отбеливание зубов",
        "Детская стоматология",
        "Хирургия",
        "Диагностика",
        "Терапия",
        "Ортопедия",
        "Профилактика",
        "Эстетическая стоматология"
      ]
    },
    en: {
      title: "DENTIFY CLINIC Services",
      detailsTitle: "List of services provided",
      clinicLocation: "DENTIFY Clinic, Branch – Muqimiy 7/1",
      servicesLabel: "Services:",
      consultationTitle: "Leave a request for detailed consultation!",
      namePlaceholder: "Name and surname",
      phonePlaceholder: "998",
      messagePlaceholder: "your questions / convenient appointment time",
      submitButton: "Submit",
      servicesList: [
        "Dental Treatment",
        "Implantation",
        "Orthodontics",
        "Periodontics",
        "Teeth Whitening",
        "Pediatric Dentistry",
        "Surgery",
        "Diagnostics",
        "Therapy",
        "Orthopedics",
        "Prevention",
        "Aesthetic Dentistry"
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <div className="services-page-hero">
        <div className="services-page-overlay"></div>
        <h1 className="services-page-title">{t.title}</h1>
      </div>

      {/* Services Section */}
      <Services />

      {/* Detailed Services and Consultation Section */}
      <section className="services-details-section">
        <div className="services-details-container">
          {/* Left Side - Services List */}
          <div className="services-list-column">
            <h2 className="services-details-title">{t.detailsTitle}</h2>
            <h3 className="clinic-location">{t.clinicLocation}</h3>
            <p className="services-label">{t.servicesLabel}</p>

            <ul className="detailed-services-list">
              {t.servicesList.map((service, index) => (
                <li key={index} className="service-item">
                  <span className="service-bullet">✓</span>
                  <span className="service-text">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Consultation Form */}
          <div className="consultation-column">
            <div className="consultation-card">
              <h2 className="consultation-title">{t.consultationTitle}</h2>

              <form className="consultation-form">
                <div className="form-row">
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    className="form-input"
                  />
                </div>
                <textarea
                  placeholder={t.messagePlaceholder}
                  className="form-textarea"
                  rows="5"
                ></textarea>
                <button type="submit" className="form-submit-btn">
                  {t.submitButton}
                </button>
              </form>

              <div className="clinic-image-container">
                <img
                  src="/img/reception.jpg"
                  alt="DENTIFY Clinic"
                  className="clinic-building-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
