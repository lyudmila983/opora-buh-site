export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', color: '#0f172a', background: '#f8fafc' }}>
      <section style={heroSection}>
        <div style={navBar}>
          <div style={logoBox}>
            <img src="/logo.png" alt="ОПОРА" style={{ width: '170px', height: 'auto', display: 'block' }} />
          </div>
          <nav style={navLinks}>
            <a href="#services" style={navLink}>Услуги</a>
            <a href="#benefits" style={navLink}>Преимущества</a>
            <a href="#about" style={navLink}>Обо мне</a>
            <a href="#contacts" style={navLink}>Контакты</a>
          </nav>
          <a href="#contacts" style={navButton}>Записаться</a>
        </div>

        <div style={heroGrid}>
          <div>
            <p style={eyebrow}>Наставничество • Бухгалтерские услуги • Помощь бизнесу</p>
            <h1 style={heroTitle}>Опора бухгалтеру — практическая помощь в учёте, налогах и уверенном старте в профессии</h1>
            <div style={goldLine}></div>
            <p style={heroText}>
              Помогаю начинающим бухгалтерам освоить практику, а предпринимателям и организациям — разобраться в учёте, налогах, отчётности и требованиях контролирующих органов.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#contacts" style={buttonGold}>Записаться на консультацию</a>
              <a href="#services" style={buttonOutline}>Посмотреть услуги</a>
            </div>
            <div style={trustRow}>
              <Trust title="Опыт и практика" text="Реальные кейсы и решения" />
              <Trust title="Понятно" text="Объясняю простым языком" />
              <Trust title="Надёжно" text="Конфиденциальность и поддержка" />
            </div>
          </div>

          <div style={heroCard}>
            <div style={heroCardInner}>
              <div style={notebook}>
                <img src="/logo.png" alt="ОПОРА" style={{ width: '230px', height: 'auto', display: 'block', margin: '0 auto' }} />
                <p style={{ color: '#d4af37', textAlign: 'center', marginTop: '18px', fontWeight: 'bold' }}>Уверенность в профессии</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={sectionStyle}>
        <h2 style={h2}>Услуги</h2>
        <p style={lead}>Выберите формат помощи под вашу задачу.</p>
        <div style={grid4}>
          <Card icon="📘" title="Наставничество для бухгалтеров" text="Практика, разбор кейсов, поддержка и ответы на вопросы." price="от 20 000 ₽" />
          <Card icon="🧾" title="Бухгалтерские услуги для бизнеса" text="Ведение учёта, расчёт налогов, подготовка и сдача отчётности." price="от 10 000 ₽" />
          <Card icon="📊" title="Налоговые консультации" text="УСН, НДС, зарплата, 1С, требования ИФНС и СФР." price="от 5 000 ₽" />
          <Card icon="👥" title="Подбор бухгалтера" text="Оценка кандидатов, адаптация и контроль практических навыков." price="от 50 000 ₽" />
        </div>
      </section>

      <section id="benefits" style={{ ...sectionStyle, background: 'white' }}>
        <h2 style={h2}>Почему выбирают «ОПОРУ»</h2>
        <div style={grid3}>
          <Info title="Для начинающих бухгалтеров" items={["Практика после учёбы", "Разбор 1С и первички", "Подготовка к работе", "Поддержка наставника"]} />
          <Info title="Для предпринимателей" items={["Проверка учёта", "Ответы на требования", "Налоговые риски", "Понятный план действий"]} />
          <Info title="Для работодателей" items={["Подбор специалиста", "Проверка компетенций", "Адаптация бухгалтера", "Экономия времени"]} />
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <div style={aboutBlock}>
          <div>
            <h2 style={h2}>Обо мне</h2>
            <p style={lead}>
              Меня зовут Людмила. Я практикующий главный бухгалтер с большим опытом работы. Помогаю бухгалтерам расти в профессии, а бизнесу — уверенно разбираться в учёте, налогах и отчётности.
            </p>
            <div style={statsGrid}>
              <Stat number="20+" text="лет практики" />
              <Stat number="1С" text="практический учёт" />
              <Stat number="ИФНС/СФР" text="ответы на требования" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, background: '#0f172a', color: 'white' }}>
        <h2 style={{ ...h2, color: 'white' }}>Тарифы</h2>
        <div style={grid3}>
          <Tariff title="Старт" price="20 000 ₽" text="1 месяц наставничества для начинающего бухгалтера." />
          <Tariff title="Практик" price="50 000 ₽" text="3 месяца сопровождения, кейсы, 1С и отчётность." />
          <Tariff title="Профессионал" price="90 000 ₽" text="6 месяцев поддержки до уверенной самостоятельной работы." />
        </div>
      </section>

      <section id="contacts" style={sectionStyle}>
        <div style={contactCard}>
          <h2 style={h2}>Записаться на консультацию</h2>
          <p style={lead}>Напишите, какая у вас задача: наставничество, консультация для бизнеса или подбор бухгалтера.</p>
          <div style={{ marginTop: '24px', display: 'grid', gap: '12px', fontSize: '18px' }}>
            <p><strong>Телефон:</strong> +7 (906) 416-86-08</p>
            <p><strong>MAX:</strong> +7 (906) 416-86-08</p>
            <p><strong>Город:</strong> Таганрог</p>
          </div>
          <a href="tel:+79064168608" style={{ ...buttonGold, display: 'inline-block', marginTop: '18px' }}>Позвонить</a>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: '#cbd5e1' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
          <img src="/logo.png" alt="ОПОРА" style={{ width: '140px', height: 'auto', display: 'block', marginBottom: '20px' }} />
          <h3 style={{ color: 'white', marginTop: 0 }}>Правовая информация</h3>
          <p style={{ ...p, color: '#cbd5e1' }}>Используя сайт, вы соглашаетесь с условиями обработки персональных данных.</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '12px' }}>
            <a href="#" style={{ color: '#93c5fd', textDecoration: 'none' }}>Политика конфиденциальности</a>
            <a href="#" style={{ color: '#93c5fd', textDecoration: 'none' }}>Согласие на обработку персональных данных</a>
          </div>
          <p style={{ ...p, color: '#94a3b8', marginTop: '20px', fontSize: '14px' }}>© {new Date().getFullYear()} Опора бухгалтеру. Все права защищены.</p>
        </div>
      </footer>
    </main>
  );
}

