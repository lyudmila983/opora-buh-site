export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#f8fafc', color: '#0b1f3a' }}>
      <section style={hero}>
        <header style={header}>
          <a href="#top" style={logoWrap}>
            <img src="/logo.png" alt="ОПОРА" style={logoImg} />
          </a>

          <nav style={nav}>
            <a href="#top" style={navLink}>Главная</a>
            <a href="#services" style={navLink}>Услуги</a>
            <a href="#benefits" style={navLink}>Преимущества</a>
            <a href="#about" style={navLink}>Обо мне</a>
            <a href="#contacts" style={navLink}>Контакты</a>
          </nav>

          <a href="#contacts" style={topButton}>Записаться на консультацию</a>
        </header>

        <div id="top" style={heroGrid}>
          <div>
            <p style={goldText}>Наставничество • Бухгалтерские услуги • Помощь бизнесу</p>
            <h1 style={heroTitle}>Опора бухгалтеру — практическая помощь в учёте, налогах и уверенном старте в профессии</h1>
            <div style={smallGoldLine}></div>
            <p style={heroLead}>
              Помогаю начинающим бухгалтерам освоить практику, а предпринимателям и организациям — разобраться в учёте, налогах, отчётности и требованиях контролирующих органов.
            </p>

            <div style={buttonRow}>
              <a href="#contacts" style={goldButton}>📅 Записаться на консультацию</a>
              <a href="#services" style={outlineButton}>📋 Посмотреть услуги</a>
            </div>

            <div style={trustGrid}>
              <Trust icon="🛡️" title="Опыт и практика" text="Реальные кейсы и решения" />
              <Trust icon="✅" title="Понятно и доступно" text="Объясняю сложное простым языком" />
              <Trust icon="🔒" title="Конфиденциальность" text="Ваши данные под защитой" />
            </div>
          </div>

          <div style={heroImageBox}>
            <div style={notebookScene}>
              <div style={plant}></div>
              <div style={calculator}></div>
              <div style={notebook}>
                <img src="/logo.png" alt="ОПОРА" style={notebookLogo} />
              </div>
              <div style={pen}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={whiteSection}>
        <div style={container}>
          <h2 style={sectionTitle}>Услуги</h2>
          <div style={titleLine}></div>
          <p style={sectionLead}>Выберите формат помощи под вашу задачу</p>

          <div style={cardsGrid}>
            <Service icon="📖" title="Наставничество для бухгалтеров" text="Практика, разбор кейсов, поддержка и ответы на вопросы." link="Подробнее →" />
            <Service icon="🧮" title="Бухгалтерские услуги для бизнеса" text="Ведение учёта, расчёт налогов, подготовка и сдача отчётности." link="Подробнее →" />
            <Service icon="📑" title="Налоговые консультации" text="Снижение налоговых рисков, выбор оптимального режима налогообложения." link="Подробнее →" />
            <Service icon="👤" title="Помощь при проверках" text="Подготовка документов, сопровождение и защита ваших интересов." link="Подробнее →" />
          </div>
        </div>
      </section>

      <section id="benefits" style={darkPanelSection}>
        <div style={darkPanel}>
          <h2 style={{ ...sectionTitle, color: 'white' }}>Почему выбирают меня</h2>
          <div style={titleLine}></div>
          <div style={benefitGrid}>
            <Benefit icon="⭐" title="Практический опыт" text="Более 20 лет работы в бухгалтерии и финансах разных компаний." />
            <Benefit icon="🎯" title="Индивидуальный подход" text="Решения под вашу ситуацию, без шаблонов и лишней теории." />
            <Benefit icon="📈" title="Результат и уверенность" text="Помогаю навести порядок в учёте и принимать верные решения." />
            <Benefit icon="🏅" title="Честность и надёжность" text="Работаю открыто, соблюдаю сроки и договорённости." />
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={ctaIcon}>📅</div>
        <div>
          <h2 style={ctaTitle}>Нужна помощь бухгалтеру или вашему бизнесу?</h2>
          <p style={ctaText}>Запишитесь на консультацию — разберём вашу задачу и найдём лучшее решение.</p>
        </div>
        <a href="#contacts" style={goldButton}>Записаться на консультацию</a>
      </section>

      <section id="about" style={aboutSection}>
        <div style={aboutPhoto}>👩‍💼</div>
        <div>
          <h2 style={sectionTitle}>Обо мне</h2>
          <div style={titleLine}></div>
          <p style={aboutText}>
            Я — практикующий бухгалтер и наставник. Помогаю начинающим специалистам уверенно развиваться в профессии, а бизнесу — выстроить надёжный учёт и снизить налоговые риски. В своей работе ценю точность, ответственность и доверие клиентов.
          </p>
          <a href="#contacts" style={outlineGoldButton}>Подробнее обо мне</a>
        </div>
        <div style={statsColumn}>
          <Stat number="20+" text="лет практического опыта" />
          <Stat number="300+" text="довольных клиентов" />
          <Stat number="1000+" text="успешных консультаций" />
        </div>
      </section>

      <section id="contacts" style={contactSection}>
        <div style={container}>
          <h2 style={{ ...sectionTitle, color: 'white' }}>Контакты</h2>
          <p style={{ ...sectionLead, color: '#dbeafe' }}>Свяжитесь удобным способом — помогу разобраться в вашей ситуации.</p>
          <div style={contactGrid}>
            <Contact label="Телефон" value="+7 (906) 416-86-08" />
            <Contact label="MAX" value="+7 (906) 416-86-08" />
            <Contact label="Город" value="Таганрог" />
          </div>
        </div>
      </section>

      <footer style={footer}>
        <div style={footerGrid}>
          <div>
            <img src="/logo.png" alt="ОПОРА" style={{ width: '150px', height: 'auto' }} />
            <p style={footerText}>Практическая помощь в учёте, налогах и уверенном старте в профессии.</p>
          </div>
          <div>
            <h4 style={footerTitle}>Навигация</h4>
            <p style={footerLink}>Главная</p>
            <p style={footerLink}>Услуги</p>
            <p style={footerLink}>Преимущества</p>
            <p style={footerLink}>Обо мне</p>
          </div>
          <div>
            <h4 style={footerTitle}>Услуги</h4>
            <p style={footerLink}>Наставничество</p>
            <p style={footerLink}>Бухгалтерские услуги</p>
            <p style={footerLink}>Налоговые консультации</p>
            <p style={footerLink}>Помощь при проверках</p>
          </div>
          <div>
            <h4 style={footerTitle}>Правовая информация</h4>
            <a href="/privacy.pdf" target="_blank" style={footerLink}>
  Политика конфиденциальности
