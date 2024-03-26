import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Rolam from './components/Rolam'
import Statisztika from './components/Statisztika'
import Biztositasok from './components/Biztositasok'
import Tablazat from './components/Tablazat'
import Metodus from './components/Metodus'
import Gyermek from './components/Gyermek'
import Garancia from './components/Garancia'
import Footer from './components/Footer'
import Cegek from './components/Cegek'
import Nyugdij from './components/Nugdij'



export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 px-10">
      <NavBar></NavBar>
      <Hero></Hero>
      <Rolam></Rolam>
      <Metodus></Metodus>
      
      <Statisztika></Statisztika>
      <Nyugdij></Nyugdij>
      <Tablazat></Tablazat>
      <Biztositasok></Biztositasok>
      <Gyermek></Gyermek>
      
      <div id="contact"><Garancia></Garancia></div>
      <Cegek></Cegek>
      <Footer></Footer>

      {/* <Eletbiztositas></Eletbiztositas> */}
    </main>
  )
}
