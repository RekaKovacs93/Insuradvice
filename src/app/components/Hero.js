import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-screen">
            {/* Computer Layout */}
            <div className="w-screen relative hidden md:block items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_1280.jpg"
                    alt="Interior Photo"
                    layout="responsive"
                    width={2000}
                    height={500}
                    className="opacity-10"
                />
                <div className="absolute w-screen top-0 h-full flex flex-col items-center justify-center p-12">
                    <h1 className="text-center text-3xl mb-10"><b>Üdvözöljük az <h1 className="font text-6xl my-5">INSURADVICE</h1> honlapján!</b></h1>
                    <button className="mt-5 border-2 dark:border-accent border-accentLight hover:bg-dark hover:bg-opacity-50 font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Hívjon minket most!</a></button>
                </div>
            </div>
            {/* Mobile and Tablet Layout */}
            <div className="h-screen relative md:hidden flex items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2016/06/24/11/49/architecture-1477103_1280.jpg"
                    alt="Interior Photo"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex flex-col items-center justify-center text-center px-14">
                    <h1 className="text-white text-3xl mb-6"><b>Üdvözöljük a Mindenkinek Kell Egy Otthon honlapján!</b></h1>
                    <p className="text-white text- px-4">Fedezze fel a Mindenkinek Kell Egy Otthon kivételes szolgáltatásait, és találja meg álmai otthonát velünk! Eladná ingatlanát vagy vásárolna? Forduljon hozzánk bizalommal!</p>
                    <button className="mt-6 border border-white hover:bg-white hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        <a href="/#contact">Hívjon minket most!</a>
                    </button>
                </div>
            </div>

        </div>
    );
}