import Image from 'next/image'

export default function Metodus() {
    return (
        <div className="lg:m-20 lg:w-full">
                <h1 className="text-center text-3xl lg:text-5xl lg:px-10 lg:py-5 py-3 lg:my-20 my-10">A tanácsadás folyamata</h1>

            <div className=" hidden lg:flex lg:flex-col justify-center w-full h-screen px-20 pt-16 pb-40 shadow-neumorphic-inverse rounded-lg items-center">
            <div><p className='text-center lg:mb-40'>Elkötelezett vagyok az iránt, hogy minden ügyfelem számára személyre szabott megoldásokat kínáljak. Független pénzügyi tanácsadóként kapcsolatban állok több, mint 60 pénzügyi szolgáltatóval, így olyan lehetőségeket tudok ajánlani, amelyek teljes mértékben a te igényeidhez vannak igazítva. Az első találkozón felmérjük ezeket az igényeket, majd egy második találkozó alkalmával kiválasztjuk együtt a számodra legmegfelelőbb lehetőségeket. Ezek a konzultációk teljesen ingyenesek és semmilyen rejtett költséggel nem járnak.
            </p></div>
                <div className='lg:px-20 flex flex-col lg:flex-row justify-between items-center w-2 h-full lg:w-full lg:h-4 shadow-neumorphic-inverse-slim mt-20 rounded-lg'>

                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolatfelvétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Személyreszabás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Termékelemzés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Ajánlattétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Adategyeztetés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Aláírás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-8 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolattartás</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" lg:hidden flex justify-center w-screen h-screen px-10 pt-16 pb-40 rounded-lg items-center mb-20">
            {/* <div><p className='text-center lg:mb-40'>Elkötelezett vagyok az iránt, hogy minden ügyfelem számára személyre szabott megoldásokat kínáljak. Független pénzügyi tanácsadóként kapcsolatban állok több, mint 60 pénzügyi szolgáltatóval, így olyan lehetőségeket tudok ajánlani, amelyek teljes mértékben a te igényeidhez vannak igazítva. Az első találkozón felmérjük ezeket az igényeket, majd egy második találkozó alkalmával kiválasztjuk együtt a számodra legmegfelelőbb lehetőségeket. Ezek a konzultációk teljesen ingyenesek és semmilyen rejtett költséggel nem járnak.
            </p></div> */}
                <div className='py-10 flex flex-col justify-between items-center w-2 h-screen  shadow-neumorphic-inverse-slim mt-20 rounded-lg'>

                    <div className='relative flex justify-center items-center w-6 h-2  z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute right-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Kapcsolatfelvétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute left-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Személyreszabás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute right-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Termékelemzés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute left-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Ajánlattétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute right-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Adategyeztetés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute left-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Aláírás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-6 h-2 lg:w-2 lg:h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute right-8 shadow-neumorphic-slim p-2">
                            <h1 className=' text-center text-accentLight dark:text-accent'>Kapcsolattartás</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}