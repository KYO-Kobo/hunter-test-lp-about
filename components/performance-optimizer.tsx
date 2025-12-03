'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Prefetch critical resources
    const prefetchResources = () => {
      const resources = [
        '/images/app-icon.png',
        '/images/knowledge-categories.png',
        '/images/results-screen.png'
      ]

      resources.forEach((resource) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = resource
        document.head.appendChild(link)
      })
    }

    // Lazy load images when they come into viewport
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Preload fonts
    const preloadFonts = () => {
      const fontLink = document.createElement('link')
      fontLink.rel = 'preconnect'
      fontLink.href = 'https://fonts.googleapis.com'
      document.head.appendChild(fontLink)

      const fontDisplayLink = document.createElement('link')
      fontDisplayLink.rel = 'preconnect'
      fontDisplayLink.href = 'https://fonts.gstatic.com'
      fontDisplayLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontDisplayLink)
    }

    // Optimize third-party scripts loading
    const optimizeScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]')
      scripts.forEach((script) => {
        const newScript = document.createElement('script')
        newScript.src = script.getAttribute('src') || ''
        newScript.async = true
        document.head.appendChild(newScript)
        script.remove()
      })
    }

    prefetchResources()
    lazyLoadImages()
    preloadFonts()
    optimizeScripts()

    // Resource hints for external domains
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//play.google.com' },
        { rel: 'dns-prefetch', href: '//apps.apple.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ]

      hints.forEach(({ rel, href, crossorigin }) => {
        const link = document.createElement('link')
        link.rel = rel
        link.href = href
        if (crossorigin) link.crossOrigin = crossorigin
        document.head.appendChild(link)
      })
    }

    addResourceHints()
  }, [])

  return null
}