import './Navbar.css';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = ({ onNavigateToServices, onNavigateToHome }) => {
  const { language, setLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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
    },
    en: {
      home: 'Home',
      services: 'Services',
      structure: 'Clinic Structure',
      contacts: 'Contacts',
      request: 'Submit Request',
    }
  };

  const t = translations[language];

  const languages = [
    {
      code: 'uz',
      name: "O'ZB",
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/320px-Flag_of_Uzbekistan.svg.png'
    },
    {
      code: 'ru',
      name: 'РУС',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png'
    },
    {
      code: 'en',
      name: 'ENG',
      flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/img/logo.png" alt="Dentify Logo" />
        </div>

        {/* Menu Items */}
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigateToHome && onNavigateToHome(); }}>{t.home}</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigateToServices && onNavigateToServices(); }}>{t.services}</a></li>
          <li><a href="#structure" onClick={(e) => { e.preventDefault(); onNavigateToHome && onNavigateToHome(); }}>{t.structure}</a></li>
          <li><a href="#contacts" onClick={(e) => { e.preventDefault(); onNavigateToHome && onNavigateToHome(); }}>{t.contacts}</a></li>
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

          {/* Language Switcher with Dropdown */}
          <div className="language-dropdown">
            <button
              className="language-switcher"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <img src={currentLanguage.flagUrl} alt={currentLanguage.name} className="current-flag" />
              <span className="dropdown-arrow">{isLanguageOpen ? '▲' : '▼'}</span>
            </button>

            {isLanguageOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <img src={lang.flagUrl} alt={lang.name} className="flag-image" />
                    <span className="lang-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
