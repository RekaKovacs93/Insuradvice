import Image from "next/image";


export default function Garancia () {
    return (
        <div className="my-40 ">
            <h1 className="lg:text-5xl text-3xl mb-20 text-center">Garancia a biztonságra</h1>
            <p className="text-center lg:mx-20">Az ügyfeleim pénzügyi stabilitása számomra a legfontosabb. Fontosnak tartom, hogy te, mint ügyfelem, biztonságban érezd magad a választott pénzügyi termékekkel kapcsolatban. Biztosra megyek, hogy minden ajánlott termék megfeleljen az általad elvárt stabilitási kritériumoknak, és az esetleges váratlan helyzetekre is gyorsan és hatékonyan reagáljunk. Mindig a legmegfelelőbb termékeket választom ki számodra, és a szerződés megkötése után is, ha bármilyen kérdésed vagy aggályod lenne, mindig számíthatsz rám.</p>

            <div className="shadow-neumorphic-inverse rounded-lg py-10 mt-20 flex flex-col justify-center">
                <h1 className="lg:text-5xl text-3xl mb-20 text-center text-accentLight dark:text-accent">Tájékozódj és dönts tudatosan!</h1>
                <p className="text-center lg:mx-20">Az anyagi döntések meghozatala fontos és felelősségteljes feladat. Azonban ne aggódj, nem vagy egyedül. Én itt vagyok, hogy segítsek neked minden lépésben, hogy biztonságban érezd magad és elérd pénzügyi céljaidat.</p>

            </div>
        </div>
    )
}