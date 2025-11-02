import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';
import './ContactsPage.css';

const ContactsPage = ({ onBackToHome }) => {
  const { language } = useLanguage();

  // Taksi buyurtma qilish funksiyasi
  const handleTaxiOrder = () => {
    // Yandex Taxi ilovasini ochish (agar mavjud bo'lsa) yoki veb-saytga yo'naltirish
    const clinicAddress = "Toshkent shahar, Chilonzor tumani, Muqimiy ko'chasi 7/1";
    const yandexTaxiUrl = `https://3.redirect.appmetrica.yandex.com/route?end-lat=41.31108597927042&end-lon=69.24050931542795&appmetrica_tracking_id=1178268795219780156`;
    window.open(yandexTaxiUrl, '_blank');
  };

  // Xaritada ko'rish funksiyasi
  const handleViewOnMap = () => {
    // Google Maps da joylashuvni ochish
    const mapUrl = "https://www.google.com/maps?q=41.31108597927042,69.24050931542795";
    window.open(mapUrl, '_blank');
  };

  const translations = {
    uz: {
      title: "Kontaktlar",
      mapTitle: "Kontaktlar",
      contactTitle: "Biz bilan bog'laning",
      phone: "+998(99) 236-06-31",
      address: "Toshkent shahar, Chilonzor tumani",
      taxiButton: "Taksi buyurtma qilish",
      mapButton: "Xaritada ko'rish"
    },
    ru: {
      title: "Контакты",
      mapTitle: "Контакты",
      contactTitle: "Свяжитесь с нами",
      phone: "+998(99) 236-06-31",
      address: "Ташкент, Чиланзарский район",
      taxiButton: "Заказать такси",
      mapButton: "Посмотреть на карте"
    },
    en: {
      title: "Contacts",
      mapTitle: "Contacts",
      contactTitle: "Contact us",
      phone: "+998(99) 236-06-31",
      address: "Tashkent, Chilonzor district",
      taxiButton: "Order a taxi",
      mapButton: "View on map"
    }
  };

  const t = translations[language];

  return (
    <div className="contacts-page">
      {/* Hero Banner */}
      <div className="contacts-hero">
        <div className="contacts-hero-overlay"></div>
        <h1 className="contacts-title">{t.title}</h1>
      </div>

      {/* Main Content */}
      <section className="contacts-main-section">
        <div className="contacts-main-container">
          <h2 className="map-section-title">{t.mapTitle}</h2>

          <div className="contacts-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info-box">
              <h3 className="contact-box-title">{t.contactTitle}</h3>

              <div className="contact-info-items">
                <div className="info-item">
                  <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="#8B2C8F"/>
                  </svg>
                  <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="info-link">
                    {t.phone}
                  </a>
                </div>

                <div className="info-item">
                  <svg className="info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#8B2C8F"/>
                  </svg>
                  <p className="info-text">{t.address}</p>
                </div>
              </div>

              <button className="taxi-button" onClick={handleTaxiOrder}>
                {t.taxiButton} →
              </button>

              <button className="map-view-button" onClick={handleViewOnMap}>
                {t.mapButton}
              </button>
            </div>

            {/* Right Side - Map */}
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.344280362768!2d69.24050931542795!3d41.31108597927042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3f4a4a6d91%3A0x7c5d3e5a5b5a5b5a!2sMuqimiy%20Street%207%2F1%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DENTIFY Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactsPage;