</a>

<a href="/consent.pdf" target="_blank" style={footerLink}>
  Согласие на обработку персональных данных
</a>
            <p style={footerLink}>© {new Date().getFullYear()} ОПОРА</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Trust({ icon, title, text }) {
  return (
    <div style={trustItem}>
      <div style={trustIcon}>{icon}</div>
      <div>
        <strong>{title}</strong>
        <p style={trustText}>{text}</p>
      </div>
    </div>
  );
}

function Service({ icon, title, text, link }) {
  return (
    <div style={serviceCard}>
      <div style={serviceIcon}>{icon}</div>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>

      <details style={detailsBox}>
        <summary style={moreLink}>Подробнее →</summary>
        <div style={detailsText}>
          {title === 'Наставничество для бухгалтеров' && (
            <ul>
              <li>Разбор 1С, первичных документов и отчётности.</li>
              <li>Практические задания и проверка результата.</li>
              <li>Поддержка начинающего бухгалтера до уверенности.</li>
              <li>Подготовка к собеседованию и первой работе.</li>
            </ul>
          )}

          {title === 'Бухгалтерские услуги для бизнеса' && (
            <ul>
              <li>Ведение ИП и ООО.</li>
              <li>УСН, зарплата, отчётность, контроль налогов.</li>
              <li>Проверка учёта и поиск ошибок.</li>
              <li>Сопровождение руководителя понятным языком.</li>
            </ul>
          )}

          {title === 'Налоговые консультации' && (
            <ul>
              <li>Разбор УСН, НДС, зарплаты и налоговой нагрузки.</li>
              <li>Ответы на требования ИФНС и СФР.</li>
              <li>Оценка налоговых рисков.</li>
              <li>Пошаговый план действий.</li>
            </ul>
          )}

          {title === 'Помощь при проверках' && (
            <ul>
              <li>Подготовка пояснений и документов.</li>
              <li>Анализ требований контролирующих органов.</li>
              <li>Помощь в формулировках ответов.</li>
              <li>Сопровождение до закрытия вопроса.</li>
            </ul>
          )}
        </div>
      </details>
    </div>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <div style={benefitItem}>
      <div style={benefitIcon}>{icon}</div>
      <h3 style={benefitTitle}>{title}</h3>
      <p style={benefitText}>{text}</p>
    </div>
  );
}

function Stat({ number, text }) {
  return (
    <div style={statItem}>
      <div style={statNumber}>{number}</div>
      <p style={statText}>{text}</p>
    </div>
  );
}

function Contact({ label, value }) {
  return (
    <div style={contactCard}>
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  );
}

const navy = '#061a3a';
const navy2 = '#0b2b5c';
const gold = '#d4af37';
const goldLight = '#f7d77a';

const hero = {
  background: `radial-gradient(circle at 80% 20%, ${navy2}, ${navy} 65%)`,
  color: 'white',
  padding: '26px 34px 70px'
};

