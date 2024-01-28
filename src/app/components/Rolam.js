import Image from "next/image";

export default function Rolam() {
  return (
  <div>
    <div className="md:flex w-screen block my-40">
      <div className="md:w-2/5 md:mx-40">
        <h1 className="text-6xl md:mb-0 mb-20 hidden md:block">Vadász Róbert</h1>
      </div>
      <div className="md:mx-40 mx-10 md:w-3/5 flex flex-col justify-center items-center">
        <p className="text-3xl text-center mb-10">Üdvözöllek a weboldalamon!</p>
        <p className="text-xl text-center">Szeretnélek elkalauzolni egy olyan világba, amiről lehetséges, hogy eddig csak ábrándoztál, de az is előfordulhat, hogy a fejedben már megszületett egyfajta döntés, hogy tudatosan kezeld a pénzügyeidet. Megígérek egy valamit biztosan, mégpedig azt, hogy minden kérdésedre választ tudok adni, amire eddig nem kaptál, valamint azt is, hogy a legjobb szakértői kezekben leszel nem csak a szerződés aláírásáig, hanem azután is, amennyiben úgy döntesz, hogy velem szeretnél együttműködni.</p>
        <button className="mt-10 shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Tudj meg többet</a></button>
      </div>
    </div>

  </div>
  );
}
