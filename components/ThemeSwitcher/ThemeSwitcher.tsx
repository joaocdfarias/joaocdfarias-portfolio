'use client'

import React, { useState, useEffect } from 'react'
import { Icon } from '@/components/Icon'
import { Moon, Sun } from '@/icons'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  console.log('Theme', theme)

  return (
    <button
      onClick={handleTheme}
      className="flex gap-4 before:block before:w-[1px] before:h-full before:bg-background-primary-light dark:before:bg-background-primary-dark w-max"
    >
      <Icon icon={theme === 'dark' ? <Sun /> : <Moon />} />
    </button>
  )
}
