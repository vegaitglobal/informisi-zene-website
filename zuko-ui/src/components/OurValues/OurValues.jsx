import Value from './../Value/Value';
import style from "./OurValues.module.scss";

export default function OurValues() {
    
    const values = {
        title: "Naše vrednosti",
        data: [
            {
                imageUrl: "/images/odgovornost.svg",
                title: "Odgovornost prema sebi i drugima",
                description: "Doprinosimo razvoju svojih članova prema njihovim ličnim potrebama i kapacitetima."
            },
            {
                imageUrl: "/images/kreativnost.svg",
                title: "Kreativnost",
                description: "Podstičemo i nagrađujemo kreativnost u pronalaženju rešenja za probleme sa kojima se nosi naše društvo."
            },
            {
                imageUrl: "/images/zajednistvo.svg",
                title: "Zajedništvo ",
                description: "Promovišemo važnost zajedništva i moći koju imaju ljudi kada se ujedinjuju oko istih ciljeva."
            },
            {
                imageUrl: "/images/ravnopravnost.svg",
                title: "Ravnopravnost",
                description: "Funkcionišemo na principu jednakih šansi za sve članove društva."
            },
            {
                imageUrl: "/images/priroda.svg",
                title: "Poštovanje prirode ",
                description: "Živimo u skladu sa prirodom, poštujemo je i čuvamo."
            }
        ]
    }

    return (
        <section className={style.ourValues}> 
            <h2>
                {values.title}
            </h2>
            <div className={style.ourValuesContainer}>
                {values?.data && values.data.map((value, index) => <Value {...value} key={`our-value-${index}`}/>)}
            </div>
        </section>
    )
}
