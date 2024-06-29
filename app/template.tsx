'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function Template({ children }: Readonly<PropsWithChildren>) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
