  'use client'
import { Layout } from '@/components/dom/Layout'
import { raf } from '@react-spring/rafz'

import { Inter } from 'next/font/google'
import { AnimatePresence } from "framer-motion"
import '@/global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Set the frameLoop mode globally
raf.frameLoop = 'demand';
export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`antialiased ${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <AnimatePresence mode="wait">
          <Layout>{children}</Layout>
        </AnimatePresence>
      </body>
    </html>
  )
}
