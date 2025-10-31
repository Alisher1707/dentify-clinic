import './Location.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Location = () => {
  const { language } = useLanguage();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const translations = {
    uz: {
      title: "Bizning manzil xaritada",
      subtitle: "Biz bilan bog'laning",
      phone: "+998(99) 236-06-31",
      address: "Toshkent shahar, Chilonzor tumani",
      button: "Taksi buyurtma qilish",
      mapButton: "Xaritada ko'rish"
    },
    ru: {
      title: "Наш адрес на карте",
      subtitle: "Свяжитесь с нами",
      phone: "+998(99) 236-06-31",
      address: "г. Ташкент, Чиланзарский район",
      button: "Заказать такси",
      mapButton: "Просмотреть на карте"
    },
    en: {
      title: "Our location on the map",
      subtitle: "Contact Us",
      phone: "+998(99) 236-06-31",
      address: "Tashkent city, Chilanzar district",
      button: "Order taxi",
      mapButton: "View on map"
    }
  };

  const t = translations[language];

  return (
    <section ref={sectionRef} className={`location ${isVisible ? 'visible' : ''}`}>
      <div className="location-container">
        <h2 className="location-main-title">{t.title}</h2>

        <div className="location-content">
          <div className="location-info">
            <h3 className="location-subtitle">{t.subtitle}</h3>

            <div className="location-details">
              <div className="location-detail-item">
                <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href="tel:+998992360631" className="location-phone">{t.phone}</a>
              </div>

              <div className="location-detail-item">
                <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="location-address">{t.address}</p>
              </div>
            </div>

            <div className="location-buttons">
              <a
                href="https://www.google.com/maps/dir//41.2856445,69.2023866/@41.2856445,69.2023866,15z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn primary-btn"
              >
                {t.button} <span className="arrow-icon">→</span>
              </a>

              <a
                href="https://www.google.com/maps/place/41%C2%B017'08.3%22N+69%C2%B012'08.6%22E/@41.2856445,69.2023866,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn secondary-btn"
              >
                {t.mapButton}
              </a>
            </div>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.234567890123!2d69.2001!3d41.2856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzA4LjMiTiA2OcKwMTInMDguNiJF!5e0!3m2!1sen!2suz!4v1234567890123!5m2!1sen!2suz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dentify Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