const header = {
  maxWidth: '1280px',
  margin: '0 auto 58px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap'
};

const logoWrap = {
  display: 'block',
  textDecoration: 'none'
};

const logoImg = {
  width: '150px',
  height: 'auto',
  display: 'block'
};

const nav = {
  display: 'flex',
  alignItems: 'center',
  gap: '34px',
  flexWrap: 'wrap'
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: '16px'
};

const topButton = {
  background: `linear-gradient(135deg, ${goldLight}, ${gold})`,
  color: navy,
  textDecoration: 'none',
  fontWeight: '800',
  padding: '18px 28px',
  borderRadius: '16px',
  boxShadow: '0 10px 28px rgba(212,175,55,0.28)'
};

const heroGrid = {
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'minmax(320px, 1fr) minmax(320px, 520px)',
  gap: '60px',
  alignItems: 'center'
};

const goldText = {
  color: goldLight,
  fontSize: '18px',
  margin: '0 0 18px'
};

const heroTitle = {
  fontSize: 'clamp(38px, 5vw, 62px)',
  lineHeight: '1.12',
  margin: '0',
  fontWeight: '900',
  letterSpacing: '-1px'
};

const smallGoldLine = {
  width: '80px',
  height: '4px',
  background: gold,
  margin: '22px 0',
  borderRadius: '999px'
};

const heroLead = {
  fontSize: '20px',
  lineHeight: '1.7',
  color: '#e5efff',
  maxWidth: '760px'
};

const buttonRow = {
  display: 'flex',
  gap: '18px',
  flexWrap: 'wrap',
  marginTop: '32px'
};

const goldButton = {
  background: `linear-gradient(135deg, ${goldLight}, ${gold})`,
  color: navy,
  textDecoration: 'none',
  fontWeight: '800',
  padding: '17px 28px',
  borderRadius: '14px',
  display: 'inline-block',
  boxShadow: '0 10px 28px rgba(212,175,55,0.25)'
};

const outlineButton = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '800',
  padding: '16px 28px',
  borderRadius: '14px',
  border: `2px solid ${gold}`,
  display: 'inline-block'
};

const trustGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '18px',
  marginTop: '46px'
};

const trustItem = {
  display: 'flex',
  gap: '14px',
  alignItems: 'flex-start',
  paddingRight: '16px',
  borderRight: '1px solid rgba(255,255,255,0.18)'
};

const trustIcon = {
  color: goldLight,
  fontSize: '30px'
};

const trustText = {
  margin: '6px 0 0',
  color: '#dbeafe',
  lineHeight: '1.45',
  fontSize: '15px'
};

const heroImageBox = {
  border: `4px solid ${gold}`,
  borderRadius: '24px',
  overflow: 'hidden',
  minHeight: '470px',
  background: '#eef2f7',
  boxShadow: '0 22px 55px rgba(0,0,0,0.35)'
};

const notebookScene = {
  position: 'relative',
  height: '470px',
  background: 'linear-gradient(135deg, #f8fafc, #dbe3ef)',
  overflow: 'hidden'
};

const notebook = {
  position: 'absolute',
  width: '330px',
  height: '420px',
  right: '90px',
  top: '55px',
  background: 'linear-gradient(135deg, #061a3a, #14346d)',
  borderRadius: '18px',
  transform: 'rotate(-14deg)',
  boxShadow: '0 26px 55px rgba(15,23,42,0.45)',
  border: '2px solid rgba(212,175,55,0.65)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const notebookLogo = {
  width: '230px',
  transform: 'rotate(0deg)',
  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
};

const plant = {
  position: 'absolute',
  width: '140px',
  height: '140px',
  left: '20px',
  top: '20px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, #14532d, #86efac 45%, transparent 48%)',
  opacity: 0.75
};

const calculator = {
  position: 'absolute',
  width: '170px',
  height: '250px',
  right: '-35px',
  top: '80px',
  borderRadius: '18px',
  background: 'repeating-linear-gradient(0deg, #111827, #111827 28px, #374151 30px)',
  transform: 'rotate(18deg)',
  opacity: 0.9
};

const pen = {
  position: 'absolute',
  width: '250px',
  height: '16px',
  right: '10px',
  bottom: '55px',
  background: `linear-gradient(90deg, ${gold}, ${goldLight}, #8a6b12)`,
  borderRadius: '999px',
  transform: 'rotate(-22deg)',
  boxShadow: '0 8px 18px rgba(0,0,0,0.25)'
};

const whiteSection = {
  background: '#f8fafc',
  padding: '64px 28px 78px'
};

const container = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const sectionTitle = {
  fontSize: '42px',
  margin: '0',
  textAlign: 'center',
  color: navy,
  fontWeight: '900'
};

