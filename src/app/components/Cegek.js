import Image from "next/image"


export default function Cegek () {
    return (
        <div>
            {/* <h1 className="md:text-5xl text-3xl my-10 text-center">Partner cégek</h1> */}
            <div className="lg:flex hidden flex-wrap shadow-neumorphic-inverse mt-20 lg:gap-20 gap-5 lg:px-5 lg:py-5 w-screen items-center justify-center">

            <Image
                src="/signal.jpeg"
                alt="signal"
                width={200}
                height={50}
                className=" scale-10 lg:scale-100"
                
            />
            
            <Image
                src="/uniqua.svg"
                alt="uniqua"
                width={80}
                height={50}
                className=" scale-20 lg:scale-100"
                
            />

            <Image
                src="/union.jpeg"
                alt="union"
                width={150}
                height={50}
                className=" scale-10 lg:scale-100"
                
            />
            <Image
                src="/generali.jpeg"
                alt="generali"
                width={70}
                height={70}
                className=" scale-50 lg:scale-100"
                
            />
            <Image
                src="/metlife.jpeg"
                alt="metlife"
                width={100}
                height={50}
                className=" scale-20 lg:scale-100"
                
            />
            <Image
                src="/cig.jpeg"
                alt="cig"
                width={200}
                height={50}
                className=" scale-10 lg:scale-100"
                
            />


            

            </div>
            <div className="lg:hidden flex flex-wrap shadow-neumorphic-inverse gap-5 w-screen items-center py-3 justify-center">

<Image
    src="/signal.jpeg"
    alt="signal"
    width={40}
    height={20}
    className=""
    
/>


<Image
    src="/metlife.jpeg"
    alt="generali"
    width={40}
    height={20}
    className=""
/>
<Image
    src="/union.jpeg"
    alt="union"
    width={40}
    height={20}
    className=""
    
/>
<Image
    src="/generali.jpeg"
    alt="generali"
    width={20}
    height={20}
    className=""
    
/>

<Image
    src="/uniqua.svg"
    alt="uniqua"
    width={30}
    height={20}
    className=""  
/>

<Image
    src="/cig.jpeg"
    alt="cig"
    width={40}
    height={20}
    className=" "
    
/>




</div>
        </div>
    )
}