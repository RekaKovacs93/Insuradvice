import Tablazat from "./Tablazat";

export default function Nyugdij () {
    return (
        <div id="nyugdij" className="lg:shadow-neumorphic-inverse w-full rounded-lg flex flex-col items-center">
            {/* <h1 className="text-center text-3xl lg:text-5xl lg:px-10 lg:py-5 py-3 lg:my-20 my-10">Pénzügyi termékek fontossága</h1> */}
            <h1 className="text-center text-3xl lg:text-5xl lg:px-10 lg:py-20 py-5 lg:mb-0 mb-5 px-5">Nyugdíjbiztosítás</h1>
            <p className="text-center lg:px-20 lg:mb-10 mb-0">A nyugdíj kérdése sokakat foglalkoztat, és az adatok alapján egyértelműen látszik, hogy ez egy
                komoly probléma, amelyre megoldást kell találnunk. <b className="text-accentLight dark:text-accent">A KSH 2023-as adatai szerint 1485 milliárd
                forint volt a nyugdíjhiány az állami kasszában.</b> Ezek a számok aggasztóak lehetnek, de ne
                feledjük, hogy minden kihívással járó helyzetben rejlik lehetőség is.
                Ahhoz, hogy biztonságos nyugdíjas éveket teremts magadnak és családodnak, fontos, hogy
                időben felkészülj és tedd meg a megfelelő lépéseket. Minél korábban kezded el a megtakarítást,
                annál több pénzt vehetsz majd ki a nyugdíjas éveid alatt! Ebben a folyamatban én, mint
                szakember, támogatlak. Átfogó elemzéssel és személyre szabott tanácsokkal tudok hozzájárulni ahhoz, hogy megtaláld a
            legmegfelelőbb megoldást nyugdíjas éveidre.
            Ne aggódj, nem vagy egyedül ebben a helyzetben, kezdjük el még ma együtt építeni a
            biztonságos jövődet!</p>
            {/* <p className="mb-20 text-center lg:px-20">A nyugdíjbiztosítás egy olyan hosszú távú pénzügyi eszköz, amely garantált jövedelmet nyújt
                nyugdíjas éveidben, és biztosítja, hogy a megtakarított pénz elérhető legyen akkor is, amikor a
                leginkább szükség van rá. Az egyik fő előnye a nyugdíjbiztosításnak az, hogy garantált hozamot kínál, így nem kell aggódnod
                a piaci változások miatt. Ez biztosítja, hogy nyugdíjba vonulásakor tervezhető jövedelmed legyen,
                amelyre számíthatsz. Emellett Magyarországon adókedvezményeket is biztosítanak a
                nyugdíjbiztosítási befizetések után,<b className="text-accentLight dark:text-accent"> az éves befizetéseid 20%-át, de legfeljebb 130.000 Ft-ot </b>
                minden évben pluszban megkaphatsz az egyenlegedre. Adókedvezmény mellé még bónuszok és
                jóváírások formájában is extra összegekhez juthatsz, amik szintén a nyugdíjszámla összegét
                egészíthetik ki.</p> */}

                <div className= "lg:shadow-neumorphic-slim my-10 lg:px-10 py-5 rounded-lg px-5">
                    <h1 className="text-center text-3xl lg:px-10 px-0 lg:py-0 py-3 lg:my-0  text-accentLight dark:text-accent my-10">Nyugdíjbiztosítás előnyei</h1>

                    <ul className="lg:mt-5 text-xl text-center">
                        <li className="mb-2"><p className="inline text-accentLight dark:text-accent lg:text-2xl">&#10003;</p> Inflációt meghaladó hozam</li>
                        <li className="mb-2"><p className="inline text-accentLight dark:text-accent lg:text-2xl">&#10003;</p> Tervezhető jövedelem</li>
                        <li className="mb-2"><p className="inline text-accentLight dark:text-accent lg:text-2xl">&#10003;</p> Akár évi 130.000 Ft adókedvezmény</li>
                        <li className="mb-2"><p className="inline text-accentLight dark:text-accent lg:text-2xl">&#10003;</p> Bónuszok és jóváírások</li>
                    </ul>
                </div>
            <p className="lg:my-10 lg:mb-10 mb-5 text-center lg:px-20 ">Az alábbi táblázatban található a nyugdíjbiztosítások lejárati összege, szerződéskezdeti életkor, illetve havi megtakarítási összeg szerint. (A táblázatban található összegek csak iránymutatóként szolgálnak, részletes és pontos tájékoztatásért személyes konzultáció szükséges, nyugdíjbiztosítás 30 éves kor alatt is indítható)</p>  
        <Tablazat></Tablazat>
        </div>
    )
}