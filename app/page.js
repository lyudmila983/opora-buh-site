export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', color: '#1f2937', background: '#f8fafc' }}>
      <section style={{ padding: '60px 24px', background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
  <div style={{ marginBottom: '30px' }}>
  <img
    src="/logo.png"
    alt="ОПОРА"
    style={{
      width: '220px',
      height: 'auto',
      display: 'block'
    }}
  />
</div>
          <p style={{ fontSize: '16px', color: '#bfdbfe', marginBottom: '16px' }}>
            Наставничество • Бухгалтерские услуги • Помощь бизнесу
          </p>
          <h1 style={{ fontSize: '48px', lineHeight: '1.1', margin: '0 0 24px', maxWidth: '850px' }}>
            Опора бухгалтеру — практическая помощь в учёте, налогах и уверенном старте в профессии
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '760px', color: '#e0f2fe' }}>
            Помогаю начинающим бухгалтерам освоить практику, а предпринимателям и организациям — разобраться в учёте, налогах, отчётности и требованиях контролирующих органов.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contacts" style={buttonPrimary}>Записаться на консультацию</a>
            <a href="#services" style={buttonSecondary}>Посмотреть услуги</a>
          </div>
        </div>
      </section>

      <section id="services" style={sectionStyle}>
        <h2 style={h2}>Услуги</h2>
        <p style={lead}>Выберите формат помощи под вашу задачу.</p>
        <div style={grid3}>
          <Card title="Наставничество бухгалтеру" text="Для выпускников, начинающих специалистов и тех, кто боится работать самостоятельно. Разбираем 1С, первичку, налоги, отчётность и реальные рабочие ситуации." price="от 20 000 ₽" />
          <Card title="Консультации для бизнеса" text="Помощь ИП и ООО по УСН, НДС, зарплате, требованиям ИФНС и СФР, проверке учёта и налоговых рисков." price="от 3 000 ₽" />
          <Card title="Подбор и адаптация бухгалтера" text="Помогаю работодателям подобрать бухгалтера, оценить практические навыки и адаптировать специалиста под реальные задачи компании." price="по договору" />
        </div>
      </section>

      <section style={{ ...sectionStyle, background: 'white' }}>
        <h2 style={h2}>Для кого этот проект</h2>
        <div style={grid2}>
          <Info title="Начинающим бухгалтерам" items={["Нет практики после учёбы", "Страшно устроиться на первую работу", "Сложно разобраться в 1С", "Нужен наставник рядом"]} />
          <Info title="Предпринимателям и руководителям" items={["Нужна проверка учёта", "Пришло требование ИФНС или СФР", "Бухгалтер перегружен", "Нужно понять налоговые риски"]} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2}>Почему мне доверяют</h2>
        <div style={grid4}>
          <Stat number="20+" text="лет практического опыта" />
          <Stat number="1С" text="практическая работа с учётом" />
          <Stat number="ИФНС/СФР" text="ответы на требования" />
          <Stat number="УСН/НДС" text="налоги и отчётность" />
        </div>
      </section>

      <section style={{ ...sectionStyle, background: '#0f172a', color: 'white' }}>
        <h2 style={{ ...h2, color: 'white' }}>Форматы работы</h2>
        <div style={grid3}>
          <Tariff title="Разовая консультация" price="от 3 000 ₽" text="Разбираем конкретный вопрос и даём понятный план действий." />
          <Tariff title="Наставничество" price="от 20 000 ₽" text="Сопровождение начинающего бухгалтера с практическими заданиями." />
          <Tariff title="Сопровождение бизнеса" price="индивидуально" text="Помощь по учёту, налогам, требованиям и контролю бухгалтера." />
        </div>
      </section>

      <section id="contacts" style={sectionStyle}>
        <div style={{ background: 'white', padding: '36px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
          <h2 style={h2}>Записаться на консультацию</h2>
          <p style={lead}>Напишите, какая у вас задача: наставничество, консультация для бизнеса или подбор бухгалтера.</p>
          <div style={{ marginTop: '24px', display: 'grid', gap: '12px', fontSize: '18px' }}>
            <p><strong>Телефон:</strong> +7 (906) 416-86-08</p>
            <p><strong>Город:</strong> Таганрог</p>
            <p><strong>MAX:</strong> +7 (906) 416-86-08</p>
          </div>
          <p style={{ marginTop: '24px', color: '#64748b' }}>
            Для связи используйте телефон или приложение MAX.
          </p>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: '#cbd5e1', marginTop: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
          <h3 style={{ color: 'white', marginTop: 0 }}>Правовая информация</h3>
          <p style={{ ...p, color: '#cbd5e1' }}>
            Используя сайт, вы соглашаетесь с условиями обработки персональных данных.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '12px' }}>
            <a href="#" style={{ color: '#93c5fd', textDecoration: 'none' }}>Политика конфиденциальности</a>
            <a href="#" style={{ color: '#93c5fd', textDecoration: 'none' }}>Согласие на обработку персональных данных</a>
          </div>
          <p style={{ ...p, color: '#94a3b8', marginTop: '20px', fontSize: '14px' }}>
            © {new Date().getFullYear()} Опора бухгалтеру. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, text, price }) {
  return (
    <div style={card}>
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
    <div style={{ ...card, textAlign: 'center' }}>
      <div style={{ fontSize: '34px', fontWeight: 'bold', color: '#1d4ed8' }}>{number}</div>
      <p style={p}>{text}</p>
    </div>
  );
}

function Tariff({ title, price, text }) {
  return (
    <div style={{ ...card, background: '#111827', color: 'white', border: '1px solid #334155' }}>
      <h3 style={{ ...h3, color: 'white' }}>{title}</h3>
      <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#93c5fd' }}>{price}</div>
      <p style={{ ...p, color: '#cbd5e1' }}>{text}</p>
    </div>
  );
}

const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '64px 24px'
};

const h2 = {
  fontSize: '36px',
  margin: '0 0 16px',
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

const grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '22px'
};

const grid2 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '22px'
};

const grid4 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
  gap: '18px'
};

const priceStyle = {
  marginTop: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#1d4ed8'
};

const buttonPrimary = {
  background: '#ffffff',
  color: '#1e3a8a',
  padding: '14px 22px',
  borderRadius: '14px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const buttonSecondary = {
  background: 'transparent',
  color: '#ffffff',
  padding: '14px 22px',
  borderRadius: '14px',
  textDecoration: 'none',
  fontWeight: 'bold',
  border: '1px solid rgba(255,255,255,0.5)'
};
