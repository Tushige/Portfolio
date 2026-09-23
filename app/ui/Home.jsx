'use client'

import { Suspense, useState } from 'react'
import Image from 'next/image'
import { OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import { PauseIcon, PlayIcon } from '@heroicons/react/24/outline'
import { Mew } from '@/models/mew'
import { PlanetEarth } from '@/models/planet_earth'
import { Galaxy } from '@/models/galaxy'
import { View } from '@/components/canvas/View'
import styles from './Home.module.css'

export default function Home() {
  const reducedMotion = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const [started, setStarted] = useState(false)
  const { active, progress, errors } = useProgress()
  const showScene = (!reducedMotion || started) && errors.length === 0
  const isPlaying = showScene && !paused

  return (
    <main className={styles.playground}>
      <div className={styles.intro}>
        <h1>A little space to play.</h1>
        <p>Drag to explore the planet. Stay curious.</p>
      </div>
      {showScene ? (
        <View className={styles.scene} aria-label='Interactive 3D planet. Drag with a pointer to change the view.'>
          <PerspectiveCamera makeDefault position={[0, 0, 1]} fov={75} />
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={4} />
          <hemisphereLight color='#d9ffb1' groundColor='#000000' intensity={1} />
          <Suspense fallback={null}>
            <Galaxy isRotating={isPlaying} />
            <OrbitControls
              autoRotate={isPlaying}
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <PlanetEarth />
            <Mew isRotating={isPlaying} />
          </Suspense>
        </View>
      ) : (
        <Image
          src='/projects/playground.webp'
          alt='Low-poly planet in a purple star field'
          fill
          priority
          className={styles.poster}
          sizes='100vw'
        />
      )}
      <div className={styles.controls}>
        {errors.length > 0 ? (
          <p role='status'>The 3D scene couldn&apos;t load. You can still explore my work from the portfolio.</p>
        ) : (
          <>
            {active && showScene && <p role='status'>Loading the playground… {Math.round(progress)}%</p>}
            <button
              type='button'
              onClick={() => (showScene ? setPaused(!paused) : setStarted(true))}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <PauseIcon aria-hidden='true' /> : <PlayIcon aria-hidden='true' />}
              {showScene ? (paused ? 'Resume motion' : 'Pause motion') : 'Start 3D playground'}
            </button>
          </>
        )}
      </div>
    </main>
  )
}
