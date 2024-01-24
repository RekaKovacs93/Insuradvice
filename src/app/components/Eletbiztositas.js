'use client'

import gsap from "gsap";
import {useEffect, useRef} from "react";

const row1 = [

    {
        title: "Kockázati életbiztosítás",
        description: "Más néven haláleseti életbiztosítás: a biztosítótársaság meghatározott díj ellenében kötelezettséget vállal arra a szerződőnek, hogy a biztosított halála esetén a kedvezményezettnek kifizeti a haláleseti/biztosítási összeget.",

    },
    {
        title: "Megtakarítással összekötött életbiztosítás",
        description: "Abban különbözik a kockázati életbiztosítástól, hogy nem csak halálesetre fizet, hanem rokkantsági térítést is, illetve ellátnak befektetés általi tőkegyarapítást is.",

    },
    {
      title: "Befektetési életbiztosítás",
      description: "A megtakarításos életbiztosítás egyik fajtája, nem garantált a hozam, ennek ellenére a hozampotenciál nagyobb ennél a fajta biztosításnál, mint a vegyes életbiztosításnál, ez a fajta életbiztosítás CSAK tanácsadással történhet",

  },
  {
    title: "Nyugdíj biztosítás",
    description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
    
  },
  ]
const row2 = [

    {
        title: "Vegyes életbiztosítás",
        description: "Megtakarításos életbiztosítás másik fajtája, garantált kamat, ami egy megadott értéknél lehet több, de kevesebb sosem. 2021-ben 424.528 ilyen szerződés talált gazdára.",

    },
    {
      title: "Euróalapú megtakarításos életbiztosítás",
      description: "Annak ajánlom, aki szeretne értékvédelmet a megtakarításának és a vásárlóértékének növelése a megtakarítási idő alatt",

    },
    {
      title: "Csoportos életbiztosítás",
      description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
      
    }

  ]
const row3 = [

];

export default function Eletbiztositas() {



  useEffect(() => {
    // const hexagon = hexagonRef.current;

    const handleMouseEnter = (event) => {
      const hexagon = event.target;
      gsap.to(hexagon, {
        duration: 5,
        // stagger: 0.1,
        transformOrigin: 'center',
        pause: true,
        filter: "drop-shadow(0px 0px 10px var(--accent))",
        // ease: "steps(12)"
      })
    };

    const handleMouseLeave = (event) => {
      const hexagon = event.target;
      gsap.to(hexagon, {
        filter: "drop-shadow(0px 0px 10px transparent)",
        duration: 3,
      });
    };

    document.querySelectorAll('.hexagon').forEach(hexagon => {
      hexagon.addEventListener('mouseenter', handleMouseEnter);
      hexagon.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.querySelectorAll('.hexagon').forEach(hexagon => {
        hexagon.removeEventListener('mouseenter', handleMouseEnter);
        hexagon.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center  text-5xl px-10 md:py-5 py-3 my-20">Biztosítások fajtái</h1>
      {/* <h1 className="text-center md:text-xl md:mb-14 md:px-10">Költségei a mi pénztárcánkat terhelik!</h1> */}

      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 items-center ">
        {row1.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="relative ">
            <div className="hexagon">
              {/* <Image
                src="/hexagon.svg"
                alt={service.title}
                width={300}
                height={250}
                className="rounded-lg object-cover opacity-20 rotate-90"
              /> */}
              <div id="card" className="absolute inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 id="hovertitle" className="text-center text-lg"><b>{service.title}</b></h1>
                  <p className=" text-xs text-center ">{service.description}</p>
                </div>
              </div>

            </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 items-center mx-40 relative top-[-50px]">
        {row2.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="relative ">
            <div className="hexagon ">
              {/* <Image
                src="https://cdn.pixabay.com/photo/2020/04/12/18/43/abstract-5035370_1280.jpg"
                alt={service.title}
                layout="fill"
                className="rounded-lg object-cover opacity-20"
              /> */}
              <div id="card" className="absolute   inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 id="hovertitle" className="text-center text-lg"><b>{service.title}</b></h1>
                  <p className=" text-xs text-center">{service.description}</p>
                </div>
              </div>

            </div>
            </div>
          </div>
        ))}
        
      </div>
      

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-10 px-10 py-5 ">
        {row1.map((service, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-48 relative rounded-lg  dark:border-accent border-accentLight bg-light dark:bg-dark">
              {/* <Image
                src={service.imageURL}
                alt={service.title}
                layout="fill"
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
                {service.title}
              </div>
            </div>
            <div className="text-center my-2 px-4">
              <p className="text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 shadow-neumorphic hover:scale-125 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Tudj meg többet</a></button>

      {/* <div className="flex justify-center mt-8">
      <button className="mt-5 border-2 shadow-neumorphic dark:border-accent border-accentLight hover:bg-dark hover:bg-opacity-50 font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Hívjon minket most!</a></button>
      </div> */}
    </div>
  );
}
