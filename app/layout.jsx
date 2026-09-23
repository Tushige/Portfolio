import { Inter, Manrope, Space_Grotesk } from 'next/font/google'
import { Layout } from '@/components/dom/Layout'
import DesignControls from '@/ui/DesignControls'
import '@/global.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-play', display: 'swap' })

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
    <html lang='en' suppressHydrationWarning className={`${inter.variable} ${manrope.variable} ${space.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}`,
          }}
        />
      </head>
      <body>
        <DesignControls />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
