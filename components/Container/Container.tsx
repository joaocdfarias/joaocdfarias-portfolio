import React, { PropsWithChildren } from 'react'

export default function Container({ children }: Readonly<PropsWithChildren>) {
  return <div className="container mx-auto px-32"> {children} </div>
}
