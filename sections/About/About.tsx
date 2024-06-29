import React from 'react'

import IconLink, { IconLinkProps } from '@/components/IconLink/IconLink'
import { GitHub, Twitter, LinkedIn } from '@/icons'

const icons: IconLinkProps[] = [
  {
    href: 'https://www.linkedin.com/in/joaocdfarias/',
    icon: <LinkedIn />,
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/joaocdfarias',
    icon: <GitHub />,
    name: 'GitHub',
  },
  {
    href: 'https://x.com/joaocdfarias',
    icon: <Twitter />,
    name: 'Twitter',
  },
]

export const About = () => {
  return (
    <section className="pt-32">
      <p className="text-4xl text-title font-bold mb-2"> 👋 Hi there! </p>
      <div className='font-light'>
        <p className="text-text">
          I’m João Carlos, a dedicated Software Engineer, passionate about
          creating efficient solutions and applications with expertise in React
          and Nest.js. My professional philosophy is: continuous learning. It
          drives me to stay updated with latest tech.
        </p>
        <br />
        <p className="text-text">
          Outside of work, I like to practice sports such as Muay Thai and BJJ.
          I also like design (mainly UI design), I also enjoy going to the gym
          and running. In my spare time, I create personal projects to push my
          skills.
        </p>
        <br />
        <p className="text-text">Connect with me:</p>
      </div>
      <ul className="mt-2 flex gap-4">
        {icons.map((icon) => (
          <li className="w-max" key={icon.href}>
            <IconLink href={icon.href} icon={icon.icon} name={icon.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}
