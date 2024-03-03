

import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Rolam from './components/Rolam'
import Statisztika from './components/Statisztika'
import Biztositasok from './components/Biztositasok'
import Tablazat from './components/Tablazat'
import Metodus from './components/Metodus'
import Gyermek from './components/Gyermek'
import Garancia from './components/Garancia'



export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10">
      <NavBar></NavBar>
      <Hero></Hero>
      <Rolam></Rolam>
      <Metodus></Metodus>
      <Statisztika></Statisztika>
      <Tablazat></Tablazat>
      <Biztositasok></Biztositasok>
      <Gyermek></Gyermek>
      <div id="contact"><Garancia></Garancia></div>

      {/* <Eletbiztositas></Eletbiztositas> */}
    </main>
  )
}
