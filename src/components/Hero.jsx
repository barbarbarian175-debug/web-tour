import { HERO_IMAGE, HERO_ALT } from '../data/destinations'

export default function Hero({ onBookNow }) {
  return (
    <section className="hero" id="home" aria-label="Explore Indonesia">
      <img className="bg" src={HERO_IMAGE} alt={HERO_ALT} fetchpriority="high" />
      <div className="hero-inner">
        <h1>
          EXPLORE
          <br />
          INDONESIA
        </h1>
        <p>
          Discover the beauty of Indonesia, from breathtaking beaches to
          extraordinary cultural destinations.
        </p>
        <div className="hero-cta">
          <button className="btn btn-white" type="button" onClick={onBookNow}>
            Plan Your Trip
          </button>
          <a className="btn btn-ghost" href="#destinations">
            Explore Destinations
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            50+ destinasi di 17.000 pulau
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7.5-4.6-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 4.5 2.5C12 6 13.5 5 15.5 5 19 5 21 8.5 20.5 12c-1 4.4-8.5 9-8.5 9Z" transform="scale(.92) translate(1,1)" />
            </svg>
            Dipandu pemandu lokal bersertifikat
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            Berangkat setiap minggu
          </span>
        </div>
      </div>
    </section>
  )
}
