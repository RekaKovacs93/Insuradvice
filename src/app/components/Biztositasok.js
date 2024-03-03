'use client'

import gsap from "gsap";
import {useEffect} from "react";
import Image from "next/image"

const row1 = [

    {
        title: "Kockázati életbiztosítás",
        description: "Más néven haláleseti életbiztosítás: a biztosítótársaság meghatározott díj ellenében kötelezettséget vállal arra a szerződőnek, hogy a biztosított halála esetén a kedvezményezettnek kifizeti a haláleseti/biztosítási összeget.",

    },


    {
      title: "Befektetési életbiztosítás",
      description: "A megtakarításos életbiztosítás egyik fajtája, nem garantált a hozam, ennek ellenére a hozampotenciál nagyobb ennél a fajta biztosításnál, mint a vegyes életbiztosításnál, ez a fajta életbiztosítás CSAK tanácsadással történhet",

  },
  
  ]
const row2 = [

    {
        title: "Euróalapú megtakarításos életbiztosítás",
        description: "Annak ajánlom, aki szeretne értékvédelmet a megtakarításának és a vásárlóértékének növelése a megtakarítási idő alatt",
  
      },
    {
      title: "Nyugdíj biztosítás",
      description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
      
    },
    {
        title: "Megtakarítással összekötött életbiztosítás",
        description: "Abban különbözik a kockázati életbiztosítástól, hogy nem csak halálesetre fizet, hanem rokkantsági térítést is, illetve ellátnak befektetés általi tőkegyarapítást is.",

    },

    

  ]
const row3 = [
    {
        title: "Csoportos életbiztosítás",
        description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
        
      },
      {
        title: "Vegyes életbiztosítás",
        description: "Megtakarításos életbiztosítás másik fajtája, garantált kamat, ami egy megadott értéknél lehet több, de kevesebb sosem. 2021-ben 424.528 ilyen szerződés talált gazdára.",

    },

];

const allrows =[
    {
        title: "Kockázati életbiztosítás",
        description: "Más néven haláleseti életbiztosítás: a biztosítótársaság meghatározott díj ellenében kötelezettséget vállal arra a szerződőnek, hogy a biztosított halála esetén a kedvezményezettnek kifizeti a haláleseti/biztosítási összeget.",

    },


    {
        title: "Befektetési életbiztosítás",
        description: "A megtakarításos életbiztosítás egyik fajtája, nem garantált a hozam, ennek ellenére a hozampotenciál nagyobb ennél a fajta biztosításnál, mint a vegyes életbiztosításnál, ez a fajta életbiztosítás CSAK tanácsadással történhet",

    },
    {
        title: "Euróalapú megtakarításos életbiztosítás",
        description: "Annak ajánlom, aki szeretne értékvédelmet a megtakarításának és a vásárlóértékének növelése a megtakarítási idő alatt",

    },
    {
        title: "Megtakarítással összekötött életbiztosítás",
        description: "Abban különbözik a kockázati életbiztosítástól, hogy nem csak halálesetre fizet, hanem rokkantsági térítést is, illetve ellátnak befektetés általi tőkegyarapítást is.",

    },
    {
        title: "Csoportos életbiztosítás",
        description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
        
    },
    {
        title: "Vegyes életbiztosítás",
        description: "Megtakarításos életbiztosítás másik fajtája, garantált kamat, ami egy megadott értéknél lehet több, de kevesebb sosem. 2021-ben 424.528 ilyen szerződés talált gazdára.",

    },

]

export default function Biztositasok() {




  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center text-3xl md:text-5xl md:px-10 md:py-5 py-3 md:my-20 my-10">Életbiztosítások</h1>
      {/* <h1 className="text-center md:text-xl md:mb-14 md:px-10">Költségei a mi pénztárcánkat terhelik!</h1> */}

      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-4 items-center ">
        {allrows.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="relative w-60 h-60 rounded-lg growing mb-10">
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 id="hovertitle" className="text-center text-lg px-10"><b>{service.title}</b></h1>
                  <p className=" text-xs text-center px-10">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-4 items-center ">
        {row2.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="relative w-60 h-60 rounded-lg growing mb-10">
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 id="hovertitle" className="text-center text-lg px-10"><b>{service.title}</b></h1>
                  <p className=" text-xs text-center px-10">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))} */}
        
      {/* </div>
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-4 items-center ">
        {row3.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="relative w-60 h-60 rounded-lg growing">
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 id="hovertitle" className="text-center text-lg px-10"><b>{service.title}</b></h1>
                  <p className=" text-xs text-center px-10">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))} */}
        
      {/* </div> */}

      

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-5 py-5 ">
        {allrows.map((service, index) => (
          <div key={index}>

              <div className="p-5 rounded-lg shadow-neumorphic-inverse items-center justify-center text-center text-2xl">
                {service.title}
                <div className="text-center my-2">
              <p className="text-base">{service.description}</p>
            </div>
              </div>
            {/* </div> */}
            
          </div>
        ))}
      </div>
      <button className="mt-10 shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300 w-64"><a href="/#contact">Tudj meg többet</a></button>

      {/* <div className="flex justify-center mt-8">
      <button className="mt-5 border-2 shadow-neumorphic dark:border-accent border-accentLight hover:bg-dark hover:bg-opacity-50 font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Hívjon minket most!</a></button>
      </div> */}
    </div>
  );
}
