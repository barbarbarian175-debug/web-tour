import { useState } from 'react'
import { featuredPackages, packageList } from '../data/packages'
import { formatRupiah } from '../data/destinations'

function BadgeIcon({ kind }) {
  if (kind === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17c2 1.2 4 1.2 6 0s4-1.2 6 0 4 1.2 6 0" />
        <path d="M12 3v11M12 3c2.5.5 4 2 4.5 4.5C14 7 12.5 5.5 12 3Z" />
      </svg>
    )
  }
  if (kind === 'sun') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="14" r="3.5" />
        <path d="M12 6.5V4M5.6 8.4 4 6.8M18.4 8.4 20 6.8M3 20h18" />
      </svg>
    )
  }
  if (kind === 'mountain') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19 9 7l3.5 6L15 9l6 10H3Z" />
        <path d="M9 7l1.5 3" />
      </svg>
    )
  }
  if (kind === 'culture') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 18h18M3 21h18" />
      </svg>
    )
  }
  if (kind === 'dive') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16c2 1.2 4 1.2 6 0s4-1.2 6 0 4 1.2 6 0" />
        <path d="M2 20c2 1.2 4 1.2 6 0s4-1.2 6 0 4 1.2 6 0" />
        <path d="M12 3v7M12 3c2.5.5 4 2 4.5 4.5C14 7 12.5 5.5 12 3Z" />
      </svg>
    )
  }
  if (kind === 'island') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-8M12 13c0-3 2-5 5-5 0 2-1 3.5-2.5 4M12 13c0-3-2-5-5-5 0 2 1 3.5 2.5 4" />
        <path d="M3 21c2-1.5 4-1.5 6 0s4 1.5 6 0 3-1 3 0" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.5 8.5 13.2 13.2 8.5 15.5 10.8 10.8" />
    </svg>
  )
}

function PackageCard({ p, onSelectPackage }) {
  return (
    <button
      key={p.id}
      className="pkg-card"
      type="button"
      data-pkg={p.id}
      onClick={() => onSelectPackage(p)}
    >
      <img src={p.image} alt={p.alt} loading="lazy" />
      <span className="badge">
        <BadgeIcon kind={p.badge} />
      </span>
      <span className="info">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <span className="row">
          <span className="price">
            <span>mulai dari</span>
            <b>{formatRupiah(p.price)}</b>
          </span>
          <span className="days">{p.days}</span>
        </span>
      </span>
    </button>
  )
}

const INTRO_POINTS = [
  'Hotel, transport & pemandu termasuk',
  'Itinerary bisa disesuaikan',
  'Grup kecil, maks. 12 orang',
]

export default function Packages({ onSelectPackage, onCustomTrip }) {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="block" id="packages" aria-label="Tour packages">
      <div className="pkg-grid reveal">
        <div className="pkg-intro">
          <h2>Tour Packages</h2>
          <p>
            Affordable, customizable, and unforgettable adventures — crafted
            by locals, priced transparently.
          </p>
          <ul>
            {INTRO_POINTS.map((p) => (
              <li key={p}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
          <p className="pkg-count">{packageList.length} curated trips across Indonesia</p>
          <button
            className="btn btn-navy"
            type="button"
            id="browsePkg"
            aria-expanded={showAll}
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? 'Show Fewer Packages' : 'Browse All Packages'}
          </button>
        </div>

        {featuredPackages.map((p) => (
          <PackageCard key={p.id} p={p} onSelectPackage={onSelectPackage} />
        ))}
      </div>

      {showAll && (
        <div className="pkg-all" id="allPackages">
          <div className="pkg-all-head">
            <h3>All Packages</h3>
            <p>
              {packageList.length} trips — tap any card for details, price per
              person, and booking.
            </p>
          </div>
          <div className="pkg-all-grid">
            <button
              className="pkg-custom"
              type="button"
              id="customTrip"
              onClick={onCustomTrip}
            >
              <span className="badge">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
                  <path d="M9 4v14M15 6v14" />
                </svg>
              </span>
              <span className="info">
                <h3>Custom Trip / Request Itinerary</h3>
                <p>
                  Can’t find your perfect trip? Tell us where you dream of
                  going — our local planners will craft a tailor-made
                  itinerary just for you.
                </p>
                <span className="row">
                  <span className="price">
                    <span>priced for you</span>
                    <b>Request a quote →</b>
                  </span>
                </span>
              </span>
            </button>
            {packageList.map((p) => (
              <PackageCard key={p.id} p={p} onSelectPackage={onSelectPackage} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
