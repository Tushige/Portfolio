'use client'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"


export function AppLoader({progress}) {
  const [width, setWidth] = useState(0)

  return (
    <motion.div className="
      absolute left-0 top-0 z-[1] flex
      size-full 
      items-center justify-center bg-fuchsia-900"
    >
      <div className={`relative block h-[10px]  w-[300px] rounded-md bg-[#272727] md:h-[20px] md:w-[600px]`}>
        <motion.div
          className={`absolute left-0 top-0 h-[10px] w-[300px] rounded-md bg-white md:h-[20px] md:w-[600px]`}
          initial={{width: '0%'}}
          animate={{ width: '100%'}}
        >
        </motion.div>
        {/* <motion.div className="flex justify-content-center text-white relative top-[100px]">
          {parseInt(progress * 100)} %
        </motion.div> */}
      </div>
    </motion.div>
  )
}