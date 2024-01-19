import Image from "next/image";

const servicesData = [
    {
        title: "Kockázati életbiztosítás",
        description: "Más néven haláleseti életbiztosítás: a biztosítótársaság meghatározott díj ellenében kötelezettséget vállal arra a szerződőnek, hogy a biztosított halála esetén a kedvezményezettnek kifizeti a haláleseti/biztosítási összeget.",
        imageURL: "https://cdn.pixabay.com/photo/2014/08/22/18/46/photographer-424620_1280.jpg",
    },
    {
        title: "Megtakarítással összekötött életbiztosítás",
        description: "Abban különbözik a kockázati életbiztosítástól, hogy nem csak halálesetre fizet, hanem rokkantsági térítést is, illetve ellátnak befektetés általi tőkegyarapítást is.",
        imageURL: "https://cdn.pixabay.com/photo/2023/04/13/07/27/bedroom-7921915_1280.jpg"
    },
    {
        title: "Befektetési egységekhez kötött életbiztosítás",
        description: "A megtakarításos életbiztosítás egyik fajtája, nem garantált a hozam, ennek ellenére a hozampotenciál nagyobb ennél a fajta biztosításnál, mint a vegyes életbiztosításnál, ez a fajta életbiztosítás CSAK tanácsadással történhet 2021-ben Magyarországon ebből a fajátból 1.000.000 szerződés volt ilyen típusú",
        imageURL: "https://cdn.pixabay.com/photo/2014/02/25/22/06/staircase-274614_1280.jpg"
    },
    {
        title: "Vegyes életbiztosítás",
        description: "Megtakarításos életbiztosítás másik fajtája, garantált kamat, ami egy megadott értéknél lehet több, de kevesebb sosem. 2021-ben 424.528 ilyen szerződés talált gazdára.",
        imageURL: "https://cdn.pixabay.com/photo/2017/08/06/03/04/drone-2588156_1280.jpg"
    },
    {
      title: "Euróalapú megtakarításos életbiztosítás",
      description: "Annak ajánlom, aki szeretne értékvédelmet a megtakarításának és a vásárlóértékének növelése a megtakarítási idő alatt",
      imageURL: "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
    },
    {
      title: "Csoportos életbiztosítás",
      description: "Olyan életbiztosítás, amikor a szerződő egy vállalat, társaság, cég stb. lehet, aki becsatlakozik az válhat biztosítottá",
      imageURL: "https://cdn.pixabay.com/photo/2018/01/28/10/08/purchase-3113198_1280.jpg"
    }
];

export default function Eletbiztositas() {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen">
      <h1 className="text-center  text-5xl px-10 md:py-5 py-3 my-20">Életbiztosítás és azok fajtái:</h1>
      {/* <h1 className="text-center md:text-xl md:mb-14 md:px-10">Költségei a mi pénztárcánkat terhelik!</h1> */}

      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col sm:flex-row flex-wrap justify-center gap-x-20 gap-y-5 items-center mx-60">
        {servicesData.map((service, index) => (
          <div key={index} className=" items-center ">
            <div className="h-48 w-48 md:h-64 md:w-64 relative">
              <Image
                src="https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_1280.jpg"
                alt={service.title}
                layout="fill"
                className="rounded-lg object-cover opacity-5"
              />
              <div id="card" className="absolute  inset-0 rounded-lg flex flex-col items-center justify-center">
                <h1 id="title" className="absolute text-2xl opacity-100 text-center px-5">{service.title}</h1>
                <div id="desc" className="opacity-0">
                  <h1 className="text-center text-2xl  p-5">{service.title}</h1>
                  <p className=" text-xs text-center px-5">{service.description}</p>
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden gap-10 px-10 py-5 ">
        {servicesData.map((service, index) => (
          <div key={index} className="border rounded-lg">
            <div className="h-48 relative rounded-t-lg">
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

      <div className="flex justify-center mt-8">
      <button className="mt-5 border-2 shadow-neumorphic dark:border-accent border-accentLight hover:bg-dark hover:bg-opacity-50 font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Hívjon minket most!</a></button>
      </div>
    </div>
  );
}
