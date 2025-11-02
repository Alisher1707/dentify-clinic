import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    uz: {
      about: {
        title: "DENTIFY Klinikasi",
        description: "Zamonaviy stomatologiya xizmatlari va professional shifokorlar jamoasi bilan sog'lom tabassum uchun ishonchli hamkoringiz."
      },
      services: {
        title: "Xizmatlar",
        items: [
          "Tish davolash",
          "Implantatsiya",
          "Ortodontiya",
          "Parodontologiya",
          "Tish oqartirish",
          "Bolalar stomatologiyasi"
        ]
      },
      contact: {
        title: "Aloqa",
        phone: "+998(99) 236-06-31",
        address: "Toshkent shahar, Chilonzor tumani",
        email: "info@dentify.uz",
        workHours: "Dush-Juma: 9:00 - 18:00"
      },
      social: {
        title: "Ijtimoiy tarmoqlar"
      },
      copyright: "© 2025 DENTIFY. Barcha huquqlar himoyalangan."
    },
    ru: {
      about: {
        title: "Клиника DENTIFY",
        description: "Современные стоматологические услуги и команда профессиональных врачей - ваш надежный партнер для здоровой улыбки."
      },
      services: {
        title: "Услуги",
        items: [
          "Лечение зубов",
          "Имплантация",
          "Ортодонтия",
          "Пародонтология",
          "Отбеливание зубов",
          "Детская стоматология"
        ]
      },
      contact: {
        title: "Контакты",
        phone: "+998(99) 236-06-31",
        address: "г. Ташкент, Чиланзарский район",
        email: "info@dentify.uz",
        workHours: "Пн-Пт: 9:00 - 18:00"
      },
      social: {
        title: "Социальные сети"
      },
      copyright: "© 2025 DENTIFY. Все права защищены."
    },
    en: {
      about: {
        title: "DENTIFY Clinic",
        description: "Modern dental services and a team of professional doctors - your trusted partner for a healthy smile."
      },
      services: {
        title: "Services",
        items: [
          "Dental Treatment",
          "Implantation",
          "Orthodontics",
          "Periodontics",
          "Teeth Whitening",
          "Pediatric Dentistry"
        ]
      },
      contact: {
        title: "Contact",
        phone: "+998(99) 236-06-31",
        address: "Tashkent city, Chilanzar district",
        email: "info@dentify.uz",
        workHours: "Mon-Fri: 9:00 AM - 6:00 PM"
      },
      social: {
        title: "Social Media"
      },
      copyright: "© 2025 DENTIFY. All rights reserved."
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">{t.about.title}</h3>
            <p className="footer-description">{t.about.description}</p>
            <div className="footer-logo">
              <span className="logo-icon">🦷</span>
              <span className="logo-text">DENTIFY</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3 className="footer-title">{t.services.title}</h3>
            <ul className="footer-list">
              {t.services.items.map((service, index) => (
                <li key={index} className="footer-list-item">
                  <span className="list-icon">›</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">{t.contact.title}</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href="tel:+998992360631" className="contact-link">{t.contact.phone}</a>
              </div>

              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="contact-text">{t.contact.address}</span>
              </div>

              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@dentify.uz" className="contact-link">{t.contact.email}</a>
              </div>

              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className="contact-text">{t.contact.workHours}</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="footer-title">{t.social.title}</h3>
            <div className="social-links">
              <a href="https://t.me/dentify" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.305.02.471z"/>
                </svg>
              </a>

              <a href="https://instagram.com/dentify" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a href="https://facebook.com/dentify" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a href="https://youtube.com/@dentify" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
