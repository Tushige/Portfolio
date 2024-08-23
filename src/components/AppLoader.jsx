'use client'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"


export function AppLoader({progress}) {
  const [width, setWidth] = useState(0)

  return (
    <motion.div className="
      absolute top-0 left-0 w-full h-full z-1
      bg-fuchsia-900 
      flex items-center justify-center"
    >
      <div className={`block w-[300px] h-[10px] md:w-[600px] md:h-[20px] bg-[#272727] relative rounded-md`}>
        <motion.div
          className={`w-[300px] h-[10px] md:w-[600px] md:h-[20px] bg-white absolute top-0 left-0 rounded-md`}
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