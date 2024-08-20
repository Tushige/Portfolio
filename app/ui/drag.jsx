'use client'
import { animated, useSpring } from "@react-spring/web"
import { useDrag } from '@use-gesture/react'

const orig_xy = { x: 0, y: 0 }
export default function Drag() {
  // useSpring API pattern 2 - pass a function that returns the config object
  const [springs, api] = useSpring(() => ({
    x: 0, y: 0
  }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if (down) {
      api.start({ x: mx, y: my })
    } else {
      // when you stop dragging, the square returns to its original position
      api.start(orig_xy)
    }
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <animated.div
        {...bind()}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs
        }}
      />
    </div>
  );
}
