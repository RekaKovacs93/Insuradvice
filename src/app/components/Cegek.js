import Image from "next/image"


export default function Cegek () {
    return (
        <div>
            {/* <h1 className="md:text-5xl text-3xl my-10 text-center">Partner cégek</h1> */}
            <div className="lg:flex hidden flex-wrap shadow-neumorphic-inverse mt-20 lg:gap-20 gap-5 lg:px-5 w-screen items-center justify-center">

            <Image
                src="/signal.svg"
                alt="signal"
                width={100}
                height={50}
                className="filter scale-10 lg:scale-100"
                
            />
            <Image
                src="/CIG.svg"
                alt="cig"
                width={200}
                height={50}
                className="filter pt-3 scale-10 lg:scale-100"
                
            />
            <Image
                src="/NN.svg"
                alt="nn"
                width={100}
                height={50}
                className="filter scale-20 lg:scale-100"
                
            />
            <Image
                src="/Metlife.svg"
                alt="metlife"
                width={100}
                height={50}
                className="filter scale-20 lg:scale-100"
                
            />
            <Image
                src="/union.svg"
                alt="union"
                width={150}
                height={50}
                className="filter scale-10 lg:scale-100"
                
            />
            <Image
                src="/generali.svg"
                alt="generali"
                width={100}
                height={50}
                className="filter scale-50 lg:scale-100"
                
            />


            

            </div>
            <div className="lg:hidden flex flex-wrap shadow-neumorphic-inverse gap-5 w-screen items-center justify-center">

<Image
    src="/signal.svg"
    alt="signal"
    width={40}
    height={20}
    className="filter"
    
/>
<Image
    src="/CIG.svg"
    alt="cig"
    width={40}
    height={20}
    className="filter pt-3 "
    
/>
<Image
    src="/NN.svg"
    alt="nn"
    width={40}
    height={20}
    className="filter"
    
/>
<Image
    src="/Metlife.svg"
    alt="generali"
    width={40}
    height={20}
    className="filter"
/>
<Image
    src="/union.svg"
    alt="union"
    width={40}
    height={20}
    className="filter"
    
/>
<Image
    src="/generali.svg"
    alt="generali"
    width={40}
    height={20}
    className="filter"
    
/>




</div>
        </div>
    )
}