import Image from "next/image"


export default function Cegek () {
    return (
        <div>
            {/* <h1 className="md:text-5xl text-3xl my-10 text-center">Partner cégek</h1> */}
            <div className="flex shadow-neumorphic-inverse my-20 gap-20 px-5 w-screen items- justify-center">

            <Image
                src="/signal.svg"
                alt="generali"
                width={100}
                height={50}
                className="filter"
                
            />
            <Image
                src="/CIG.svg"
                alt="generali"
                width={200}
                height={50}
                className="filter pt-3"
                
            />
            <Image
                src="/NN.svg"
                alt="generali"
                width={100}
                height={50}
                className="filter"
                
            />
            <Image
                src="/Metlife.svg"
                alt="generali"
                width={100}
                height={50}
                className="filter"
                
            />
            <Image
                src="/union.svg"
                alt="generali"
                width={150}
                height={50}
                className="filter"
                
            />
            <Image
                src="/generali.svg"
                alt="generali"
                width={100}
                height={50}
                className="filter"
                
            />


            

            </div>
        </div>
    )
}