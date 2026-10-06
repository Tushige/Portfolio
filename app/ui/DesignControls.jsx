'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import styles from './DesignControls.module.css'

export const designs = [
  { href: '/variations/index', name: 'Index (live)' },
  { href: '/variations/studio', name: 'Studio' },
  { href: '/variations/playroom', name: 'Playroom' },
  { href: '/variations/original', name: 'Original' },
]

export default function DesignControls() {
  const pathname = usePathname()
  const [preference, setPreference] = useState('system')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      if (['light', 'dark', 'system'].includes(saved)) setPreference(saved)
    } catch {}
  }, [])

  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      // Read storage here too so the initial effect cannot overwrite the pre-paint theme.
      let mode = preference
      try {
        mode = localStorage.getItem('portfolio-theme') || preference
      } catch {}
      document.documentElement.dataset.theme = mode === 'system' ? (system.matches ? 'dark' : 'light') : mode
    }
    apply()
    system.addEventListener('change', apply)
    return () => system.removeEventListener('change', apply)
  }, [preference])

  if (pathname !== '/' && !pathname.startsWith('/variations')) return null
  // The live homepage only gets the appearance toggle; the design switcher is for comparing on /variations.
  const showDesigns = pathname.startsWith('/variations')

  const Icon = preference === 'dark' ? MoonIcon : preference === 'light' ? SunIcon : ComputerDesktopIcon
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
      <label className={styles.theme}>
        <Icon aria-hidden='true' />
        <span className='sr-only'>Appearance</span>
        <select
          value={preference}
          onChange={(event) => {
            const mode = event.target.value
            try {
              localStorage.setItem('portfolio-theme', mode)
            } catch {}
            document.documentElement.dataset.theme =
              mode === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode
            setPreference(mode)
          }}
        >
          <option value='system'>System</option>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </label>
    </aside>
  )
}
