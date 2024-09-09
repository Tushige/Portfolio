import { motion } from "framer-motion"

export const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3
      }}
    >
      {children}
    </motion.div>
  )
}