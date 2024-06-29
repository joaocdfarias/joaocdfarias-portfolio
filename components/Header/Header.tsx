'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const tabs = [
  { id: 'home', text: 'Home', href: '/' },
  { id: 'blog', text: 'Blog', href: '/blog' },
  { id: 'projects', text: 'Projects', href: '/projects' },
]

export const Header = () => {
  const pathname = usePathname()
  const { push } = useRouter()
  const [current, setCurrent] = useState(pathname)

  return (
    <header className="fixed text-text top-6">
      <nav className="p-4 rounded-full bg-backgroundSecondary border-backgroundSecondaryStroke">
        <ul className="flex gap-2">
          {tabs.map((tab) => (
            <button
              onClick={() => {
                setCurrent(tab.href)
                push(tab.href)
              }}
              key={tab.id}
            >
              <li
                className={`${
                  current === tab.href ? '' : 'hover:opacity-50'
                } relative px-4 py-2`}
              >
                {current === tab.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="rounded-full bg-text/30 absolute inset-0"
                    style={{ borderRadius: 9999 }}
                  />
                )}

                <span className="relative"> {tab.text} </span>
              </li>
            </button>
          ))}
        </ul>
      </nav>
    </header>
  )
}