function Trust({ title, text }) {
  return (
    <div style={trustItem}>
      <div style={trustIcon}>✓</div>
      <div>
        <strong>{title}</strong>
        <p style={{ margin: '4px 0 0', color: '#dbeafe', fontSize: '14px' }}>{text}</p>
      </div>
    </div>
  );
}

function Card({ icon, title, text, price }) {
  return (
    <div style={card}>
      <div style={serviceIcon}>{icon}</div>
      <h3 style={h3}>{title}</h3>
      <p style={p}>{text}</p>
      <div style={priceStyle}>{price}</div>
    </div>
  );
}

function Info({ title, items }) {
  return (
    <div style={card}>
      <h3 style={h3}>{title}</h3>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.9' }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function Stat({ number, text }) {
  return (
    <div style={{ ...card, textAlign: 'center', boxShadow: 'none' }}>
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1d4ed8' }}>{number}</div>
      <p style={p}>{text}</p>
    </div>
  );
}

function Tariff({ title, price, text }) {
  return (
    <div style={{ ...card, background: '#111827', color: 'white', border: '1px solid #334155' }}>
      <h3 style={{ ...h3, color: 'white' }}>{title}</h3>
      <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '16px', color: '#facc15' }}>{price}</div>
      <p style={{ ...p, color: '#cbd5e1' }}>{text}</p>
    </div>
  );
}

const heroSection = {
  padding: '28px 24px 70px',
  background: 'radial-gradient(circle at 80% 20%, #1e40af 0, #172554 38%, #0f172a 100%)',
  color: 'white'
};

const navBar = {
  maxWidth: '1200px',
  margin: '0 auto 55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap'
};

