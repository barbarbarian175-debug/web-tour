import { useEffect, useRef, useState } from 'react'
import { AREAS, formatRupiah } from '../data/destinations'

function Star() {
  return (
    <svg className="star" viewBox="0 0 24 24" width="13" height="13">
      <path d="M12 2.6l2.8 5.9 6.5.8-4.8 4.4 1.3 6.4L12 17l-5.8 3.1 1.3-6.4L2.7 9.3l6.5-.8z" />
    </svg>
  )
}

function Pin() {
  return (
    <svg className="pin" viewBox="0 0 24 24" width="13" height="13">
      <path d="M12 22S4.5 15.6 4.5 9.8a7.5 7.5 0 1 1 15 0C19.5 15.6 12 22 12 22Z" />
      <circle cx="12" cy="9.8" r="2.7" fill="#fff" />
    </svg>
  )
}

export default function Destinations({ items, onSelect }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [area, setArea] = useState('All')

  const filtered =
    area === 'All' ? items : items.filter((d) => d.area === area)

  const updateArrows = () => {
    const t = trackRef.current
    if (!t) return
    setCanPrev(t.scrollLeft > 4)
    setCanNext(t.scrollLeft < t.scrollWidth - t.clientWidth - 4)
  }

  useEffect(() => {
    const t = trackRef.current
    if (t) t.scrollLeft = 0
    updateArrows()
    const onResize = () => updateArrows()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [items, area])

  const step = () => {
    const t = trackRef.current
    const card = t?.querySelector('.dcard')
    return card ? card.getBoundingClientRect().width + 16 : 320
  }

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })
  }

  return (
    <section className="block" id="destinations" aria-label="Top destinations">
      <div className="dest-panel reveal">
        <div className="dest-head">
          <h2 className="title" style={{ maxWidth: 'none' }}>
            Top Destinations
          </h2>
          <p>
            From island escapes to volcanic highlands, discover where your
            next journey will take you.
          </p>
        </div>
        <div className="filter-chips" role="group" aria-label="Filter by region">
          {AREAS.map((a) => (
            <button
              key={a}
              type="button"
              className={`chip-btn${area === a ? ' active' : ''}`}
              aria-pressed={area === a}
              onClick={() => setArea(a)}
            >
              {a}
            </button>
          ))}
          <span className="filter-count" aria-live="polite">
            {filtered.length} destination{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
        <div className="track-wrap">
          <div
            className="track"
            id="track"
            ref={trackRef}
            tabIndex="0"
            aria-label="Daftar destinasi, geser untuk melihat lainnya"
            onScroll={updateArrows}
          >
            {filtered.map((d) => (
              <button
                key={d.id}
                type="button"
                className="dcard"
                data-id={d.id}
                aria-label={`Lihat detail ${d.name}`}
                onClick={() => onSelect(d)}
              >
                <img src={d.image} alt={d.alt} loading="lazy" />
                <span className="price">starts at {formatRupiah(d.price)}</span>
                <span className="info">
                  <h3>{d.name}</h3>
                  <p className="tag">{d.tag}</p>
                  <span className="meta">
                    <Star />
                    <span>
                      {d.rating} ({d.reviews})
                    </span>
                    <span aria-hidden="true">|</span>
                    <Pin />
                    <span>{d.province}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
          <p className={`no-result${filtered.length === 0 ? ' show' : ''}`} id="noResult">
            Tidak ada destinasi yang cocok. Coba kata kunci lain — misalnya
            “Bali”, “Bromo”, atau “Lombok”.
          </p>
        </div>
        <div className="dest-foot">
          <a className="btn btn-navy" href="#packages">
            View more
          </a>
          <div className="arrows">
            <button
              className="arrow"
              id="prevBtn"
              type="button"
              aria-label="Destinasi sebelumnya"
              disabled={!canPrev}
              onClick={() => scrollBy(-1)}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              className="arrow"
              id="nextBtn"
              type="button"
              aria-label="Destinasi berikutnya"
              disabled={!canNext}
              onClick={() => scrollBy(1)}
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
