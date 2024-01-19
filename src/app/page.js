

import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Eletbiztositas from './components/Eletbiztositas'
import Rolam from './components/Rolam'


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar></NavBar>
      <Hero></Hero>
      <Rolam></Rolam>
      <Eletbiztositas></Eletbiztositas>
    </main>
  )
}
