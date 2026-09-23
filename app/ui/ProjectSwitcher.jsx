'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import styles from './Portfolio.module.css'

const previews = [
  {
    label: 'Product engineering',
    title: 'Strike Desk',
    description: 'A playful interface for complex decisions.',
    image: '/projects/strike-desk.webp',
    alt: 'Strike Desk game with company prices, a market chart and a ticket builder',
    href: '#strike-desk',
  },
  {
    label: 'Creative exploration',
    title: 'Arcane',
    description: 'An experiment in motion and storytelling.',
    image: '/projects/arcane.webp',
    alt: 'Arcane fan-site hero featuring animated character artwork and oversized typography',
    href: '#arcane',
  },
]

export default function ProjectSwitcher() {
  const [selected, setSelected] = useState(0)
  const preview = previews[selected]

  return (
    <div className={styles.showcase}>
      <div className={styles.switcher} role='group' aria-label='Choose a project preview'>
        {previews.map((item, index) => (
          <button
            key={item.title}
            type='button'
            aria-pressed={selected === index}
            aria-controls='project-preview'
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div id='project-preview' className={styles.preview}>
        <a href={preview.href} aria-label={`Explore ${preview.title}`} className={styles.previewImage}>
          <Image
            key={preview.image}
            src={preview.image}
            alt={preview.alt}
            width={1280}
            height={720}
            priority={selected === 0}
            sizes='(max-width: 800px) 92vw, 52vw'
          />
        </a>
        <div className={styles.previewCaption} aria-live='polite'>
          <div>
            <strong>{preview.title}</strong>
            <p>{preview.description}</p>
          </div>
          <a href={preview.href} aria-label={`Read about ${preview.title}`}>
            <ArrowUpRightIcon aria-hidden='true' />
          </a>
        </div>
      </div>
      <p className={styles.previewHint}>Different challenges. The same attention to detail.</p>
    </div>
  )
}
