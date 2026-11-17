import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Destinations from './components/Destinations.jsx'
import Packages from './components/Packages.jsx'
import BookingSteps from './components/BookingSteps.jsx'
import Blog from './components/Blog.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import DestinationModal from './components/DestinationModal.jsx'
import StoryDetail from './components/StoryDetail.jsx'
import { destinations, findDestination } from './data/destinations'
import { findStory } from './data/stories'
import { useReveal } from './hooks/useReveal'

// Konversi 1:1 dari pesona-indo.html (hasil export preview artifact):
// struktur .page > .sheet yang sama, section yang sama, dan satu modal
// detail+booking yang sama untuk kartu destinasi, Book Now, kartu paket,
// dan shortcut footer. Toast + reveal mengikuti logika HTML asli.
export default function App() {
  const [visibleDests, setVisibleDests] = useState(destinations)
  const [modal, setModal] = useState(null) // { dest, pkg } | null
  const [selectedStory, setSelectedStory] = useState(null) // story object | null
  const [toast, setToast] = useState('')
  const toastTimer = useRef(null)

  useReveal()

  const notify = useCallback((msg) => {
    setToast(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 3400)
  }, [])

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const scrollToId = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const openDestination = useCallback((dest, pkg = null) => {
    setModal({ dest, pkg })
  }, [])

  // Book Now / Plan Your Trip — HTML: buka modal Bali (destinasi terpopuler)
  const openDefaultBooking = useCallback(() => {
    openDestination(findDestination('bali'), null)
  }, [openDestination])

  const handlePickDestination = useCallback(
    (d) => {
      setVisibleDests([d])
      scrollToId('destinations')
      openDestination(d, null)
    },
    [openDestination],
  )

  const handleSearchSubmit = useCallback((q) => {
    const query = q.trim().toLowerCase()
    if (!query) {
      setVisibleDests(destinations)
      return
    }
    setVisibleDests(
      destinations.filter((d) =>
        `${d.name} ${d.province} ${d.region} ${d.tag} ${d.area}`
          .toLowerCase()
          .includes(query),
      ),
    )
    scrollToId('destinations')
  }, [])

  const handleClearSearch = useCallback(() => {
    setVisibleDests(destinations)
  }, [])

  const handleSelectPackage = useCallback(
    (pkg) => {
      openDestination(findDestination(pkg.dest), pkg)
    },
    [openDestination],
  )

  // Custom Trip — buka modal booking default (Bali) + penjelasan.
  const handleCustomTrip = useCallback(() => {
    openDefaultBooking()
    notify('Custom trip: isi form booking dengan destinasi impianmu — tim kami akan menyusun itinerary khusus untukmu.')
  }, [openDefaultBooking, notify])

  const handleReadStory = useCallback((storyId) => {
    const story = findStory(storyId)
    if (!story) return
    setSelectedStory(story)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const handleBackToStories = useCallback(() => {
    setSelectedStory(null)
    // Kembali ke section blog di halaman utama setelah render.
    requestAnimationFrame(() => scrollToId('blog'))
  }, [])

  const handleBookFromStory = useCallback(
    (destId) => {
      openDestination(findDestination(destId), null)
    },
    [openDestination],
  )

  const handleGotoDestination = useCallback(
    (id) => {
      openDestination(findDestination(id), null)
    },
    [openDestination],
  )

  return (
    <>
      <Navbar
        onBookNow={openDefaultBooking}
        onPickDestination={handlePickDestination}
        onSearchSubmit={handleSearchSubmit}
        onClearSearch={handleClearSearch}
      />

      {selectedStory ? (
        <StoryDetail
          key={selectedStory.id}
          story={selectedStory}
          relatedDest={findDestination(selectedStory.relatedDestId)}
          onBack={handleBackToStories}
          onBook={handleBookFromStory}
        />
      ) : (
        <div className="page">
          <div className="sheet">
            <Hero onBookNow={openDefaultBooking} />
            <WhyChooseUs />
            <Destinations
              items={visibleDests}
              onSelect={(d) => openDestination(d, null)}
            />
            <Packages
              onSelectPackage={handleSelectPackage}
              onCustomTrip={handleCustomTrip}
            />
            <BookingSteps />
            <Blog onReadStory={handleReadStory} />
            <About notify={notify} />
            <Footer onGotoDestination={handleGotoDestination} />
          </div>
        </div>
      )}

      {modal && (
        <DestinationModal
          key={`${modal.dest.id}-${modal.pkg ? modal.pkg.id : 'dest'}`}
          dest={modal.dest}
          pkg={modal.pkg}
          onClose={() => setModal(null)}
          notify={notify}
        />
      )}

      {toast && (
        <div className="toast show" id="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </>
  )
}
