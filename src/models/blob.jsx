'use client'
import React, { useState } from 'react'
import { useSpring, animated, a } from '@react-spring/three'
import { MeshDistortMaterial, Box, Sphere, meshStandardMaterial } from '@react-three/drei'
import { Canvas, MeshStandardMaterial } from '@react-three/fiber'

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)

export const Blob = ({ ...props }) => {
  const [clicked, setClicked] = useState(false)

  const springs = useSpring({
    color: clicked ? '#569AFF' : '#ff6d6d',
  })

  const handleClick = () => {
    setClicked(s => !s)
  }
  return (
    <mesh onClick={handleClick} scale={0.1}>
      <sphereGeometry args={[1, 64, 64]} />
      <AnimatedMeshDistortMaterial
        roughness={0.5}
        speed={5}
        distort={0.5}
        color={springs.color}
      />
    </mesh>
  )
}