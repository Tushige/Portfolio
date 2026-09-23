import { Inter, Manrope } from 'next/font/google'
import { Layout } from '@/components/dom/Layout'
import '@/global.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata = {
  title: 'Tushig Ochirkhuyag | Frontend Developer',
  description:
    'Frontend development and creative exploration. Selected work, experience and experiments by Tushig Ochirkhuyag, a frontend developer in Chicago.',
  openGraph: {
    title: 'Tushig Ochirkhuyag | Frontend Developer',
    description: 'Thoughtful interfaces. Playful experiments. Explore my selected work.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
