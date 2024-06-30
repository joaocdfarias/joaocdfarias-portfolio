import React from 'react'

import { Icon, Paper } from '@/components'
import { Book } from '@/icons'

import Link from 'next/link'

export const Education = () => {
  return (
    <section className="mt-8">
      <Paper>
        <div className="flex gap-3">
          <Icon hasAfter icon={<Book />} />
          <div>
            <p className="text-3xl font-bold text-text-title-light"> Education </p>
            <p className="text-lg text-text-primary-light mt-3">
              BSc Computer Science @{' '}
              <Link
                href="https://www.unifacs.br/"
                target="_blank"
                className="underline"
              >
                UNIFACS
              </Link>
              — 2023 to 2027
            </p>
            <p className="text-text-secondary-light font-light mt-1">
              Currently pursuing my bachelor in Computer Science
            </p>
          </div>
        </div>
      </Paper>
    </section>
  )
}
