import Image from "next/image"

export default function Charts () {
    return (
        <div className="flex flex-wrap gap-10 justify-center lg:p-10 p-5 rounded-lg">

            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl px-4 text-accentLight dark:text-accent">Mozaik</h1>
                        <p className="text-sm px-4 pb-4"> (2023-as hozam: +21%)</p>
                    </div>
                    <div className="lg:block hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 8.7%</p>
                        <p className="text-sm px-4">5 éves szórás: 5.03%</p>
                    </div>
                </div>
                <div className="shadow-neumorphic-slim rounded-lg relative">
                <Image
                    alt="chart"
                    src="/Mozaik1.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg"
                />
                <Image
                    alt="chart"
                    src="/Mozaik2.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg absolute top-0 filter"
                />

                </div>
                <div className="lg:hidden py-4 text-right">
                        <p className="text-xs px-4">5 éves hozam évesítve: 8.7%</p>
                        <p className="text-xs px-4">5 éves szórás: 5.03%</p>
                    </div>
                
            </div>

            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl px-4 text-accentLight dark:text-accent">Harmonikus</h1>
                        <p className="text-sm px-4 pb-4"> (2023-as hozam: +15.4%)</p>
                    </div>
                    <div className="lg:block hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 8.7%</p>
                        <p className="text-sm px-4">5 éves szórás: 5.12%</p>
                    </div>
                </div>
                <div className="shadow-neumorphic-slim rounded-lg relative">
                <Image
                    alt="chart"
                    src="/Harmonikus1.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg "
                />
                <Image
                    alt="chart"
                    src="/Harmonikus2.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg absolute top-0 filter"
                />
                
                </div>
                <div className="lg:hidden  py-4 text-right">
                        <p className="text-xs px-4">5 éves hozam évesítve: 8.7%</p>
                        <p className="text-xs px-4">5 éves szórás: 5.12%</p>
                    </div>
            </div>


            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl px-4 text-accentLight dark:text-accent">Dinamikus</h1>
                        <p className="text-sm px-4 pb-4"> (2023-as hozam: +19%)</p>
                    </div>
                    <div className="lg:block hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 10.1%</p>
                        <p className="text-sm px-4">5 éves szórás: 7.05%</p>
                    </div>
                </div>
                <div className="shadow-neumorphic-slim rounded-lg relative">
                <Image
                    alt="chart"
                    src="/Dinamikus1.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg "
                />
                <Image
                    alt="chart"
                    src="/Dinamikus2.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg absolute top-0 filter"
                />
                
                </div>
                <div className="lg:hidden py-4 text-right">
                        <p className="text-xs px-4">5 éves hozam évesítve: 10.1%</p>
                        <p className="text-xs px-4">5 éves szórás: 7.05%</p>
                    </div>
                
            </div>

            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl px-4 text-accentLight dark:text-accent">Jövő Generációi</h1>
                        <p className="text-sm px-4 pb-4"> (2023-as hozam: +12.2%)</p>
                    </div>
                    <div className="lg:block hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 14.5%</p>
                        <p className="text-sm px-4">5 éves szórás: 14.61%</p>
                    </div>
                </div>
                <div className="shadow-neumorphic-slim rounded-lg relative">
                <Image
                    alt="chart"
                    src="/JovGen1.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg "
                />
                <Image
                    alt="chart"
                    src="/JovGen2.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg absolute top-0 filter"
                />
                
                </div>
                <div className="lg:hidden py-4 text-right">
                    <p className="text-xs px-4">5 éves hozam évesítve: 14.5%</p>
                    <p className="text-xs px-4">5 éves szórás: 14.61%</p>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl px-4 text-accentLight dark:text-accent">Jövő Technológiái</h1>
                        <p className="text-sm px-4 pb-4"> (2023-as hozam: +16.5%)</p>
                    </div>
                    <div className="lg:block hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 22.1%</p>
                        <p className="text-sm px-4">5 éves szórás: 17.22%</p>
                    </div>
                </div>
                <div className="shadow-neumorphic-slim rounded-lg relative">
                <Image
                    alt="chart"
                    src="/JovTech1.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg "
                />
                <Image
                    alt="chart"
                    src="/JovTech2.svg"
                    width={550}
                    height={300}
                    className=" p-5 rouded-lg absolute top-0 filter"
                />
                
                </div>
                <div className="lg:hidden py-4 text-right">
                        <p className="text-sm px-4">5 éves hozam évesítve: 22.1%</p>
                        <p className="text-sm px-4">5 éves szórás: 17.22%</p>
                    </div>
            </div>
        </div>
    )
}