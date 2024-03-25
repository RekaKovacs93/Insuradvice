import Image from "next/image";

export default function Rolam() {
  return (
  <div>
    <div className="lg:flex w-screen block lg:my-40 mt-20 mb-10 items-center justify-center">
      <div className=" justify-center rounded-lg ml-10 border-2 dark:border-accent border-accentLight">
        {/* <h1 className="text-6xl lg:mb-0 mb-20 hidden lg:block"></h1> */}
        <Image
          src="/Robi.jpg"
          alt="Vadász Róbert Fotója"
          width={600}
          height={600}
          className="rounded-lg bw-image "
        />
      </div>
      <div className=" mx-10 lg:w-3/5 flex flex-col justify-center items-center lg:p-10 p-5 rounded-lg">
        <p className="text-3xl text-center mb-10">Üdvözöllek az Insuradvice honlapján!</p>
        <p className="lg:text-xl text-center">Ha itt vagy, akkor valószínűleg te is feltetted már magadnak az alábbi kérdéseket:</p> 
        <i className="lg:text-xl text-center">&quot;Hogyan kezeljem tudatosan pénzügyeimet?&quot;</i>
        <p className="lg:text-xl text-center">Vagy talán még ennél is fontosabb:</p> 
        <i className="lg:text-xl text-center">&quot;Hogyan készüljek fel a jövő váratlan eseményeire?&quot;</i>
        <p className="lg:text-xl text-center mb-5">E kérdésekre tudom a megoldást, mindössze annyi a dolgunk, hogy ezt személyre szabjam a Te igényeid szerint és együtt megtaláljuk a legjobb opciót.</p>
                   
        <p className="lg:text-xl text-center">Engedd meg, hogy bemutatkozzam: Vadász Róbert vagyok, a te személyes és független pénzügyi tanácsadód. Célom, hogy átláthatóvá és kiszámíthatóvá tegyem anyagi lehetőségeidet és elkalauzoljalak egy olyan világba, ahol biztonságban érezheted magad, tudva, hogy pénzügyeid jól vannak kezelve.</p>
        <button className="mt-10 shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-lg transition duration-300 w-64 active:shadow-neumorphic-inverse"><a href="/#contact">Tudj meg többet</a></button>
      </div>
    </div>

  </div>
  );
}
