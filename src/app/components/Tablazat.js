export default function Tablazat () {
    return(
        <div className="w-full md:mx-20 mb-20">
        <h1 className="text-center text-3xl md:text-5xl md:px-10 md:py-5 py-3 md:my-20 my-10">Nyugdíj megtajarítás</h1>
        <div className="shadow-neumorphic-inverse rounded-lg flex flex-col justify-center">
            
            <table className=" rounded-lg items-center my-10 mx-20">
                <thead className="text-xl text-center">
                <tr className="text-accentLight dark:text-accent">
                    <th></th>
                    <th className="p-5">20.000 Ft / hó</th>
                    <th className="p-5">35.000 Ft / hó</th>
                    <th className="p-5">55.000 Ft / hó</th>
                </tr>
                </thead>
                <tbody className="rounded-lg p-20 text-center">
                <tr className="">
                    <td className="p-2 mb-20 text-accentLight dark:text-accent">30 éves</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-l-lg">32-34 M</td>
                    <td className="p-2 shadow-neumorphic-slim">56-59 M</td>
                    <td className="p-2 mb-2 shadow-neumorphic-slim rounded-r-lg">86-90 M</td>               
                </tr>
                <tr>
                <td className="p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="p-2 text-accentLight dark:text-accent">35 éves</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-l-lg">22-24 M</td>
                    <td className="p-2 shadow-neumorphic-slim">39-42 M</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-r-lg">60-64 M</td>               
                </tr>
                <tr>
                <td className="p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="p-2 text-accentLight dark:text-accent">40 éves</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-l-lg">14-16 M</td>
                    <td className="p-2 shadow-neumorphic-slim">26-29 M</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-r-lg">40-44 M</td>               
                </tr>
                <tr>
                <td className="p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="p-2 text-accentLight dark:text-accent">45 éves</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-l-lg">10-11 M</td>
                    <td className="p-2 shadow-neumorphic-slim">16-19 M</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-r-lg">25-29 M</td>               
                </tr>
                <tr>
                <td className="p-2"> </td>
                </tr>
                <tr className=" rounded-lg">
                    <td className="p-2 text-accentLight dark:text-accent">50 éves</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-l-lg">6-7 M</td>
                    <td className="p-2 shadow-neumorphic-slim">10-12 M</td>
                    <td className="p-2 shadow-neumorphic-slim rounded-r-lg">16-18 M</td>               
                </tr>

                {/* Add more rows as needed */}
                </tbody>
                
            </table>
            <p className="text-center text-sm">6%-os feltételezett hozam, 3%-os értékkövetés és 20% SZJA jóváírás mellett</p>
            <p className="text-center text-xs mb-5"><i>Forrás: nyugdijbiztositas.com</i></p>
        </div>
        </div>
    )
}