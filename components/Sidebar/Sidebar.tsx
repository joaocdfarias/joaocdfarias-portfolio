import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 pt-32 h-[100vh] w-max">
      <Image
        src="/images/profile.jpeg"
        alt="Profile image"
        width={218}
        height={218}
        className="rounded-xl"
        priority
      />
      <p className="font-bold text-4xl text-text-title-light dark:text-text-title-dark">
        João Carlos
      </p>
      <ul className="flex flex-col gap-2">
        <li className="text-text-primary-light dark:text-text-primary-dark flex gap-2">
          <Image
            src="/images/person.png"
            alt="Person icon"
            width={16}
            height={16}
            className="self-center"
          />
          Software Engineer
        </li>
        <li className="text-text-primary-light dark:text-text-primary-dark flex gap-2">
          <Image
            src="/images/pin.png"
            alt="Pin icon"
            width={16}
            height={16}
            className="self-center"
          />
          <Link
            href="https://maps.app.goo.gl/3DaKEwwQDfWLDsf38"
            target="_blank"
          >
            Salvador, Bahia, Brazil
          </Link>
        </li>
        <li className="text-text-primary-light dark:text-text-primary-dark flex gap-2">
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
    </aside>
  )
}
