'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { ThemeSwitcher } from '@/components'
import { Home, Blog, Code } from '@/icons'

const tabs = [
  { id: 'home', text: 'Home', href: '/', icon: <Home /> },
  { id: 'blog', text: 'Blog', href: '/blog', icon: <Blog /> },
  { id: 'projects', text: 'Projects', href: '/projects', icon: <Code /> },
]

export const Header = () => {
  const pathname = usePathname()
  const { push } = useRouter()
  const [current, setCurrent] = useState(pathname)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed text-text-primary-light dark:text-text-primary-dark top-6 dark:border-background-secondary-stroke dark:border-[1px] dark:rounded-lg"
    >
      <nav className="p-2 rounded-lg bg-background-secondary-light dark:bg-background-secondary-dark flex">
        <ul className="flex gap-2">
          {tabs.map((tab) => {
            const isCurrentTab = current === tab.href

            return (
              <button
                onClick={() => {
                  setCurrent(tab.href)
                  push(tab.href)
                }}
                key={tab.id}
              >
                <li
                  className={`${
                    isCurrentTab ? '' : 'hover:opacity-50'
                  } relative px-4 py-2`}
                >
                  {isCurrentTab && (
                    <motion.div
                      layoutId="active-pill"
                      className="bg-background-primary-light dark:bg-background-primary-dark absolute inset-0"
                      style={{ borderRadius: 8 }}
                    />
                  )}

                  <span className="relative flex gap-2 items-center">
                    {isCurrentTab && (
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, type: 'spring' }}
                        className="text-text-primary-light dark:text-text-primary-dark"
                      >
                        {tab.icon}
                      </motion.div>
                    )}
                    {tab.text}
                  </span>
                </li>
              </button>
            )
          })}
        </ul>
        <ThemeSwitcher />
      </nav>
    </motion.header>
  )
}
