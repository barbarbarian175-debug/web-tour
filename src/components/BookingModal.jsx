import { useMemo, useState } from 'react'
import { formatRupiah } from '../data/destinations'

// Form booking + estimasi harga + panel sukses.
// Sesuai HTML asli: satu modal berisi detail destinasi + form ini;
// submit yang valid menampilkan kode permintaan (PI-XXXXXX) dan toast.
export default function BookingModal({ unitPrice, bookTitle, destName, notify, onClose }) {
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], [])
  const defaultDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 14)
    return d.toISOString().split('T')[0]
  }, [])

  const [name, setName] = useState('')
  const [date, setDate] = useState(defaultDate)
  const [pax, setPax] = useState(2)
  const [bookedRef, setBookedRef] = useState(null)

  const total = unitPrice * pax

  const onSubmit = (e) => {
    e.preventDefault()
    const ref = `PI-${Date.now().toString(36).toUpperCase().slice(-6)}`
    setBookedRef(ref)
    notify(`Permintaan booking ${destName} terkirim — kode ${ref}`)
  }

  if (bookedRef) {
    return (
      <div className="success show" id="bookSuccess">
        <span className="ring">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m4.5 12.5 5 5L19.5 7" />
          </svg>
        </span>
        <h4>Permintaan terkirim!</h4>
        <p>
          Tim kami akan menghubungimu dalam 24 jam dengan itinerary final dan
          tautan pembayaran. Kode permintaanmu:{' '}
          <span className="ref" id="bookRef">
            {bookedRef}
          </span>
        </p>
        <button
          className="btn btn-sage"
          type="button"
          id="successClose"
          style={{ marginTop: 16 }}
          onClick={onClose}
        >
          Jelajahi destinasi lain
        </button>
      </div>
    )
  }

  return (
    <form className="book-form" id="bookForm" onSubmit={onSubmit}>
      <h4 id="bookTitle">{bookTitle}</h4>
      <div className="f-grid">
        <label className="full">
          Nama lengkap
          <input
            id="fName"
            type="text"
            required
            placeholder="Nama kamu"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Tanggal berangkat
          <input
            id="fDate"
            type="date"
            required
            min={todayStr}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Jumlah peserta
          <select id="fPax" value={pax} onChange={(e) => setPax(parseInt(e.target.value, 10))}>
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
              <option key={n} value={n}>
                {n} orang
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="total-row">
        <span>
          Estimasi total (<span id="tPax">{pax}</span> orang)
        </span>
        <b id="tTotal">{formatRupiah(total)}</b>
      </div>
      <button className="btn btn-navy" type="submit">
        Confirm &amp; Request Booking
      </button>
    </form>
  )
}
