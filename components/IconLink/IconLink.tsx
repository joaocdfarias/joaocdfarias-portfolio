import Link from 'next/link'
import React from 'react'
import Icon from '@/components/Icon/Icon'

export interface IconLinkProps {
  href: string
  name: string
  icon: React.ReactNode
}

export default function IconLink({
  href,
  icon,
  name,
}: Readonly<IconLinkProps>) {
  return (
    <Link href={href} className="group relative">
      <Icon>{icon}</Icon>
      <span className="absolute top-12 left-[-8px] scale-0 transition-all rounded bg-gray-500 p-2 text-xs text-white group-hover:scale-100 text-center">
        {name}
      </span>
    </Link>
  )
}
