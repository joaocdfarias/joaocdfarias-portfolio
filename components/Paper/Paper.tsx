import React from 'react'

export const Paper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="px-6 py-5 bg-background-secondary-light dark:bg-background-secondary-dark rounded-lg border-background-primary-light dark:border-background-primary-dark border-[1px]">
      {children}
    </div>
  )
}
