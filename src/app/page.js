

import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Eletbiztositas from './components/Eletbiztositas'


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar></NavBar>
      <Hero></Hero>
      <Eletbiztositas></Eletbiztositas>
    </main>
  )
}
