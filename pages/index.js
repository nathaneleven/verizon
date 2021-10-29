import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/molecules/Header'
import Hero from '../src/components/organisms/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}
