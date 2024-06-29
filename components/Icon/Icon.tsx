import React from 'react'

export interface IIconProps {
  children: React.ReactNode
  hasAfter?: boolean
}

export default function Icon({ children, hasAfter }: Readonly<IIconProps>) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-backgroundPrimary rounded-md w-max h-max p-2 text-icon">
        {children}
      </div>
      {hasAfter && (
        <span className="bg-gradient-to-t from-backgroundSecondary to-backgroundPrimary w-[2px] h-full" />
      )}
    </div>
  )
}
