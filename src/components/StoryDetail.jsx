import { useEffect } from 'react'
import { findDestination, formatRupiah } from '../data/destinations'

// Halaman detail cerita — gaya editorial petualangan:
// hero full-bleed dengan torn-paper, info bar, isi zig-zag dengan
// watermark angka dan garis rute putus-putus, lalu CTA booking.
// Warna mengikuti brief halaman ini: #1E293B, #475569, putih #FFFFFF.
function TornEdge({ className = '' }) {
  return (
    <svg
      className={`torn-edge ${className}`}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 28 L48 18 L96 30 L150 14 L210 26 L268 12 L330 28 L392 16 L452 30 L514 14 L576 26 L640 12 L702 28 L764 16 L826 30 L890 14 L952 26 L1014 12 L1076 28 L1138 16 L1200 30 L1262 14 L1324 26 L1380 16 L1440 24 L1440 48 L0 48 Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export default function StoryDetail({ story, relatedDest, onBack, onBook }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [story.id])

  const meta = [
    { label: 'Location', value: story.location },
    { label: 'Best Time', value: story.bestTime },
    { label: 'Read Time', value: story.readTime },
    { label: 'Local Guide', value: story.localGuide },
  ]

  return (
    <article className="story" aria-label={story.title}>
      {/* Hero full-bleed */}
      <header className="story-hero">
        <img src={story.heroImage} alt={story.heroAlt} />
        <div className="story-hero-overlay" aria-hidden="true" />
        <button className="story-back" type="button" onClick={onBack}>
          ← Back to Stories
        </button>
        <div className="story-hero-inner">
          <p className="story-eyebrow">
            {story.category} · {story.location}
          </p>
          <h1>{story.title}</h1>
          <p className="story-script">{story.scriptQuote}</p>
        </div>
        <TornEdge className="torn-hero" />
      </header>

      {/* Intro & info bar */}
      <div className="story-intro">
        <p className="story-summary">{story.summary}</p>
        <div className="story-meta">
          {meta.map((m) => (
            <div className="story-meta-box" key={m.label}>
              <span>{m.label}</span>
              <b>{m.value}</b>
            </div>
          ))}
        </div>
        <button
          className="story-book-outline"
          type="button"
          onClick={() => onBook(story.relatedDestId)}
        >
          Book the {story.relatedLabel} trip →
        </button>
      </div>

      {/* Isi artikel zig-zag + garis rute */}
      <div className="story-body">
        <svg
          className="story-route"
          viewBox="0 0 120 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M60 0 C 20 180, 100 320, 60 480 C 20 640, 100 780, 60 940 C 40 1040, 80 1120, 60 1200"
            fill="none"
            stroke="#1E293B"
            strokeOpacity="0.22"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
          <circle cx="60" cy="120" r="6" fill="#1E293B" />
          <circle cx="60" cy="520" r="6" fill="#1E293B" />
          <circle cx="60" cy="920" r="6" fill="#1E293B" />
        </svg>

        {story.sections.map((section, index) => (
          <section
            className={`story-chapter${index % 2 === 1 ? ' story-chapter--reverse' : ''}`}
            key={section.number}
          >
            <div className="story-photo">
              <TornEdge className="torn-photo-top" />
              <img src={section.image} alt={section.alt} loading="lazy" />
              <TornEdge className="torn-photo-bottom" />
            </div>
            <div className="story-text">
              <span className="story-watermark" aria-hidden="true">
                {section.number}
              </span>
              <p className="story-chapter-label">
                <span className="story-dot" aria-hidden="true" />
                Chapter {section.number}
              </p>
              <h2>{section.title}</h2>
              {section.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer artikel & CTA */}
      <footer className="story-footer">
        <div className="story-footer-photo">
          <TornEdge className="torn-footer-top" />
          <img
            src={relatedDest ? relatedDest.image : story.heroImage}
            alt={relatedDest ? relatedDest.alt : story.heroAlt}
            loading="lazy"
          />
        </div>
        <div className="story-cta">
          <div>
            <p className="story-eyebrow">Ready to go?</p>
            <h2>Travel this story with a local guide.</h2>
            <p>
              {relatedDest
                ? `Book the ${relatedDest.name} trip from ${formatRupiah(relatedDest.price)} / person — small groups, local guides, and 24/7 support.`
                : `Book the ${story.relatedLabel} trip with a local guide.`}
            </p>
          </div>
          <button
            className="btn btn-navy"
            type="button"
            onClick={() => onBook(story.relatedDestId)}
          >
            Book the {story.relatedLabel} trip →
          </button>
        </div>
        <button className="story-back story-back--bottom" type="button" onClick={onBack}>
          ← Back to Stories
        </button>
      </footer>
    </article>
  )
}
