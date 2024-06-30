import React from 'react'
import Link from 'next/link'
import { Paper, Icon } from '@/components'
import { Briefcase } from '@/icons'

export const Work = () => {
  return (
    <section className="mt-16">
      <Paper>
        <div className="flex gap-3">
          <Icon hasAfter icon={<Briefcase />} />
          <div>
            <p className="text-3xl font-bold text-text-title-light"> Work </p>
            <p className="text-lg text-text-primary-light mt-3">
              Software Engineer @{' '}
              <Link
                href="https://sanar.com.br/"
                target="_blank"
                className="underline"
              >
                Sanar
              </Link>
              — since 2021
            </p>
            <p className="text-text-secondary-light font-light mt-1">
              At Sanar I work as a Software Engineer at the Payments Team. I
              also was part of Postgraduate Team as Frontend Engineer and
              Product and Platform Analyst.
            </p>
          </div>
        </div>
      </Paper>
    </section>
  )
}
