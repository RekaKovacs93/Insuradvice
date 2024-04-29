import Charts from "./Charts";

export default function Befektetes () {
    return (
        <div id="befektetes">
        <div className="shadow-neumorphic-inverse rounded-lg py-10">
            <h1 className="text-center text-3xl lg:text-5xl mb-10">Befektetés</h1>
            <p className="text-center lg:mb-20 mb-10 lg:px-20">A Concorde Értékpapír Zrt. Magyarország egyik vezető független befektetési szolgáltató társasága, amely széles körű pénzügyi szolgáltatásokat nyújt ügyfeleinek. Tevékenységei közé tartozik az értékpapír-kereskedelem, elemzés, vállalati pénzügyi tanácsadás, tőkepiaci tranzakciók szervezése, vagyonkezelés és befektetési tanácsadás.
 Az alábbi táblázatok a szemléletes példái annak, hogy az elmúlt 5-10 éven milyen hozamokat produkáltak a különböző portfóliók a Concorde alapkezőinél. Az információk, amiket a hozamábrák tartalmaznak, nem spekulációk, hanem múltbéli valós események alapján kerültek kiszámításra.</p>

            <Charts></Charts>

            <p className="text-center lg:mb-20 mb-10 px-20"></p>

            <div className="flex justify-center mb-20">
            <button className="shadow-neumorphic hover:scale-110 border dark:border-accent border-accentLight bg-light dark:bg-dark font-bold py-2 px-4 rounded-lg transition duration-300 w-64"><a href="/#contact">Tudj meg többet</a></button>

            </div>
        </div>
        <div className="flex gap-5 items-center justify-center my-20">
        <div className="shadow-neumorphic-slim rounded-full w-4 h-4"></div>
        <div className="shadow-neumorphic-slim rounded-full w-4 h-4"></div>
        <div className="shadow-neumorphic-slim rounded-full w-4 h-4"></div>
    </div>
        </div>

    )
}