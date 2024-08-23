import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  {
    label: 'Playground',
    href: '/',
    icon: '🚀️'
  },
  {
    label: 'About',
    href: '/about',
    icon: '👨‍💻'
  }
]
export default function AppHeader() {
  const pathname = usePathname()
  return (
    <header className="absolute top-0 w-full mx-auto z-[1]">
      <div className="max-w-screen-xl md:max-w-7xl p-4 sm:p-16 mx-auto flex justify-between">
        <nav className="flex gap-2 md:gap-8 justify-self-end">
          {
            links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center w-32 md:w-36 relative p-2 cursor-pointer rounded-t-md ${pathname === link.href && pathname !== '/' ? 'bg-white' : ''} ${pathname === '/' && 'text-white'}`}
              >
                {link.icon} {link.label}
                {
                  pathname === link.href ? (
                    <motion.div className={`absolute bottom-[-2px] left-0 right-0 h-0.5 bg-[purple] ${pathname === '/' && 'bg-white'}`} layoutId="underline2" />
                  ) : null
                }
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  )
}
