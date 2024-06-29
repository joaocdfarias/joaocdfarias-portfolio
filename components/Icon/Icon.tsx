import React from 'react'
import { tv } from 'tailwind-variants'

export const iconVariants = tv({
  base: 'bg-backgroundPrimary rounded-md w-max h-max p-2 text-icon flex gap-2',
  variants: {
    color: {
      primary: 'bg-backgroundPrimary',
      secondary: 'bg-backgroundSecondary',
      border: 'bg-backgroundPrimary',
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
        {Boolean(text) && <p className="text-textSecondary"> {text} </p>}
      </div>
      {hasAfter && (
        <span className="bg-gradient-to-t from-backgroundSecondary to-backgroundPrimary w-[2px] h-full" />
      )}
      {hasTooltip && (
        <span className="absolute top-12 left-[-8px] scale-0 transition-all rounded bg-backgroundPrimary p-2 text-xs text-white group-hover:scale-100 text-center">
          {tooltip}
        </span>
      )}
    </div>
  )
}
