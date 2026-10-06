'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  const pathname = usePathname()
  // The 3D routes scroll inside their own container, so smooth scrolling stays on the portfolio pages.
  const enabled = pathname === '/' || pathname.startsWith('/variations')

  useEffect(() => {
    if (!enabled) return
    // Lenis honors prefers-reduced-motion by default and respects scroll-padding-top for anchor links.
    const lenis = new Lenis({ autoRaf: true, anchors: true })
    return () => lenis.destroy()
  }, [enabled])

  return null
}
