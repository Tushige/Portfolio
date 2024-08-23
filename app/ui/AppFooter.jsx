'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <footer className="relative bottom-0 z-[1] mx-auto w-full bg-white">
      <div className="mx-auto flex max-w-screen-xl justify-center p-4 sm:p-16 md:max-w-7xl">
        <nav className="flex justify-center">
          {
            links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex w-24 cursor-pointer items-center justify-center rounded-t-lg p-2 md:w-36`}
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
