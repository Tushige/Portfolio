'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import AppHeader from '@/ui/AppHeader'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

export function Layout({ children }) {
  const ref = useRef()
  const pathname = usePathname()
  const hasScene = pathname === '/playground' || pathname === '/projects'

  if (!hasScene) return children

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width: '100%', height: '100dvh', overflow: 'auto', touchAction: 'auto' }}
    >
      <AppHeader />
      {children}
      <Scene
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100dvh', pointerEvents: 'none' }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}
