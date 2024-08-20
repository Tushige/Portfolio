'use client'
import { DefaultLoadingManager } from 'three'
import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
// import Loader from './Loader';
import { OrbitControls, PerspectiveCamera, Stars, useProgress } from '@react-three/drei'
import { animated } from '@react-spring/web'
import { useTransition, a } from '@react-spring/three'
import { motion } from "framer-motion"
import {
  Mew,
  PlanetEarth,
  Galaxy
} from '@/models';
import { Globals } from "@react-spring/shared";
import { View } from '@/components/canvas/View'
import { Overlay } from './Overlay'
import styles from './Home.module.css'

const SM_BREAK = 768;

// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false
// })

function Loader2() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function LoadingFramer({progress}) {
  const [width, setWidth] = useState(0)
  const LOADER_WIDTH = 600;

  return (
    <motion.div className="
      absolute top-0 left-0 w-full h-full z-1
      bg-[#334852] 
      flex items-center justify-center"
    >
      <div className={`block w-[${LOADER_WIDTH / 2}px] h-[10px] md:w-[${LOADER_WIDTH}px] md:h-[20px] bg-[#272727] relative rounded-md`}>
        <motion.div
          className={`w-[${LOADER_WIDTH/2}px] h-[10px] md:w-[${LOADER_WIDTH}px] md:h-[20px] bg-white absolute top-0 left-0 rounded-md`}
          initial={{width: 0}}
          animate={{ width: LOADER_WIDTH}}
        >
        </motion.div>
        {/* <motion.div className="flex justify-content-center text-white relative top-[100px]">
          {parseInt(progress * 100)} %
        </motion.div> */}
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [progress, setProgress] = useState(0) // [0, 1]
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [ready, setReady] = useState(false)
  
  const onMouseDown = () => {
    setIsMouseDown(true)
  }

  const onMouseUp = () => {
    setIsMouseDown(false)
  }

  useEffect(() => {
    DefaultLoadingManager.onLoad = () => {
      setReady(true)
    }
    DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setProgress((itemsLoaded / itemsTotal))
    }
  }, [])

  return (
    <section className="w-full h-screen relative">
      <View
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={`w-full flex h-full w-full flex-col items-center justify-center ${styles.bg} ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 1]} fov={75}>
        </PerspectiveCamera>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 1]} intensity={4} />
        <hemisphereLight skyColor="#d9ffb1" groundColor="#000000" intensity={1} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        <Suspense fallback={null}>
          <Galaxy />
          <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <PlanetEarth />
          <Mew isRotating={true} />
        </Suspense>
      </View>
      {
        !ready && <LoadingFramer progress={progress}/>
      }
     <Overlay ready={ready}/>
    </section>
  )
}
