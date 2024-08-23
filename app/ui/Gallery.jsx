'use client'
import { useState, useRef } from 'react'
import { Quaternion, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { easing } from 'maath'
import { View } from '@/components/canvas/View'

const TEST_URL = 'https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const GOLDENRATIO = 1.61803398875

const TOP_COLOR = '#9EB9D4'
const BOTTOM_COLOR = '#7C9ED9'

const INITIAL_CAMERA_POS = [0, 2, 30];
export default function Gallery({ items }) {
  return (
    <View
      className={`flex size-full flex-col items-center justify-center `}
    >
      <color attach="background" args={[TOP_COLOR]} />
      <fog attach="fog" args={[TOP_COLOR, 0, 15]} />
      <group position={[0, -0.5, 0]} scale={[5, 5, 5]}>
        <Frames items={items} />
        <Floor />
      </group>
    </View>
    // <h1> Projects</h1>
  )
}

function Frames({ items }) {
  const q = new Quaternion();
  const p = new Vector3(...INITIAL_CAMERA_POS);
  const framesRef = useRef();
  const clickedItemRef = useRef();


  const handleClick = (e) => {
    e.stopPropagation();
    const clickedItem = framesRef.current.getObjectByName(e.object.name);
    if (clickedItem !== clickedItemRef.current) {
      clickedItem.parent.updateWorldMatrix(true, true)
      clickedItem.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clickedItem.parent.getWorldQuaternion(q)
      clickedItemRef.current = clickedItem
    } else {
      /**
       * if you click on an already selected item, we go back to default view
       */
      p.set(...INITIAL_CAMERA_POS)
      q.identity()
      clickedItemRef.current = null;
    }
  }

  useFrame((state, dt) => {
    /**
     * animates the camera movement
     */
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })

  return (
    <group
      ref={framesRef}
      onClick={handleClick}
    >
      {items.map(item => (
        <Frame
          key={item.name}
          {...item}
        />
      ))}
    </group>
  )
}

function Frame({ url, name, ...props }) {
  const frameRef = useRef()
  const itemRef = useRef()
  const [isHover, setIsHover] = useState(false);

  return (
    <group {...props}>
      <mesh
        name={name}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frameRef}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null} // we don't register the click handler here
          ref={itemRef}
          position={[0, 0, 0.7]}
          url={url}
          alt="gallery image"
        />
      </mesh>
    </group>
  )
}




function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color={BOTTOM_COLOR}
        metalness={0.5}
      />
    </mesh>
  )
}