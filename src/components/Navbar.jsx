import { useEffect, useRef, useState } from 'react'
import { destinations, formatRupiah } from '../data/destinations'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Blog', href: '#blog' },
  { label: 'About Us', href: '#about' },
]

function matches(q) {
  const query = q.trim().toLowerCase()
  if (!query) return destinations
  return destinations.filter((d) =>
    `${d.name} ${d.province} ${d.region} ${d.tag} ${d.area}`.toLowerCase().includes(query),
  )
}

function SearchBox({ id, boxId, onPick, onSubmit, onClear }) {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const list = matches(value)

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const show = () => {
    if (value.trim()) setOpen(true)
  }

  return (
    <div className="search-wrap" ref={wrapRef}>
      <input
        id={id}
        type="search"
        placeholder="Search destinations…"
        aria-label="Cari destinasi"
        autoComplete="off"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          if (!e.target.value.trim()) {
            setOpen(false)
            onClear()
          } else {
            setOpen(true)
          }
        }}
        onFocus={show}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            setOpen(false)
            onSubmit(value)
          }
          if (e.key === 'Escape') setOpen(false)
        }}
      />
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.8-3.8" />
      </svg>
      <div className={`suggest${open ? ' open' : ''}`} id={boxId} role="listbox" aria-label="Saran destinasi">
        {value.trim() &&
          (list.length === 0 ? (
            <p className="none">Tidak ditemukan. Coba “Bali” atau “Bromo”.</p>
          ) : (
            list.slice(0, 4).map((d) => (
              <button
                key={d.id}
                type="button"
                role="option"
                onClick={() => {
                  setOpen(false)
                  onPick(d)
                }}
              >
                <img src={d.image} alt="" />
                <span>
                  <b>{d.name}</b>
                  <span>
                    {d.province} · mulai {formatRupiah(d.price)}
                  </span>
                </span>
              </button>
            ))
          ))}
      </div>
    </div>
  )
}

export default function Navbar({ onBookNow, onPickDestination, onSearchSubmit, onClearSearch }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (href) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site">
      <div className="nav">
        <a className="logo" href="#home" aria-label="PESONA INDO — beranda" onClick={go('#home')}>
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <polygon points="15.5 8.5 13.2 13.2 8.5 15.5 10.8 10.8" fill="currentColor" stroke="none" opacity=".9" />
            </svg>
          </span>
          <span>
            PESONA<small>INDO&nbsp;·&nbsp;TRAVEL</small>
          </span>
        </a>

        <nav className="main" aria-label="Navigasi utama">
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} className={i === 0 ? 'active' : ''} onClick={go(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="search-wrap nav-search">
            <SearchBox
              id="searchDesktop"
              boxId="suggestDesktop"
              onPick={onPickDestination}
              onSubmit={onSearchSubmit}
              onClear={onClearSearch}
            />
          </div>
          <button className="btn btn-navy btn-book-nav" type="button" onClick={onBookNow}>
            Book Now
          </button>
          <button
            className="burger"
            id="burger"
            type="button"
            aria-label="Buka menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <SearchBox
          id="searchMobile"
          boxId="suggestMobile"
          onPick={(d) => {
            setMenuOpen(false)
            onPickDestination(d)
          }}
          onSubmit={(q) => {
            setMenuOpen(false)
            onSearchSubmit(q)
          }}
          onClear={onClearSearch}
        />
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={go(l.href)}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-navy" type="button" onClick={onBookNow} style={{ width: '100%', marginTop: 14 }}>
          Book Now
        </button>
      </div>
    </header>
  )
}
