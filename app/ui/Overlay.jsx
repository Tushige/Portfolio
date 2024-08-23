'use client'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

export function Overlay({ready}) {
  if (!ready) return null;
  const pathname = usePathname()
  return (
    <div className="px-4 lg:px-16">
      <div className="absolute left-[10%] top-[10%] flex flex-col">
        <div className="
          flex align-items-end p-0 m-0
          text-fuchsia-900 tracking-tight font-medium sm:leading-none
          text-[5em] sm:text-[8em] 2xl:text-[12em]
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
          flex p-0 m-0 
          text-[#fff] font-black tracking-tight sm:leading-none
          text-[3em] sm:text-[6em] 2xl:text-[8em] 
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
    </div>
  )
}