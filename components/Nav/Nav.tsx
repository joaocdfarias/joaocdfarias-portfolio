import React, { PropsWithChildren } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Nav({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="flex before:h-[100vh] before:w-0.5 before:bg-[#E9ECEF] after:h-[100vh] after:w-0.5 after:bg-[#E9ECEF] after:ml-14">
      <aside className="flex after:flex after:h-[100vh] after:w-0.5 after:bg-[#E9ECEF]">
        <div className='w-max h-max'>
          <Image
            src="/images/profile.jpeg"
            alt="Profile image"
            width={218}
            height={218}
            className="rounded-xl"
          />
          <p className="font-bold text-4xl text-[#00111C]"> João Carlos </p>
          <ul>
            <li className="text-[#001523] flex gap-2">
              <Image
                src="/images/person.png"
                alt="Mail icon"
                width={16}
                height={16}
                className="self-center"
              />
              Software Engineer
            </li>
            <li className="text-[#001523] flex gap-2">
              <Image
                src="/images/pin.png"
                alt="Mail icon"
                width={16}
                height={16}
                className="self-center"
              />
              <Link href="">Salvador, Bahia, Brazil</Link>
            </li>
            <li className="text-[#001523] flex gap-2">
              <Image
                src="/images/mail.png"
                alt="Mail icon"
                width={16}
                height={16}
                className="self-center"
              />
              <Link href="mailto:joaocdfariass@gmail.com">
                joaocdfariass@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </div>
  )
}