const logoBox = {
  background: 'white',
  padding: '10px 18px',
  borderRadius: '18px',
  boxShadow: '0 14px 35px rgba(0,0,0,0.20)'
};

const navLinks = {
  display: 'flex',
  gap: '28px',
  flexWrap: 'wrap',
  fontWeight: 'bold'
};

const navLink = {
  color: 'white',
  textDecoration: 'none'
};

const navButton = {
  background: 'linear-gradient(135deg, #fde68a, #d4af37)',
  color: '#0f172a',
  padding: '14px 22px',
  borderRadius: '16px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const heroGrid = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '48px',
  alignItems: 'center'
};

const eyebrow = {
  fontSize: '17px',
  color: '#facc15',
  marginBottom: '18px'
};

const heroTitle = {
  fontSize: 'clamp(38px, 6vw, 62px)',
  lineHeight: '1.08',
  margin: '0 0 20px',
  maxWidth: '820px'
};

const goldLine = {
  width: '80px',
  height: '4px',
  background: '#d4af37',
  borderRadius: '999px',
  marginBottom: '24px'
};

const heroText = {
  fontSize: '20px',
  lineHeight: '1.7',
  maxWidth: '760px',
  color: '#e0f2fe'
};

const heroCard = {
  border: '3px solid #d4af37',
  borderRadius: '28px',
  padding: '14px',
  background: 'rgba(255,255,255,0.06)',
  boxShadow: '0 20px 50px rgba(0,0,0,0.25)'
};

const heroCardInner = {
  minHeight: '410px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px'
};

const notebook = {
  width: '82%',
  minHeight: '250px',
  background: '#102a5c',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 25px 55px rgba(15,23,42,0.35)',
  border: '2px solid #d4af37',
  padding: '26px'
};

const trustRow = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '18px',
  marginTop: '40px'
};

const trustItem = {
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
  color: 'white',
  borderRight: '1px solid rgba(255,255,255,0.18)',
  paddingRight: '16px'
};

const trustIcon = {
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: '2px solid #d4af37',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#facc15',
  fontWeight: 'bold'
};

const sectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '70px 24px'
};

const h2 = {
  fontSize: '38px',
  margin: '0 0 14px',
  color: '#0f172a'
};

const h3 = {
  fontSize: '22px',
  margin: '0 0 14px',
  color: '#0f172a'
};

const lead = {
  fontSize: '18px',
  color: '#64748b',
  marginBottom: '32px',
  lineHeight: '1.6'
};

const p = {
  color: '#475569',
  lineHeight: '1.7',
  fontSize: '16px'
};

const card = {
  background: 'white',
  padding: '28px',
  borderRadius: '22px',
  boxShadow: '0 10px 25px rgba(15,23,42,0.08)',
  border: '1px solid #e5e7eb'
};

const serviceIcon = {
  width: '54px',
  height: '54px',
  borderRadius: '16px',
  background: '#eff6ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  marginBottom: '18px'
};

const grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '22px'
};

const grid4 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '22px'
};

const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
  gap: '16px',
  marginTop: '24px'
};

const aboutBlock = {
  background: 'white',
  padding: '36px',
  borderRadius: '26px',
  boxShadow: '0 12px 28px rgba(15,23,42,0.08)'
};

const contactCard = {
  background: 'white',
  padding: '38px',
  borderRadius: '26px',
  boxShadow: '0 12px 30px rgba(15,23,42,0.10)',
  borderTop: '5px solid #d4af37'
};

const priceStyle = {
  marginTop: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1d4ed8'
};

const buttonGold = {
  background: 'linear-gradient(135deg, #fde68a, #d4af37)',
  color: '#0f172a',
  padding: '16px 24px',
  borderRadius: '16px',
  textDecoration: 'none',
  fontWeight: 'bold',
  boxShadow: '0 12px 30px rgba(212,175,55,0.30)'
};

const buttonOutline = {
  background: 'transparent',
  color: '#ffffff',
  padding: '16px 24px',
  borderRadius: '16px',
  textDecoration: 'none',
  fontWeight: 'bold',
  border: '1px solid rgba(255,255,255,0.55)'
};
