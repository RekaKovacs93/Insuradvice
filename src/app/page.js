

import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Rolam from './components/Rolam'
import Statisztika from './components/Statisztika'
import Biztositasok from './components/Biztositasok'
import Tablazat from './components/Tablazat'
import Metodus from './components/Metodus'



export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10">
      <NavBar></NavBar>
      <Hero></Hero>
      <Rolam></Rolam>
      <Statisztika></Statisztika>
      <Tablazat></Tablazat>
      <Metodus></Metodus>
      <Biztositasok></Biztositasok>

      {/* <Eletbiztositas></Eletbiztositas> */}
    </main>
  )
}
