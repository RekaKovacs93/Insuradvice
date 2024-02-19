import Image from 'next/image'

export default function Metodus_copy() {
    return (
        <div className="m-20 w-full">
            <div className="flex w-full h-screen p-20 shadow-neumorphic-inverse rounded-lg items-center">
                <div className='px-20 flex justify-between items-center w-full h-4 shadow-neumorphic-inverse-slim mt-20 rounded-lg'>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolatfelvétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Személyreszabás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Termékelemzés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Ajánlattétel</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Adategyeztetés</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute top-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Aláírás</h1>
                        </div>
                    </div>
                    <div className='relative flex justify-center w-2 h-8 z-2 rounded-full bg-inherit shadow-neumorphic-slim bg-light dark:bg-dark'>
                        <div className="absolute bottom-16 shadow-neumorphic-slim p-5">
                            <h1 className='text-xl text-center text-accentLight dark:text-accent'>Kapcsolattartás</h1>
                        </div>
                    </div>
                </div>
                    {/* <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accent'><b>1</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Kapcsolatfelvétel</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>


                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>2</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Személyreszabás</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>

                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>3</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Termékelemzés</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>

                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>4</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Ajánlattétel</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>

                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>5</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Adategyeztetés</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>

                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>6</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Aláírás</h1>
                        </div>
                    </div> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="var(--accent)" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" transform="rotate(90 10 10)" d="M3 12a1 1 0 0 1 1-1h8.793l-2.147-2.146a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.793 13H4a1 1 0 0 1-1-1z"/>
                    </svg>

                    <div className='flex h-20  justify-center items-center'>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-l-lg p-8 w-12'>
                            <h1 className='text-center text-5xl text-accentLight dark:text-accen'><b>7</b></h1>
                        </div>
                        <div className='flex h-full shadow-neumorphic-slim justify-center items-center rounded-r-lg w-96'>
                            <h1 className='text-xl'>Kapcsolattartás</h1>
                        </div>
                    </div>  */}
                    




            </div>
        </div>
    )
}