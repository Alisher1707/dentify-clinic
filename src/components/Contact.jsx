import { useState, useEffect } from 'react';
import './Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const images = [
    '/img/doctor-client.jpg',
    'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=800&q=80',
    '/img/tish-rasmi.webp',
    '/img/stoma-room.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const translations = {
    uz: {
      title: "Batafsil ma'lumot, ro'yxatdan o'tish va ariza uchun veb-sayt yoki raqamga qo'ng'iroq qiling:",
      phone: "+998(99) 236-06-31",
      button: "Ariza qoldirish"
    },
    ru: {
      title: "Для подробной информации, регистрации и заявки звоните на сайт или по номеру:",
      phone: "+998(99) 236-06-31",
      button: "Оставить заявку"
    },
    en: {
      title: "For detailed information, registration and application, call the website or number:",
      phone: "+998(99) 236-06-31",
      button: "Submit Request"
    }
  };

  const t = translations[language];

  return (
    <section ref={sectionRef} className={`contact ${isVisible ? 'visible' : ''}`}>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">{t.title}</h2>

            <a href="tel:+998992360631" className="contact-phone">
              {t.phone}
            </a>

            <button className="contact-btn">
              {t.button} <span className="check-icon">✓</span>
            </button>
          </div>

          <div className="contact-image">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Dentify Clinic ${index + 1}`}
                className={`clinic-photo ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
