'use client'
import ReactDOM from 'react-dom'
import { motion } from "framer-motion"

export function Overlay({ready}) {
  if (!ready) return null;
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}> */}
      <div className="absolute left-[10%] top-[10%] flex flex-col">
        <div className="
          flex align-items-end p-0 m-0
          text-[#5D8AA8] tracking-tight font-medium text-[5em] md:leading-none md:text-[20em]
        ">
          <motion.h1
            initial={{x:-300, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{delay: 0, duration: 1}}
          >
            Hi!
          </motion.h1>
        </div>
        <div className="
          flex p-0 m-0 
          text-[peru] font-black tracking-tight text-[3em] md:text-[10em] md:leading-none
        ">
          <motion.h2 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }} 
            className="uppercase"
          >
            I'm Tushig
          </motion.h2>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>pretty bad —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>08/18/2024</div>
    </div>
  )
}