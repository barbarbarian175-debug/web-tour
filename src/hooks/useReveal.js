import { useEffect } from 'react'

// Reveal on scroll — disalin dari HTML asli: IntersectionObserver +
// scroll fallback + timed safety net, supaya tidak ada section yang
// bisa tertahan tak terlihat. Class yang dipakai: .reveal.in
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    const check = () => {
      const limit = window.innerHeight * 0.94
      els.forEach((el) => {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < limit) {
          el.classList.add('in')
        }
      })
    }
    let io = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io.unobserve(en.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px 12% 0px' },
      )
      els.forEach((el) => io.observe(el))
    }
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          check()
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    check()
    const t1 = setTimeout(check, 600)
    const t2 = setTimeout(() => els.forEach((el) => el.classList.add('in')), 2600)
    return () => {
      if (io) io.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])
}
