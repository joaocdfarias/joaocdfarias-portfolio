import React from 'react'

export default function Icon({ children }: Readonly<React.PropsWithChildren>) {
  return <div className="bg-backgroundPrimary rounded-md w-max p-2 text-icon">{children}</div>
}
