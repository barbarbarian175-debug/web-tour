const LOGO_MARK = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polygon points="15.5 8.5 13.2 13.2 8.5 15.5 10.8 10.8" fill="currentColor" stroke="none" opacity=".9" />
  </svg>
)

export default function Footer({ onGotoDestination }) {
  const go = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goto = (id) => (e) => {
    e.preventDefault()
    document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => onGotoDestination(id), 450)
  }

  return (
    <footer>
      <div className="foot-grid">
        <div>
          <a className="logo" href="#home" style={{ marginBottom: 12 }} onClick={go('#home')}>
            <span className="logo-mark" aria-hidden="true">
              {LOGO_MARK}
            </span>
            <span>
              PESONA<small>INDO&nbsp;·&nbsp;TRAVEL</small>
            </span>
          </a>
          <p style={{ fontSize: '.86rem', color: 'var(--ink-2)', maxWidth: '32ch', marginTop: 12 }}>
            Modern Indonesian travel &amp; tourism platform — discover
            destinations, compare tour packages, and book with local experts.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#destinations" onClick={go('#destinations')}>
                Top Destinations
              </a>
            </li>
            <li>
              <a href="#packages" onClick={go('#packages')}>
                Tour Packages
              </a>
            </li>
            <li>
              <a href="#how" onClick={go('#how')}>
                How Booking Works
              </a>
            </li>
            <li>
              <a href="#blog" onClick={go('#blog')}>
                Travel Stories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Destinations</h4>
          <ul>
            <li>
              <a href="#destinations" data-goto="raja-ampat" onClick={goto('raja-ampat')}>
                Raja Ampat
              </a>
            </li>
            <li>
              <a href="#destinations" data-goto="bali" onClick={goto('bali')}>
                Bali
              </a>
            </li>
            <li>
              <a href="#destinations" data-goto="labuan-bajo" onClick={goto('labuan-bajo')}>
                Labuan Bajo
              </a>
            </li>
            <li>
              <a href="#destinations" data-goto="bromo" onClick={goto('bromo')}>
                Gunung Bromo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about" onClick={go('#about')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#why" onClick={go('#why')}>
                Why PESONA INDO
              </a>
            </li>
            <li>
              <a href="#about" onClick={go('#about')}>
                Contact — halo@pesonaindo.travel
              </a>
            </li>
            <li>
              <a href="#about" onClick={go('#about')}>
                Support 24/7
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-note">
        <span>© 2026 PESONA INDO. Jelajahi Indonesia dengan bertanggung jawab.</span>
        <span>Jakarta · Bali · Labuan Bajo</span>
      </div>
    </footer>
  )
}
