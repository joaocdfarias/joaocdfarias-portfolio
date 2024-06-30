import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { Sidebar, Container, Header } from '@/components'

import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'João Farias | Software Engineer',
  description: 'Hi there! Welcome to my website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${beVietnamPro.className} bg-body-light dark:bg-body-dark`}
      >
        <ThemeProvider attribute="class">
          <Container>
            <Sidebar />
            {children}
            <Header />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
