const STEPS = [
  {
    num: 'STEP 01',
    title: 'Pick Your Destination',
    text: 'Browse 50+ destinations across the archipelago, compare ratings and starting prices, and open the detail view for highlights and the best season to go.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num: 'STEP 02',
    title: 'Customize Your Tour',
    text: 'Set your date and group size, then adjust the itinerary with our planners — add a dive day, swap a hotel, or slow the pace down. The total updates instantly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h10M18 8h2M4 16h4M12 16h8" />
        <circle cx="16" cy="8" r="2.2" />
        <circle cx="10" cy="16" r="2.2" />
      </svg>
    ),
  },
  {
    num: 'STEP 03',
    title: 'Confirm & Travel',
    text: 'Confirm your request and our team replies within 24 hours with the final itinerary and payment link. Then just pack — we handle the rest, 24/7.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="m9 16.2 2 2 4-4.4" />
      </svg>
    ),
  },
]

export default function BookingSteps() {
  return (
    <section className="block" id="how" aria-label="How booking works">
      <div className="reveal">
        <h2 className="title" style={{ maxWidth: 'none' }}>
          Booking made as easy as 1-2-3.
        </h2>
        <div className="steps">
          {STEPS.map((s) => (
            <article className="step" key={s.num}>
              <span className="num">{s.icon}</span>
              <h3>
                <i>{s.num}</i> {s.title}
              </h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
