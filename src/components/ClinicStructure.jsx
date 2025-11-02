import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';
import './ClinicStructure.css';

const ClinicStructure = () => {
  const { language } = useLanguage();

  const translations = {
    uz: {
      title: "ДЕНТИФАЙ клиникасини ташкил этишнинг мақсади",
      directorTitle: "Директор",
      chiefDoctorTitle: "Бош шифокор",
      chiefNurseTitle: "Шифокорлар",
      nursesTitle: "Ҳамшира",
      director: {
        name: "Аловуддинов Шамшодхўжа Дилшодович",
        position: 'ДЕНТИФАЙ Клиник директори'
      },
      chiefDoctor: {
        name: "Алаудинов Шаҳзодхўжа Дилшодович",
        position: "Бош шифокор"
      },
      chiefNurse: {
        name: "Taxtibayeva Yulduz Shuxratovna",
        position: "Bosh hamshira"
      },
      nurses: [
        {
          name: "Суюнова Матлуба Эшқуловна",
          position: "Клиник ҳамшира"
        },
        {
          name: "Мираҳмедова Нафосат Мамуржон қизи",
          position: "Даволаш хонаси ҳамшираси"
        },
        {
          name: "Камилова Мафтуна Омонбой қизи",
          position: "Лаборатория ҳамшираси"
        },
        {
          name: "Абдуллаева Заҳро Риҳсибаевна",
          position: "Кичик тиббиёт ходими - ҳамшираси"
        }
      ],
      doctors: [
        {
          name: "Алаудинов Шаҳзодхўжа Дилшодович",
          position: "Стоматолог"
        },
        {
          name: "Акбаров Маҳсуд Пулатович",
          position: "Терапевт, Врач ЧМ"
        },
        {
          name: "Абдураимов Аббосхўжа Абдураҳмонович",
          position: "Стоматолог"
        },
        {
          name: "Сабиржонов Муҳаммад Муродович",
          position: "Стоматолог"
        },
        {
          name: "Мусттафоев Шоҳрух Шавкат ўғли",
          position: "Стоматолог"
        },
        {
          name: "Саъдуллаева Шаҳзатхон Муҳторхон қизи",
          position: "Ортопед-стоматолог"
        },
        {
          name: "Ганиев Анвар Абдулҳамид ўғли",
          position: "Стоматолог"
        },
        {
          name: "Элчанов Умрбек Сотиволдиевич",
          position: "Стоматолог"
        },
        {
          name: "Каримов Жасур Шавкатович",
          position: "Стоматолог-терапевт"
        },
        {
          name: "Юсупова Дилноза Акрамовна",
          position: "Ортодонт"
        },
        {
          name: "Раҳимов Азиз Шарифович",
          position: "Стоматолог-жарроҳ"
        },
        {
          name: "Нурова Мадина Рустамовна",
          position: "Терапевтик стоматолог"
        }
      ]
    },
    ru: {
      title: "Структура клиники DENTIFY",
      directorTitle: "Директор",
      chiefDoctorTitle: "Главный врач",
      chiefNurseTitle: "Врачи",
      nursesTitle: "Медсестры",
      director: {
        name: "Аловуддинов Шамшодхўжа Дилшодович",
        position: 'Директор клиники "DENTIFY"'
      },
      chiefDoctor: {
        name: "Алаудинов Шахзодхоʻжа Дилшодович",
        position: "Заместитель ректора по ИТ"
      },
      chiefNurse: {
        name: "Тахтибаева Юлдуз Шухратовна",
        position: "Главная медсестра"
      },
      nurses: [
        {
          name: "Суюнова Матлуба Эшкуловна",
          position: "Клиническая медсестра"
        },
        {
          name: "Мирахмедова Нафосат Мамуржон кизи",
          position: "Медсестра процедурного кабинета"
        },
        {
          name: "Камилова Мафтуна Омонбой кизи",
          position: "Лабораторная медсестра"
        },
        {
          name: "Абдуллаева Захро Рихсибаевна",
          position: "Младший медицинский персонал - медсестра"
        }
      ],
      doctors: [
        {
          name: "Алаудинов Шахзодхоʻжа Дилшодович",
          position: "Стоматолог"
        },
        {
          name: "Акбаров Махсуд Пулатович",
          position: "Терапевт, Врач ЧМ"
        },
        {
          name: "Абдураимов Аббосхоʻжа Абдурахмонович",
          position: "Стоматолог"
        },
        {
          name: "Сабиржонов Мухаммад Муродович",
          position: "Стоматолог"
        },
        {
          name: "Мусттафоев Шохрух Шавкат угли",
          position: "Стоматолог"
        },
        {
          name: "Саъдуллаева Шахзатхон Мухторхон кизи",
          position: "Ортопед-стоматолог"
        },
        {
          name: "Ганиев Анвар Абдулхамид угли",
          position: "Стоматолог"
        },
        {
          name: "Элчанов Умрбек Сотиволдиевич",
          position: "Стоматолог"
        },
        {
          name: "Каримов Жасур Шавкатович",
          position: "Стоматолог-терапевт"
        },
        {
          name: "Юсупова Дилноза Акрамовна",
          position: "Ортодонт"
        },
        {
          name: "Рахимов Азиз Шарифович",
          position: "Стоматолог-хирург"
        },
        {
          name: "Нурова Мадина Рустамовна",
          position: "Терапевтический стоматолог"
        }
      ]
    },
    en: {
      title: "DENTIFY Clinic Structure",
      directorTitle: "Director",
      chiefDoctorTitle: "Chief Doctor",
      chiefNurseTitle: "Doctors",
      nursesTitle: "Nurses",
      director: {
        name: "Alovuddinov Shamshod kho'ja Dilshodovich",
        position: 'Director of "DENTIFY Clinic"'
      },
      chiefDoctor: {
        name: "Alaudinov Shahzodkho'ja Dilshodovich",
        position: "Deputy Rector for IT"
      },
      chiefNurse: {
        name: "Takhtibayeva Yulduz Shukhratovna",
        position: "Chief Nurse"
      },
      nurses: [
        {
          name: "Suyonova Matluba Eshkulovna",
          position: "Clinical Nurse"
        },
        {
          name: "Mirakhmedova Nafosat Mamurjon qizi",
          position: "Treatment Room Nurse"
        },
        {
          name: "Kamilova Maftuna Omonboy qizi",
          position: "Laboratory Nurse"
        },
        {
          name: "Abdullaeva Zakhro Rikhsibaevna",
          position: "Junior Medical Staff - Nurse"
        }
      ],
      doctors: [
        {
          name: "Alaudinov Shahzodkho'ja Dilshodovich",
          position: "Dentist"
        },
        {
          name: "Akbarov Makhsud Pulatovich",
          position: "Therapist, Doctor CHM"
        },
        {
          name: "Abduraimov Abboskho'ja Abdurakhmonovich",
          position: "Dentist"
        },
        {
          name: "Sabirjonov Mukhammad Murodovich",
          position: "Dentist"
        },
        {
          name: "Musttafoyev Shokhrukh Shavkat o'g'li",
          position: "Dentist"
        },
        {
          name: "Sa'dullaeva Shakhzatkhon Mukhtorkhon qizi",
          position: "Orthopedic Dentist"
        },
        {
          name: "Ganiev Anvar Abdulkhamid o'g'li",
          position: "Dentist"
        },
        {
          name: "Elchanov Umrbek Sotivoldiеvich",
          position: "Dentist"
        },
        {
          name: "Karimov Jasur Shavkatovich",
          position: "Therapeutic Dentist"
        },
        {
          name: "Yusupova Dilnoza Akramovna",
          position: "Orthodontist"
        },
        {
          name: "Rahimov Aziz Sharifovich",
          position: "Dental Surgeon"
        },
        {
          name: "Nurova Madina Rustamovna",
          position: "Therapeutic Dentist"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="clinic-structure-page">
      {/* Hero Banner */}
      <div className="clinic-structure-hero">
        <div className="clinic-structure-overlay"></div>
        <div className="hero-content">
          <h1 className="clinic-structure-title">{t.title}</h1>
        </div>
      </div>

      {/* Director Section */}
      <section className="director-section">
        <div className="director-container">
          <div className="director-card">
            <div className="director-image-placeholder">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="72" fill="#f0f0f0" stroke="#6366F1" strokeWidth="3"/>
                <circle cx="75" cy="60" r="25" fill="#6366F1"/>
                <path d="M35 130 Q35 95 75 95 Q115 95 115 130" fill="#6366F1"/>
              </svg>
            </div>
            <div className="director-info">
              <h3 className="director-name">{t.director.name}</h3>
              <p className="director-position">{t.director.position}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Doctor Section */}
      <section className="chief-section">
        <div className="chief-container">
          <h2 className="section-heading">{t.chiefDoctorTitle}</h2>
          <div className="chief-card">
            <div className="doctor-image-placeholder">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="58" fill="#f0f0f0" stroke="#8B5CF6" strokeWidth="2"/>
                <circle cx="60" cy="45" r="20" fill="#8B5CF6"/>
                <path d="M30 100 Q30 70 60 70 Q90 70 90 100" fill="#8B5CF6"/>
              </svg>
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{t.chiefDoctor.name}</h3>
              <p className="doctor-position">{t.chiefDoctor.position}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="doctors-container">
          <h2 className="section-heading">{t.chiefNurseTitle}</h2>
          <div className="doctors-grid">
            {t.doctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <div className="doctor-image-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" fill="#f0f0f0" stroke="#8B5CF6" strokeWidth="2"/>
                    <circle cx="50" cy="38" r="15" fill="#8B5CF6"/>
                    <path d="M25 85 Q25 60 50 60 Q75 60 75 85" fill="#8B5CF6"/>
                  </svg>
                </div>
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-position">{doctor.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nurses Section */}
      <section className="nurses-section">
        <div className="nurses-container">
          <h2 className="section-heading">{t.nursesTitle}</h2>
          <div className="nurses-grid">
            {t.nurses.map((nurse, index) => (
              <div key={index} className="nurse-card-item">
                <div className="nurse-image-placeholder">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" fill="#f0f0f0" stroke="#EC4899" strokeWidth="2"/>
                    <circle cx="50" cy="38" r="15" fill="#EC4899"/>
                    <path d="M25 85 Q25 60 50 60 Q75 60 75 85" fill="#EC4899"/>
                  </svg>
                </div>
                <h3 className="nurse-name">{nurse.name}</h3>
                <p className="nurse-position">{nurse.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ClinicStructure;
