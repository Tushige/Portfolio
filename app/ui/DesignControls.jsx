'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import styles from './DesignControls.module.css'

export const designs = [
  { href: '/variations/index', name: 'Index (live)' },
  { href: '/variations/studio', name: 'Studio' },
  { href: '/variations/playroom', name: 'Playroom' },
  { href: '/variations/original', name: 'Original' },
]

export default function DesignControls() {
  const pathname = usePathname()
  // The head script in layout.jsx sets data-theme before paint; this mirrors it for the switch state.
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    setDark(root.dataset.theme === 'dark')
    // Until the visitor picks a theme, keep following the operating system.
    const system = window.matchMedia('(prefers-color-scheme: dark)')
    const follow = () => {
      let saved = null
      try {
        saved = localStorage.getItem('portfolio-theme')
      } catch {}
      if (saved === 'light' || saved === 'dark') return
      root.dataset.theme = system.matches ? 'dark' : 'light'
      setDark(system.matches)
    }
    system.addEventListener('change', follow)
    return () => system.removeEventListener('change', follow)
  }, [])

  if (pathname !== '/' && !pathname.startsWith('/variations')) return null
  // The live homepage only gets the appearance toggle; the design switcher is for comparing on /variations.
  const showDesigns = pathname.startsWith('/variations')

  const toggle = () => {
    const mode = dark ? 'light' : 'dark'
    try {
      localStorage.setItem('portfolio-theme', mode)
    } catch {}
    document.documentElement.dataset.theme = mode
    setDark(!dark)
  }

  return (
    <aside className={styles.bar} aria-label={showDesigns ? 'Design comparison and appearance' : 'Appearance'}>
      {showDesigns && (
        <nav className={styles.choices} aria-label='Compare portfolio designs'>
          <span className={styles.label}>Explore the designs</span>
          {designs.map((design) => (
            <Link key={design.href} href={design.href} aria-current={pathname === design.href ? 'page' : undefined}>
              {design.name}
            </Link>
          ))}
        </nav>
      )}
      <button
        type='button'
        role='switch'
        aria-checked={dark}
        aria-label='Dark mode'
        className={styles.theme}
        onClick={toggle}
      >
        <SunIcon aria-hidden='true' />
        <span className={styles.track} aria-hidden='true'>
          <span className={styles.thumb} />
        </span>
        <MoonIcon aria-hidden='true' />
      </button>
    </aside>
  )
}
