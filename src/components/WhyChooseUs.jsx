const CARDS = [
  {
    title: 'Local Expertise',
    text: "Our Indonesian travel experts craft unique experiences with insider knowledge you won't find in typical tours — hidden beaches, family-run warungs, and the right hour to visit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z" />
        <path d="M9 4v14M15 6v14" />
      </svg>
    ),
  },
  {
    title: 'Easy Booking',
    text: 'Book everything in one place — easy, fast, and hassle-free, whether for quick getaways or planned vacations. Transparent prices, no surprise fees at checkout.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="m9 16.2 2 2 4-4.4" strokeWidth="1.9" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    text: "We're here anytime, anywhere. Get real-time help anytime you need it — before, during, or after your trip, in Bahasa Indonesia and English.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="2.5" y="13" width="4.5" height="6.5" rx="2" />
        <rect x="17" y="13" width="4.5" height="6.5" rx="2" />
        <path d="M19.5 19.5c0 1.7-1.6 2.5-3.5 2.5h-2" />
      </svg>
    ),
  },
]

const STATS = [
  {
    value: '12K+',
    label: 'Happy Travelers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 14.5c.8 1 2 1.6 3.5 1.6s2.7-.6 3.5-1.6" />
        <path d="M9 9.6h.01M15 9.6h.01" strokeWidth="2.6" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Years Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.8 12.4 2.2 2.2 4.2-4.6" />
      </svg>
    ),
  },
  {
    value: '50+',
    label: 'Destinations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="block" id="why" aria-label="Why choose PESONA INDO">
      <div className="why reveal">
        <div>
          <p className="eyebrow">Why PESONA INDO</p>
          <h2 className="title">Why Travelers Choose PESONA INDO</h2>
          <p className="lead">
            From pristine beaches to cultural hotspots, we make exploring
            Indonesia easier, safer, and more exciting with expert-crafted
            itineraries and round-the-clock support.
          </p>
          <div className="socials">
            <a href="#about" aria-label="Instagram PESONA INDO">
              <svg viewBox="0 0 24 24" strokeWidth="1.9" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
              </svg>
            </a>
            <a href="#about" aria-label="X PESONA INDO">
              <svg className="fill" viewBox="0 0 24 24">
                <path d="M17.9 3H21l-6.8 7.8L22.2 21h-6.3l-4.9-6.4L5.4 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.9L17.9 3Zm-1.1 16.1h1.7L7.4 4.8H5.6l11.2 14.3Z" />
              </svg>
            </a>
            <a href="#about" aria-label="Facebook PESONA INDO">
              <svg className="fill" viewBox="0 0 24 24">
                <path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.5h-2.9C11.2 2.5 10 4.4 10 6.5v2H7.5V12H10v9.5h4V12h2.7l.4-3.5H14Z" />
              </svg>
            </a>
            <a href="#about" aria-label="YouTube PESONA INDO">
              <svg viewBox="0 0 24 24" strokeWidth="1.9" strokeLinejoin="round">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                <path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="ic">{s.icon}</span>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="why-cards">
          {CARDS.map((c) => (
            <article className="why-card" key={c.title}>
              <span className="tile">{c.icon}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
