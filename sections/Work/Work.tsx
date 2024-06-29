import React from 'react'
import { Paper } from '@/components'
import Icon from '@/components/Icon/Icon'
import { Briefcase } from '@/icons'
import Link from 'next/link'

export const Work = () => {
  return (
    <section className='mt-16'>
      <Paper>
        <div className="flex gap-3">
          <Icon hasAfter>
            <Briefcase />
          </Icon>
          <div>
            <p className="text-3xl font-bold text-title"> Work </p>
            <p className='text-lg text-text mt-3'>
              Software Engineer @
              <Link href="https://sanar.com.br/" target="_blank">
                Sanar
              </Link>
              — since 2021
            </p>
            <p className='text-textSecondary font-light mt-1'>
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
