import React, { PropsWithChildren } from 'react'

export default function Container({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="container mx-auto flex gap-28 justify-center">
      {children}
    </div>
  )
}
