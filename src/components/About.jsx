import { useState } from 'react'

export default function About({ notify }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
    notify('Berhasil subscribe. Sampai jumpa di inbox kamu!')
  }

  return (
    <section className="block" id="about" aria-label="About PESONA INDO">
      <div className="about-band reveal">
        <div>
          <h2>Locally rooted, traveling Indonesia since 2015.</h2>
          <p>
            PESONA INDO is an Indonesian travel platform built by guides,
            drivers, boat crews, and planners from the destinations we sell.
            We keep groups small, pay local partners fairly, and answer the
            phone at 3 a.m. when a volcano changes your plans.
          </p>
        </div>
        <form className="news" id="newsForm" onSubmit={onSubmit}>
          <label htmlFor="newsEmail">
            Get one thoughtful trip idea a month — no spam.
          </label>
          <div className="row">
            <input
              id="newsEmail"
              type="email"
              required
              placeholder="Alamat email kamu"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-white" type="submit">
              Subscribe
            </button>
          </div>
          <p className={`ok${subscribed ? ' show' : ''}`} id="newsOk">
            Terima kasih! Ide perjalanan berikutnya akan mampir ke inbox kamu.
          </p>
        </form>
      </div>
    </section>
  )
}
