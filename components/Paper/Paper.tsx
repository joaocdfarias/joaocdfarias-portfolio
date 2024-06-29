import React from 'react'

export const Paper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="px-6 py-5 bg-backgroundSecondary rounded-lg border-backgroundSecondaryStroke border-[1px]">
      {children}
    </div>
  )
}
