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
    <header className="absolute top-0 z-[1] mx-auto w-full">
      <div className="mx-auto flex max-w-screen-xl justify-between p-4 sm:p-16 md:max-w-7xl">
        <nav className="flex gap-2 justify-self-end md:gap-8">
          {
            links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex w-32 cursor-pointer items-center rounded-t-md p-2 ${pathname === link.href && pathname !== '/' ? 'bg-white' : ''} ${pathname === '/' && 'text-white'} md:w-36`}
              >
                {link.icon} {link.label}
                {
                  pathname === link.href ? (
                    <motion.div className={`absolute inset-x-0 bottom-[-2px] h-0.5 bg-[purple] ${pathname === '/' && 'bg-white'}`} layoutId="underline2" />
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
