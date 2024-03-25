export default function Tablazat () {
    return(
        <div className="lg:w-full lg:mx-40 mx-10 mb-20">
                <div className="lg:w-full px-5 lg:px-0 shadow-neumorphic-inverse rounded-lg flex flex-col justify-center items-center">
            
            <table className="rounded-lg items-center w-4/5 my-10 lg:mx-20 justify-center">
                <thead className="text-xl text-center">
                <tr className="text-accentLight dark:text-accent">
                    <th></th>
                    <th className="lg:p-5 p-2">20.000 Ft / hó</th>
                    <th className="lg:p-5 p-2">35.000 Ft / hó</th>
                    <th className="lg:p-5 p-2">55.000 Ft / hó</th>
                </tr>
                </thead>
                <tbody className="rounded-lg lg:p-20 text-center">
                <tr className="">
                    <td className="lg:p-2 pr-2 mb-20 text-accentLight dark:text-accent">30 éves</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-l-lg">32-34 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim">56-59 M</td>
                    <td className="lg:p-2 mb-2 shadow-neumorphic-slim rounded-r-lg">86-90 M</td>               
                </tr>
                <tr>
                <td className="lg:p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="lg:p-2 pr-2 mb-20 text-accentLight dark:text-accent">35 éves</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-l-lg">22-24 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim">39-42 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-r-lg">60-64 M</td>               
                </tr>
                <tr>
                <td className="lg:p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="lg:p-2 text-accentLight dark:text-accent">40 éves</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-l-lg">14-16 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim">26-29 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-r-lg">40-44 M</td>               
                </tr>
                <tr>
                <td className="lg:p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="lg:p-2 pr-2 text-accentLight dark:text-accent">45 éves</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-l-lg">10-11 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim">16-19 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-r-lg">25-29 M</td>               
                </tr>
                <tr>
                <td className="lg:p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="lg:p-2 pr-2 text-accentLight dark:text-accent">50 éves</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-l-lg">6-7 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim">10-12 M</td>
                    <td className="lg:p-2 shadow-neumorphic-slim rounded-r-lg">16-18 M</td>               
                </tr>


                </tbody>
                
            </table>
            <p className="text-center lg:text-sm text-xs lg:mx-10">6%-os feltételezett hozam, 3%-os értékkövetés és 20% SZJA jóváírás mellett</p>
            <p className="text-center lg:text-xs text-2xs mb-5"><i>Forrás: nyugdijbiztositas.com</i></p>
        </div>
        <p className="my-20 text-center px-20">Átfogó elemzéssel és személyre szabott tanácsokkal tudok hozzájárulni ahhoz, hogy megtaláld a
            legmegfelelőbb megoldást nyugdíjas éveidre.
            Ne aggódj, nem vagy egyedül ebben a helyzetben, kezdjük el még ma együtt építeni a
            biztonságos jövődet!</p>
        <div className="flex justify-center">
        <button className=" shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-lg transition duration-300 w-64"><a href="/#contact">Tudj meg többet</a></button>
        </div>
        </div>
    )
}