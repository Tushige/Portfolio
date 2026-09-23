import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function AppHeader() {
  return (
    <header style={{ position: 'absolute', top: 24, left: 24, zIndex: 2 }}>
      <Link
        href='/'
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 18px',
          borderRadius: 12,
          background: '#fcfaff',
          color: '#241734',
          fontWeight: 600,
        }}
      >
        <ArrowLeftIcon width={18} height={18} aria-hidden='true' /> Back to portfolio
      </Link>
    </header>
  )
}
