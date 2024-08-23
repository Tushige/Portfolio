import { useState } from 'react'
import { motion, AnimatePresence, stagger } from "framer-motion"
import Image from 'next/image'

/**
 * 
 * @param {tabs} param0 
 * expects tabs in the following format
  [{
    label: '',
    icon: '',
    items: [] // for the content
  }]
 */
export const AppTabs = ({ tabs, ...props }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const containerVariant = {
    open: {
      transition: {
        staggerChildren: 0.07, delayChildren: 0.3
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }
  const itemVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, valocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  return (
    <div className="container rounded-lg bg-white shadow-xl" {...props}>
      <nav className="rounded-b-none rounded-t-lg border-b border-neutral-300 bg-[#fdfdfd]">
        <ul className="m-0 flex p-0 ">
          {tabs.map((tab, tabIdx) => (
            <motion.li
              key={tab.label}
              onClick={() => setSelectedTab(tabIdx)}
              className={`relative w-full cursor-pointer overflow-hidden rounded-t-lg p-4 ${tabIdx === selectedTab && 'bg-slate-200'}`}
            >
              {tab.icon} {tab.label}
              <AnimatePresence mode="wait">
                {
                  tabIdx === selectedTab ? (
                    <motion.div className="absolute inset-x-0 bottom-[-2px] h-1 bg-[purple]" layoutId="underline" />
                  ) : null
                }
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="h-[550px] p-4 md:h-[450px] lg:h-[350px]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={selectedTab}
            className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4"
            variants={containerVariant}
            initial={'closed'}
            animate={'open'} //make this conditional

          >
            {
              tabs[selectedTab] ?.items.map(({ label, icon }, idx) => (
                <motion.li
                  key={label}
                  i={idx}
                  className="flex items-center gap-3 overflow-hidden rounded-md bg-fuchsia-50 p-3"
                  variants={itemVariant}
                  exit={{
                    y: 10,
                    opacity: 0,
                  }}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <Image src={icon} width={48} height={48} alt={`${label} logo`} className="h-auto" />
                  <span>{label}</span>
                </motion.li>
              ))
            }
          </motion.ul>
        </AnimatePresence>
      </main>
    </div >
  );
}