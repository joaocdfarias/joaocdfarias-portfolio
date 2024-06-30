import React from 'react'
import { tv } from 'tailwind-variants'

export const iconVariants = tv({
  base: 'bg-background-primary-light dark:bg-background-primary-dark rounded-md w-max h-max p-2 text-icon-primary-light dark:text-icon-primary-dark flex gap-2',
  variants: {
    color: {
      primary: 'bg-background-primary-light dark:bg-background-primary-dark',
      secondary:
        'bg-background-secondary-light dark:bg-background-secondary-dark',
      transparent: 'bg-background-transparent',
    },
    withText: {
      primary: 'py-2 px-4',
      base: '',
    },
  },
})

export interface IIconProps {
  icon: React.ReactNode
  text?: string
  hasAfter?: boolean
  tooltip?: string
  hasTooltip?: boolean
  color?: keyof typeof iconVariants.variants.color
}

export const Icon = ({
  icon,
  hasAfter,
  text,
  color,
  hasTooltip,
  tooltip,
}: Readonly<IIconProps>) => {
  return (
    <div className="flex flex-col items-center group relative">
      <div
        className={iconVariants({
          color,
          withText: text ? 'primary' : 'base',
        })}
      >
        {icon}
        {Boolean(text) && (
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            {text}
          </p>
        )}
      </div>
      {hasAfter && (
        <span className="bg-gradient-to-t from-background-secondary-light to-background-primary-light dark:from-background-secondary-dark dark:to-background-primary-dark w-[2px] h-full" />
      )}
      {hasTooltip && (
        <span className="absolute top-12 left-[-8px] scale-0 transition-all rounded bg-background-primary-light dark:bg-background-primary-dark p-2 text-xs text-text-primary group-hover:scale-100 text-center">
          {tooltip}
        </span>
      )}
    </div>
  )
}