const titleLine = {
  width: '58px',
  height: '4px',
  background: gold,
  borderRadius: '999px',
  margin: '14px auto 16px'
};

const sectionLead = {
  textAlign: 'center',
  color: '#475569',
  fontSize: '18px',
  margin: '0 0 42px'
};

const cardsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))',
  gap: '28px'
};

const serviceCard = {
  background: 'white',
  borderRadius: '18px',
  padding: '34px 30px',
  minHeight: '260px',
  boxShadow: '0 16px 40px rgba(15,23,42,0.10)',
  border: '1px solid #e5e7eb'
};

const serviceIcon = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  background: '#f3ead2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  marginBottom: '22px'
};

const cardTitle = {
  fontSize: '22px',
  color: navy,
  margin: '0 0 14px',
  lineHeight: '1.3'
};

const cardText = {
  color: '#334155',
  fontSize: '16px',
  lineHeight: '1.65'
};

const moreLink = {
  color: gold,
  fontWeight: '800',
  marginTop: '22px',
  cursor: 'pointer',
  listStyle: 'none'
};

const detailsBox = {
  marginTop: '18px'
};

const detailsText = {
  marginTop: '14px',
  color: '#334155',
  fontSize: '15px',
  lineHeight: '1.7',
  background: '#f8fafc',
  padding: '16px',
  borderRadius: '14px',
  border: '1px solid #e5e7eb'
};

const darkPanelSection = {
  background: '#f8fafc',
  padding: '0 28px 64px'
};

const darkPanel = {
  maxWidth: '1200px',
  margin: '0 auto',
  background: `linear-gradient(135deg, ${navy}, ${navy2})`,
  borderRadius: '18px',
  padding: '46px 34px',
  color: 'white'
};

const benefitGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '28px',
  marginTop: '36px'
};

const benefitItem = {
  textAlign: 'center',
  padding: '0 18px',
  borderRight: '1px solid rgba(255,255,255,0.18)'
};

const benefitIcon = {
  fontSize: '42px',
  color: goldLight,
  marginBottom: '14px'
};

const benefitTitle = {
  color: 'white',
  fontSize: '19px',
  margin: '0 0 10px'
};

const benefitText = {
  color: '#dbeafe',
  lineHeight: '1.55',
  fontSize: '15px'
};

const ctaSection = {
  maxWidth: '1200px',
  margin: '0 auto 64px',
  background: `linear-gradient(135deg, ${navy}, ${navy2})`,
  borderRadius: '18px',
  padding: '42px 34px',
  color: 'white',
  display: 'grid',
  gridTemplateColumns: '90px 1fr auto',
  gap: '28px',
  alignItems: 'center'
};

const ctaIcon = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'rgba(212,175,55,0.18)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '38px'
};

const ctaTitle = {
  margin: '0 0 10px',
  fontSize: '30px'
};

const ctaText = {
  color: '#dbeafe',
  margin: 0,
  fontSize: '17px'
};

const aboutSection = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px 28px 80px',
  display: 'grid',
  gridTemplateColumns: '240px 1fr 220px',
  gap: '42px',
  alignItems: 'center'
};

const aboutPhoto = {
  width: '220px',
  height: '220px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #e5e7eb, #ffffff)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '90px',
  boxShadow: '0 16px 35px rgba(15,23,42,0.12)'
};

const aboutText = {
  color: '#334155',
  fontSize: '17px',
  lineHeight: '1.75'
};

const outlineGoldButton = {
  color: gold,
  border: `2px solid ${gold}`,
  borderRadius: '12px',
  padding: '13px 22px',
  display: 'inline-block',
  textDecoration: 'none',
  fontWeight: '800',
  marginTop: '10px'
};

const statsColumn = {
  display: 'grid',
  gap: '18px'
};

const statItem = {
  borderBottom: '1px solid #dbe3ef',
  paddingBottom: '14px'
};

const statNumber = {
  color: gold,
  fontSize: '34px',
  fontWeight: '900'
};

const statText = {
  color: '#334155',
  margin: '6px 0 0'
};

const contactSection = {
  background: `linear-gradient(135deg, ${navy}, ${navy2})`,
  color: 'white',
  padding: '60px 28px'
};

const contactGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '22px'
};

const contactCard = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '16px',
  padding: '24px',
  color: 'white'
};

const footer = {
  background: '#06142d',
  color: '#cbd5e1',
  padding: '46px 28px 26px'
};

const footerGrid = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
  gap: '32px'
};

const footerText = {
  color: '#cbd5e1',
  lineHeight: '1.6'
};

const footerTitle = {
  color: 'white',
  marginTop: 0
};

const footerLink = {
  color: '#cbd5e1',
  margin: '8px 0'
};


