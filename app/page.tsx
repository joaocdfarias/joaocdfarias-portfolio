import { About, Education, Work } from '@/sections'

export default function Home() {
  return (
    <main className="max-w-[600px]">
      <About />
      <Work />
      <Education />
    </main>
  )
}
