'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: 'https://github.com/Tushige',
    icon: '/social_icons/github.svg'
  },
  {
    href: 'https://codepen.io/Ekut9119',
    icon: '/social_icons/codepen.svg'
  },
  {
    href: 'https://linkedin.com/in/tushig-ochirkhuyag-9a798a312',
    icon: '/social_icons/linkedin.svg'
  },
  {
    href: 'https://soundcloud.com/tukekut',
    icon: '/social_icons/soundcloud.svg'
  }
]
export default function AppFooter() {
  return (
    <footer className="relative bottom-0 w-full mx-auto z-[1] bg-white">
      <div className="max-w-screen-xl md:max-w-7xl p-4 sm:p-16 mx-auto flex justify-center">
        <nav className="flex justify-center">
          {
            links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex justify-center items-center w-24 md:w-36 relative p-2 cursor-pointer rounded-t-lg`}
              >
                <motion.div whileHover={{ scale: 1.4 }}>
                  <Image src={link.icon} width={36} height={36} alt='social link' />
                </motion.div>
              </Link>
            ))
          }
        </nav>
      </div>
    </footer>
  )
}
