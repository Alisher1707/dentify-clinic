import { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const translations = {
    uz: {
      title: "Mijozlarimizning sharhlari",
      testimonials: [
        {
          name: "Nodira A.",
          text: "DENTIFY klinikasida implant qo'ydirib oldim. Operatsiya juda professional va og'riqsiz o'tdi. Shifokor doktor barcha jarayonni batafsil tushuntirib berdi. Natija zo'r! Tavsiya qilaman!",
          social: "telegram",
          rating: 5,
          date: "2025.01.15",
          avatar: "NA"
        },
        {
          name: "Sardor M.",
          text: "Yillar davomida tishlarimni davolashdan qo'rqardim, lekin DENTIFY klinikasidagi mutaxassislar menga ishonch bag'ishlashdi. Zamonaviy uskunalar va professional yondashuv. Rahmat!",
          social: "instagram",
          rating: 5,
          date: "2025.01.10",
          avatar: "SM"
        },
        {
          name: "Malika T.",
          text: "O'g'limni bolalar stomatologa olib bordim. Shifokor bolalar bilan juda yaxshi muloqot qildi, o'g'lim qo'rqmadi. Klinika juda toza va qulay. Hammaga tavsiya qilaman!",
          social: "telegram",
          rating: 5,
          date: "2025.01.05",
          avatar: "MT"
        },
        {
          name: "Bekzod R.",
          text: "Tish oqartirishni bu yerda qildirdim. Natija ajoyib! Tishlarim 3-4 tus oqarib ketdi. Mutaxassislar juda tajribali. Narxlari ham mos. Rahmat DENTIFY jamoasiga!",
          social: "instagram",
          rating: 5,
          date: "2024.12.28",
          avatar: "BR"
        },
        {
          name: "Zilola K.",
          text: "Ortodontik davolanish oldim - breket tizimi o'rnatdim. Shifokor har bir bosqichni tushuntirib berdi. 1.5 yil ichida tishlarim juda chiroyli bo'lib qoldi. Juda mamnunman!",
          social: "telegram",
          rating: 5,
          date: "2024.12.20",
          avatar: "ZK"
        },
        {
          name: "Jahongir U.",
          text: "DENTIFY klinikasida to'liq tish protezlash qildirdim. Natija kutganlarimdan ham yaxshi chiqdi. Zamonaviy materiallar ishlatilgan. Shifokorlar professional! Rahmat!",
          social: "instagram",
          rating: 5,
          date: "2024.12.15",
          avatar: "JU"
        },
        {
          name: "Fotima S.",
          text: "Parodontologiya bo'limida davolandim. Milk qonashini to'xtatdilar. Endi tishlarim mustahkam. Shifokorlar o'z ishining mutaxassisi. Rahmat!",
          social: "telegram",
          rating: 5,
          date: "2024.12.10",
          avatar: "FS"
        },
        {
          name: "Kamol D.",
          text: "Donoq tishni operatsiya qilib oldirishdi. Juda tez va og'riqsiz bo'ldi. Keyingi kunlarda hech qanday muammo bo'lmadi. Professional jamoa!",
          social: "instagram",
          rating: 5,
          date: "2024.12.05",
          avatar: "KD"
        },
        {
          name: "Nigora B.",
          text: "Viner qo'ydirib oldim. Tishlarim juda chiroyli va tabiiy ko'rinishga ega bo'ldi. Narxlari mos, sifati a'lo. Barcha do'stlarimga tavsiya qildim!",
          social: "telegram",
          rating: 5,
          date: "2024.11.30",
          avatar: "NB"
        },
        {
          name: "Otabek Y.",
          text: "3D skanerlash va diagnostika qildilar. Hammasi aniq va tez. Keyin davolanish rejasini tushuntirishdi. Zamonaviy texnologiyalar ishlatilgan. Zo'r!",
          social: "instagram",
          rating: 5,
          date: "2024.11.25",
          avatar: "OY"
        },
        {
          name: "Zarina N.",
          text: "Qizimga tish to'g'rilash uchun plastinka qo'ydirishdi. Shifokor bolalar bilan juda yaxshi muomala qiladi. Natija ajoyib. Rahmat DENTIFY!",
          social: "telegram",
          rating: 5,
          date: "2024.11.20",
          avatar: "ZN"
        },
        {
          name: "Farrux H.",
          text: "Keramik kaplama qo'ydirib oldim. Tishlarim endi juda chiroyli va oq. Mutaxassislar professional ishladilar. Hammaga tavsiya qilaman!",
          social: "instagram",
          rating: 5,
          date: "2024.11.15",
          avatar: "FH"
        }
      ]
    },
    ru: {
      title: "Отзывы наших клиентов",
      testimonials: [
        {
          name: "Нодира А.",
          text: "Сделала имплантацию в клинике DENTIFY. Операция прошла очень профессионально и безболезненно. Врач подробно объяснил весь процесс. Результат отличный! Рекомендую!",
          social: "telegram",
          rating: 5,
          date: "2025.01.15",
          avatar: "НА"
        },
        {
          name: "Сардор М.",
          text: "Годами боялся лечить зубы, но специалисты клиники DENTIFY вселили в меня уверенность. Современное оборудование и профессиональный подход. Спасибо!",
          social: "instagram",
          rating: 5,
          date: "2025.01.10",
          avatar: "СМ"
        },
        {
          name: "Малика Т.",
          text: "Водила сына к детскому стоматологу. Врач очень хорошо общался с ребенком, сын не испугался. Клиника очень чистая и удобная. Всем рекомендую!",
          social: "telegram",
          rating: 5,
          date: "2025.01.05",
          avatar: "МТ"
        },
        {
          name: "Бекзод Р.",
          text: "Сделал отбеливание зубов здесь. Результат потрясающий! Зубы стали белее на 3-4 тона. Специалисты очень опытные. Цены приемлемые. Спасибо команде DENTIFY!",
          social: "instagram",
          rating: 5,
          date: "2024.12.28",
          avatar: "БР"
        },
        {
          name: "Зилола К.",
          text: "Прошла ортодонтическое лечение - установила брекет-систему. Врач объяснил каждый этап. За 1.5 года зубы стали очень красивыми. Очень довольна!",
          social: "telegram",
          rating: 5,
          date: "2024.12.20",
          avatar: "ЗК"
        },
        {
          name: "Джахонгир У.",
          text: "Сделал полное протезирование зубов в клинике DENTIFY. Результат превзошел мои ожидания. Использованы современные материалы. Врачи профессионалы! Спасибо!",
          social: "instagram",
          rating: 5,
          date: "2024.12.15",
          avatar: "ДУ"
        },
        {
          name: "Фотима С.",
          text: "Лечилась в отделении пародонтологии. Остановили кровоточивость десен. Теперь мои зубы крепкие. Врачи - профессионалы своего дела. Спасибо!",
          social: "telegram",
          rating: 5,
          date: "2024.12.10",
          avatar: "ФС"
        },
        {
          name: "Камол Д.",
          text: "Удалили зуб мудрости. Очень быстро и безболезненно. В последующие дни никаких проблем не было. Профессиональная команда!",
          social: "instagram",
          rating: 5,
          date: "2024.12.05",
          avatar: "КД"
        },
        {
          name: "Нигора Б.",
          text: "Поставила виниры. Мои зубы стали очень красивыми и естественными. Цены приемлемые, качество отличное. Рекомендовала всем подругам!",
          social: "telegram",
          rating: 5,
          date: "2024.11.30",
          avatar: "НБ"
        },
        {
          name: "Отабек Й.",
          text: "Сделали 3D-сканирование и диагностику. Все точно и быстро. Потом объяснили план лечения. Используются современные технологии. Отлично!",
          social: "instagram",
          rating: 5,
          date: "2024.11.25",
          avatar: "ОЙ"
        },
        {
          name: "Зарина Н.",
          text: "Дочке поставили пластинку для выравнивания зубов. Врач очень хорошо обращается с детьми. Результат отличный. Спасибо DENTIFY!",
          social: "telegram",
          rating: 5,
          date: "2024.11.20",
          avatar: "ЗН"
        },
        {
          name: "Фаррух Х.",
          text: "Установил керамические накладки. Мои зубы теперь очень красивые и белые. Специалисты работали профессионально. Всем рекомендую!",
          social: "instagram",
          rating: 5,
          date: "2024.11.15",
          avatar: "ФХ"
        }
      ]
    },
    en: {
      title: "Our Clients' Reviews",
      testimonials: [
        {
          name: "Nodira A.",
          text: "Got dental implants at DENTIFY clinic. The operation was very professional and painless. The doctor explained the entire process in detail. Great results! Highly recommend!",
          social: "telegram",
          rating: 5,
          date: "2025.01.15",
          avatar: "NA"
        },
        {
          name: "Sardor M.",
          text: "I was afraid to treat my teeth for years, but the specialists at DENTIFY clinic gave me confidence. Modern equipment and professional approach. Thank you!",
          social: "instagram",
          rating: 5,
          date: "2025.01.10",
          avatar: "SM"
        },
        {
          name: "Malika T.",
          text: "Took my son to a pediatric dentist. The doctor communicated very well with children, my son wasn't scared. The clinic is very clean and comfortable. I recommend it to everyone!",
          social: "telegram",
          rating: 5,
          date: "2025.01.05",
          avatar: "MT"
        },
        {
          name: "Bekzod R.",
          text: "Got teeth whitening done here. The result is amazing! My teeth became 3-4 shades whiter. The specialists are very experienced. Reasonable prices. Thanks to DENTIFY team!",
          social: "instagram",
          rating: 5,
          date: "2024.12.28",
          avatar: "BR"
        },
        {
          name: "Zilola K.",
          text: "Underwent orthodontic treatment - installed braces. The doctor explained each stage. In 1.5 years my teeth became very beautiful. Very satisfied!",
          social: "telegram",
          rating: 5,
          date: "2024.12.20",
          avatar: "ZK"
        },
        {
          name: "Jahongir U.",
          text: "Had full dental prosthetics done at DENTIFY clinic. The result exceeded my expectations. Modern materials used. The doctors are professionals! Thank you!",
          social: "instagram",
          rating: 5,
          date: "2024.12.15",
          avatar: "JU"
        },
        {
          name: "Fotima S.",
          text: "Treated in the periodontics department. They stopped my gum bleeding. Now my teeth are strong. The doctors are professionals. Thank you!",
          social: "telegram",
          rating: 5,
          date: "2024.12.10",
          avatar: "FS"
        },
        {
          name: "Kamol D.",
          text: "Had my wisdom tooth removed. Very fast and painless. No problems in the following days. Professional team!",
          social: "instagram",
          rating: 5,
          date: "2024.12.05",
          avatar: "KD"
        },
        {
          name: "Nigora B.",
          text: "Got veneers. My teeth look very beautiful and natural. Reasonable prices, excellent quality. Recommended to all my friends!",
          social: "telegram",
          rating: 5,
          date: "2024.11.30",
          avatar: "NB"
        },
        {
          name: "Otabek Y.",
          text: "They did 3D scanning and diagnostics. Everything was accurate and fast. Then explained the treatment plan. Modern technologies used. Excellent!",
          social: "instagram",
          rating: 5,
          date: "2024.11.25",
          avatar: "OY"
        },
        {
          name: "Zarina N.",
          text: "Got my daughter a plate for teeth alignment. The doctor treats children very well. Result is excellent. Thanks DENTIFY!",
          social: "telegram",
          rating: 5,
          date: "2024.11.20",
          avatar: "ZN"
        },
        {
          name: "Farrux H.",
          text: "Installed ceramic veneers. My teeth are now very beautiful and white. Specialists worked professionally. Highly recommend to everyone!",
          social: "instagram",
          rating: 5,
          date: "2024.11.15",
          avatar: "FH"
        }
      ]
    }
  };

  const t = translations[language];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(t.testimonials.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalPages]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    }
    if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, nextSlide]);

  const getSocialIcon = (social) => {
    if (social === 'telegram') {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.305.02.471z"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            viewBox="0 0 24 24"
            fill={index < rating ? '#FFB800' : '#e2e8f0'}
            width="16"
            height="16"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
    );
  };

  const getQuoteIcon = () => {
    return (
      <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" opacity="0.1"/>
      </svg>
    );
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return t.testimonials.slice(start, end);
  };

  return (
    <section ref={sectionRef} className={`testimonials ${isVisible ? 'visible' : ''}`}>
      <div className="testimonials-container">
        <h2 className="testimonials-title">{t.title}</h2>

        <div className="testimonials-wrapper">
          <button
            className="testimonial-nav prev"
            onClick={prevSlide}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="testimonials-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`testimonials-track ${isAnimating ? `slide-${direction}` : ''}`}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  {getQuoteIcon()}
                  <div className="testimonial-top">
                    <div className="testimonial-avatar">
                      {testimonial.avatar}
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-social">
                      {getSocialIcon(testimonial.social)}
                    </div>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-date">{testimonial.date}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="testimonial-nav next"
            onClick={nextSlide}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
