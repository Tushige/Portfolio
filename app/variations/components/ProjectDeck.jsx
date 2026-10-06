'use client'

import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { projects } from '../data'
import { ProjectImage, ProjectLink } from './Shared'
import styles from '../Variations.module.css'

export default function ProjectDeck() {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]
  return (
    <div className={styles.deck}>
      <div className={styles.deckStage} role='group' aria-label='Choose a project from the gallery'>
        {projects.map((item, index) => {
          const position =
            index === selected
              ? 'center'
              : index === (selected + 1) % projects.length
                ? 'right'
                : index === (selected + projects.length - 1) % projects.length
                  ? 'left'
                  : 'hidden'
          return (
            <button
              key={item.id}
              className={styles.deckCard}
              data-position={position}
              aria-label={`Preview ${item.name}`}
              aria-pressed={index === selected}
              aria-controls='deck-description'
              onClick={() => setSelected(index)}
            >
              <span className={styles.cardCaption}>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </span>
              <ProjectImage project={item} priority={index === 0} sizes='(max-width: 760px) 85vw, 50vw' />
            </button>
          )
        })}
      </div>
      <div className={styles.deckControls}>
        <button
          aria-label='Previous project'
          onClick={() => setSelected((selected + projects.length - 1) % projects.length)}
        >
          <ArrowLeftIcon aria-hidden='true' />
        </button>
        <div role='group' aria-label='Gallery project selection'>
          {projects.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              aria-controls='deck-description'
            >
              {item.name}
            </button>
          ))}
        </div>
        <button aria-label='Next project' onClick={() => setSelected((selected + 1) % projects.length)}>
          <ArrowRightIcon aria-hidden='true' />
        </button>
      </div>
      <div id='deck-description' className={styles.deckDescription} aria-live='polite' aria-atomic='true'>
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p className={styles.stack}>{project.stack}</p>
        </div>
        <ProjectLink project={project} className={styles.action} />
      </div>
    </div>
  )
}
