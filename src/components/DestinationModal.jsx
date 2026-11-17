import { useEffect, useRef } from 'react'
import { formatRupiah } from '../data/destinations'
import BookingModal from './BookingModal'

// Modal detail destinasi + booking — sesuai HTML asli (satu overlay yang
// sama untuk kartu destinasi, tombol Book Now, kartu paket, dan shortcut
// footer). Judul/harga/durasi berubah mengikuti paket bila dibuka dari
// kartu paket; harga per orang mengikuti paket atau destinasi.
export default function DestinationModal({ dest, pkg, onClose, notify }) {
  const closeRef = useRef(null)
  const unitPrice = pkg ? pkg.price : dest.price
  const title = pkg ? pkg.title : dest.name
  const bookTitle = pkg
    ? `Minta penawaran: ${pkg.title}`
    : `Minta penawaran perjalanan ke ${dest.name}`

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="overlay open"
      id="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <figure>
          <img id="mImg" src={dest.image} alt={dest.alt} />
          <button
            className="close"
            id="mClose"
            type="button"
            aria-label="Tutup detail"
            ref={closeRef}
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <span className="price-tag" id="mPriceTag">
            Mulai {formatRupiah(unitPrice)} / orang
          </span>
        </figure>
        <div className="modal-body">
          <h3 id="modalTitle">{title}</h3>
          <p className="loc" id="mLoc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {dest.region} · {dest.province}
          </p>
          <p className="desc" id="mDesc">
            {dest.desc}
          </p>
          <ul className="chips" id="mChips">
            {dest.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="facts">
            <div>
              <span>Rating</span>
              <b id="mRating">
                ★ {dest.rating} ({dest.reviews} ulasan)
              </b>
            </div>
            <div>
              <span>Durasi populer</span>
              <b id="mDays">{pkg ? pkg.days : dest.days}</b>
            </div>
            <div>
              <span>Musim terbaik</span>
              <b id="mSeason">{dest.season}</b>
            </div>
          </div>

          <BookingModal
            key={`${dest.id}-${pkg ? pkg.id : 'dest'}`}
            unitPrice={unitPrice}
            bookTitle={bookTitle}
            destName={dest.name}
            notify={notify}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}
