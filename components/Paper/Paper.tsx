import React from 'react'

export const Paper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="px-6 py-5 bg-background-secondary-light rounded-lg border-background-primary-light border-[1px]">
      {children}
    </div>
  )
}
