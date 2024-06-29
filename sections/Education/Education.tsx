import React from 'react'
import { Paper } from '../../components'
import Icon from '../../components/Icon/Icon'
import { Book } from '../../icons'
import Link from 'next/link'

export const Education = () => {
  return (
    <section className="mt-8">
      <Paper>
        <div className="flex gap-3">
          <Icon hasAfter>
            <Book />
          </Icon>
          <div>
            <p className="text-3xl font-bold text-title"> Education </p>
            <p className="text-lg text-text mt-3">
              BSc Computer Science @
              <Link href="https://www.unifacs.br/" target="_blank">
                UNIFACS
              </Link>
              — 2023 to 2027
            </p>
            <p className="text-textSecondary font-light mt-1">
              Currently pursuing my bachelor in Computer Science
            </p>
          </div>
        </div>
      </Paper>
    </section>
  )
}
