import "./Appointment.css"
import { useLanguage } from '../contexts/LanguageContext';

export default function Appointment() {
  const { language } = useLanguage();

  const translations = {
    uz: {
      title: "Batafsil maslahat uchun so'rov qoldiring!",
      namePlaceholder: "Ism va Familiya",
      phonePlaceholder: "+998",
      messagePlaceholder: "Savollaringiz / afzal yozib olish vaqti",
      submitButton: "Yuborish"
    },
    ru: {
      title: "Оставьте заявку для подробной консультации!",
      namePlaceholder: "Имя и Фамилия",
      phonePlaceholder: "+998",
      messagePlaceholder: "Ваши вопросы / предпочтительное время записи",
      submitButton: "Отправить"
    }
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted")
  }

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        {/* Left side - Doctor image */}
        <div className="appointment-image">
            <img src="/img/female.doctor.jpg" alt="Doctor with clipboard" className="doctor-image" />
        </div>

        {/* Right side - Form */}
        <div className="appointment-form-wrapper">
          <h2 className="appointment-title">{t.title}</h2>

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <input type="text" placeholder={t.namePlaceholder} className="form-input" required />
              <input type="tel" placeholder={t.phonePlaceholder} className="form-input" required />
            </div>

            <textarea
              placeholder={t.messagePlaceholder}
              className="form-textarea"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="submit-button">
              {t.submitButton} <span className="checkmark">✓</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
