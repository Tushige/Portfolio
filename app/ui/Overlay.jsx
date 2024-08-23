'use client'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

export function Overlay({ready}) {
  const pathname = usePathname()
  if (!ready) return null;
  return (
    <div className="px-4 lg:px-16">
      <div className="absolute left-[10%] top-[10%] flex flex-col">
        <div className="
          m-0 flex p-0
          text-[5em] font-medium tracking-tight text-fuchsia-900
          sm:text-[8em] sm:leading-none 2xl:text-[12em]
        ">
          <motion.h1
            initial={{x:-300, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{delay: 0, duration: 1}}
            className=""
          >
            Hi!
          </motion.h1>
        </div>
        <div className="
          m-0 flex p-0 
          text-[3em] font-black tracking-tight text-white
          sm:text-[6em] sm:leading-none 2xl:text-[8em] 
        ">
          <motion.h2 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }} 
            className="uppercase"
          >I&apos;tm Tushig</motion.h2>
        </div>
      </div>
    </div>
  )
}