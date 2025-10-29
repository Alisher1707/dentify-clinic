import './Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    uz: {
      home: 'Asosiy',
      services: 'Xizmatlar',
      structure: 'Klinikaning tuzilishi',
      contacts: 'Kontaktlar',
      request: "So'rov qoldiring",
    },
    ru: {
      home: 'Главная',
      services: 'Услуги',
      structure: 'Структура клиники',
      contacts: 'Контакты',
      request: 'Оставить заявку',
    }
  };

  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/img/logo.png" alt="Dentify Logo" />
        </div>

        {/* Menu Items */}
        <ul className="navbar-menu">
          <li><a href="#home">{t.home}</a></li>
          <li><a href="#services">{t.services}</a></li>
          <li><a href="#structure">{t.structure}</a></li>
          <li><a href="#contacts">{t.contacts}</a></li>
        </ul>

        {/* Right Side: Button, Phone, Language */}
        <div className="navbar-right">
          {/* Request Button */}
          <button className="request-button">
            {t.request} <span className="arrow">→</span>
          </button>

          {/* Phone Number */}
          <a href="tel:+998992360631" className="phone-link">
            +998(99) 236-06-31
          </a>

          {/* Language Switcher */}
          <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'uz' ? 'UZ' : 'RU'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
