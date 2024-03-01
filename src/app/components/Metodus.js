import Image from 'next/image'

export default function Metodus() {
    return (
        <div className="m-20 w-full">
                <h1 className="text-center text-3xl md:text-5xl md:px-10 md:py-5 py-3 md:my-20 my-10">A tanácsadás folyamata</h1>

            <div className="flex flex-col justify-center w-full h-auto px-20 pt-16 pb-40 shadow-neumorphic-inverse rounded-lg items-center">
            <div><p className='text-center md:mb-40'>Elkötelezett vagyok az iránt, hogy minden ügyfelem számára személyre szabott megoldásokat kínáljak. Független pénzügyi tanácsadóként kapcsolatban állok több, mint 60 pénzügyi szolgáltatóval, így olyan lehetőségeket tudok ajánlani, amelyek teljes mértékben a te igényeidhez vannak igazítva. Az első találkozón felmérjük ezeket az igényeket, majd egy második találkozó alkalmával kiválasztjuk együtt a számodra legmegfelelőbb lehetőségeket. Ezek a konzultációk teljesen ingyenesek és semmilyen rejtett költséggel nem járnak.
            </p></div>
                <div className='md:px-20 flex flex-col md:flex-row justify-between items-center w-2 h-full md:w-full md:h-4 shadow-neumorphic-inverse-slim mt-20 rounded-lg'>

                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolatfelvétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Személyreszabás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Termékelemzés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Ajánlattétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Adategyeztetés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Aláírás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 md:w-2 md:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolattartás</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}