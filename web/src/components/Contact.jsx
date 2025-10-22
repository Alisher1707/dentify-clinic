import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [language, setLanguage] = useState('uz');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const translations = {
    uz: {
      title: "Batafsil ma'lumot, ro'yxatdan o'tish va ariza uchun veb-sayt yoki raqamga qo'ng'iroq qiling:",
      phone: "+998(99) 236-06-31",
      button: "Ariza qoldirish"
    },
    ru: {
      title: "Для подробной информации, регистрации и заявки звоните на сайт или по номеру:",
      phone: "+998(78) 147-00-44",
      button: "Оставить заявку"
    }
  };

  const t = translations[language];

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">{t.title}</h2>

            <a href="tel:+998781470044" className="contact-phone">
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
