import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-screen">
            {/* Computer Layout */}
            <div className="w-screen relative hidden lg:block items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2020/04/12/18/13/background-5035258_1280.jpg"
                    alt="Geometric Background"
                    layout="responsive"
                    width={2000}
                    height={500}
                    className="opacity-40 inverted-image"
                />
                <div className="absolute w-screen top-0 h-full flex flex-col items-center justify-center radial-gradient">
                    <h1 className="text-center mb-10 text-neumorphic font text-9xl my-5">INSURADVICE</h1>
                    <h1 className="text-center mb-10 text-3xl my-5">Személyes és független pénzügyi tanácsadás</h1>
                     <button className="shadow-neumorphic hover:scale-110 mt-5 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Ingyenes konzultáció</a></button>
                </div>
            </div>
            {/* Mobile and Tablet Layout */}
            <div className="h-screen relative lg:hidden flex items-center">
                <Image
                    src="https://cdn.pixabay.com/photo/2020/04/12/18/13/background-5035258_1280.jpg"
                    alt="Geometric Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40 inverted-image"
                />
                <div className="absolute w-screen top-0 left-0  h-full  flex flex-col items-center justify-center text-center radial-gradient px-14">
                    <h1 className="font text-5xl my-5 mx-5 font">INSURADVICE</h1>
                    <h1 className="text-center mb-10 text-xl my-5">Személyes és független pénzügyi tanácsadás</h1>
                    {/* <p className="text-white text- px-4">Fedezze fel a Mindenkinek Kell Egy Otthon kivételes szolgáltatásait, és találja meg álmai otthonát velünk! Eladná ingatlanát vagy vásárolna? Forduljon hozzánk bizalommal!</p> */}
                    <button className="shadow-neumorphic hover:scale-110 mt-5 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-full transition duration-300"><a href="/#contact">Ingyenes konzultáció</a></button>
                </div>
            </div>

        </div>
    );
}