import Image from "next/image";

export default function Rolam() {
  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center justify-between h-screen px-8 text-center">
        {/* <div className="text-center px-8 my-16"> */}
          <h1 className="text-3xl mt-20">
          Miben vagyunk mások, mint a többi ingatlanközvetítő cég?
          </h1>
          <p className="text-sm mb-5">
          A csapatunk több évtizedes sikeres szakmai múlttal rendelkeznek. Biztosak vagyunk benne, hogy az Ön ingatlanát is el fogjuk adni, <b>ezért az ehhez szükséges extra szolgáltatások költségét megelőlegezzük leendő jutalékunk terhére.</b> Vevőink számára küldetésünk, hogy megtaláljuk azt az otthont, amely tökéletesen illeszkedik álmaikhoz és igényeikhez. Egyedi szolgáltatásainkkal és szakértelmünkkel azon dolgozunk, hogy az ingatlanvásárlás folyamata ne csak hatékony, de örömteli és megnyugtató élmény legyen számukra. Várjuk, hogy segíthessünk Önnek is az ideális otthon megtalálásában!
          </p>
          <div className="flex justify-center mb-20 gap-x-5">
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./elado">Eladó vagyok</a>
            </button>
            <button className="border-2 border-darkgrey hover:bg-black hover:bg-opacity-25 text-grey font-bold py-2 px-4 rounded-full transition duration-300">
              <a href="./vevo">Vevő vagyok</a>
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center min-h-screen mt-20">
        <div className=" mx-20 px-8 py-10 justify-center flex flex-col">
          <h1 className="text-3xl text-center mb-12">
          Üdvözöllek a weboldalamon
          </h1>
          <p className="text-lg text-center">
          Vadász Róbert vagyok, a TE személyes és független pénzügyi tanácsadód
          </p>
          <p className="text-lg text-center">Szeretnélek elkalauzolni egy olyan világba, amiről lehetséges, hogy eddig csak ábrándoztál, de az is előfordulhat, hogy a fejedben már megszületett egyfajta döntés, hogy tudatosan kezeld a pénzügyeidet</p>
          <button className="shadow-neumorphic hover:scale-125 mt-5 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Tudj meg többet</a></button>
          
        </div>
        {/* <div className="relative flex justify-end">
          <div className="relative aspect-w-6 aspect-h-4 items-right">
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center radial-gradient">
            <Image
            src="https://cdn.pixabay.com/photo/2021/05/06/12/39/hexagon-6233333_1280.jpg"
            alt="image of bedroom"
            width={2000} // Add width here
            height={800} // Add height here
            className="inverted-image bw-image radial-gradient opacity-10"
            />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
