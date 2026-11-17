import { useState } from 'react'
import { stories } from '../data/stories'

// Kartu blog — data diambil dari src/data/stories.js supaya judul,
// gambar, dan kategori selalu sama dengan halaman detail cerita.
// Klik kartu atau tombol "Read story" membuka StoryDetail via App.
const CATEGORIES = ['All', 'Culture', 'Island Guide', 'Beaches', 'Highlands & Heritage']
const PAGE_SIZE = 6

const storyGroup = (s) => s.category.split('·')[0].trim()

export default function Blog({ onReadStory }) {
  const [category, setCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered =
    category === 'All'
      ? stories
      : stories.filter((s) => storyGroup(s) === category)
  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE)

  return (
    <section className="block" id="blog" aria-label="Travel stories">
      <div className="reveal">
        <p className="eyebrow">Travel Stories</p>
        <h2 className="title" style={{ maxWidth: '34ch' }}>
          Notes from the road, by our local guides
        </h2>
        <div className="filter-chips" role="group" aria-label="Filter stories by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip-btn${category === c ? ' active' : ''}`}
              aria-pressed={category === c}
              onClick={() => {
                setCategory(c)
                setShowAll(false)
              }}
            >
              {c}
            </button>
          ))}
          <span className="filter-count" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
          </span>
        </div>
        <div className="blog-grid">
          {visible.map((p) => (
            <article
              className="post"
              key={p.id}
              onClick={() => onReadStory(p.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={p.heroImage} alt={p.heroAlt} loading="lazy" />
              <div className="body">
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <button
                  className="more"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onReadStory(p.id)
                  }}
                >
                  Read story
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16m-6-6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        {filtered.length > PAGE_SIZE && (
          <div className="blog-more">
            <button
              className="btn btn-navy"
              type="button"
              id="loadMoreStories"
              aria-expanded={showAll}
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'Show Fewer Stories' : `Load More Stories (${filtered.length - PAGE_SIZE} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
