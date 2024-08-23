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
    <div className="container bg-white rounded-lg shadow-xl" {...props}>
      <nav className="bg-[#fdfdfd] rounded-t-lg border-neutral-300 rounded-b-none border-b-[1px]">
        <ul className="flex p-0 m-0 ">
          {tabs.map((tab, tabIdx) => (
            <motion.li
              key={tab.label}
              onClick={() => setSelectedTab(tabIdx)}
              className={`w-full relative p-4 cursor-pointer rounded-t-lg overflow-hidden ${tabIdx === selectedTab && 'bg-slate-200'}`}
            >
              {tab.icon} {tab.label}
              <AnimatePresence mode="wait">
                {
                  tabIdx === selectedTab ? (
                    <motion.div className="absolute bottom-[-2px] left-0 right-0 h-1 bg-[purple]" layoutId="underline" />
                  ) : null
                }
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="p-4 h-[550px] md:h-[450px] lg:h-[350px]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={selectedTab}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2"
            variants={containerVariant}
            initial={'closed'}
            animate={'open'} //make this conditional

          >
            {
              tabs[selectedTab] ?.items.map(({ label, icon }, idx) => (
                <motion.li
                  key={label}
                  i={idx}
                  className="flex items-center gap-3 rounded-md p-3 bg-fuchsia-50 overflow-hidden"
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