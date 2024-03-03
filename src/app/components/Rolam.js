import Image from "next/image";

export default function Rolam() {
  return (
  <div>
    <div className="lg:flex w-screen block my-40">
      <div className="lg:w-2/5 lg:mx-20 justify-center">
        <h1 className="text-6xl lg:mb-0 mb-20 hidden lg:block">Vadász Róbert</h1>
      </div>
      <div className="lg:mx-40 mx-10 lg:w-3/5 flex flex-col justify-center items-center shadow-neumorphic-inverse lg:p-20 p-5 rounded-lg">
        <p className="text-3xl text-center mb-10">Üdvözöllek az Insuradvice honlapján!</p>
        <p className="lg:text-xl text-center">Ha itt vagy, akkor valószínűleg te is feltetted már magadnak az alábbi kérdéseket: 
        <b>&quot;Hogyan kezeljem tudatosan pénzügyeimet?</b>
        &quot; Vagy talán még ennél is fontosabb: 
        <b>&quot;Hogyan készüljek fel a jövő váratlan eseményeire?&quot;</b>
        E kérdésekre tudom a megoldást, mindössze annyi a dolgunk, hogy ezt személyre szabjam a Te igényeid szerint és együtt megtaláljuk a legjobb opciót.</p>
                   
        <p className="lg:text-xl text-center">Engedd meg, hogy bemutatkozzam: Vadász Róbert vagyok, a te személyes és független pénzügyi tanácsadód. Célom, hogy átláthatóvá és kiszámíthatóvá tegyem anyagi lehetőségeidet és elkalauzoljalak egy olyan világba, ahol biztonságban érezheted magad, tudva, hogy pénzügyeid jól vannak kezelve.</p>
        <button className="mt-10 shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Tudj meg többet</a></button>
      </div>
    </div>

  </div>
  );
}
