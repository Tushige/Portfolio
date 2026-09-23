'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { projects } from '../data'
import { ProjectImage, ProjectLink } from './Shared'
import styles from '../Variations.module.css'

export default function ProjectIndex() {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]
  return (
    <div className={styles.projectBrowser}>
      <div className={styles.projectList} role='group' aria-label='Select a project'>
        {projects.map((item, index) => (
          <button
            key={item.id}
            aria-pressed={selected === index}
            aria-controls='index-preview'
            onClick={() => setSelected(index)}
          >
            <span className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
            <span>
              <strong>{item.name}</strong>
              <small>{item.category}</small>
            </span>
            <ArrowRightIcon aria-hidden='true' />
          </button>
        ))}
      </div>
      <div id='index-preview' className={styles.indexPreview} aria-live='polite' aria-atomic='true'>
        <div key={project.id} className={styles.indexContent}>
          <ProjectLink project={project} className={styles.indexImage}>
            <ProjectImage project={project} priority={selected === 0} sizes='(max-width: 760px) 90vw, 55vw' />
          </ProjectLink>
          <div className={styles.indexCaption}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className={styles.stack}>{project.stack}</p>
            <ProjectLink project={project} className={styles.textAction} />
          </div>
        </div>
      </div>
    </div>
  )
}
