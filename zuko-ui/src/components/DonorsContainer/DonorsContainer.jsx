import style from "./DonorsContainer.module.scss";
import Donor from "../Donator/Donor";

export default function DonorsContainer({data = {}}){
    return (
        <section className={style.donors}>
            <h2 className={style.title}>
                Donatori
            </h2>
            <p className={style.description}>
                Podršku radu udruženja na ostvarivanju ciljeva su kroz projekte i institucionalno pružili:
            </p>

            <div className={style.donorsContainer}>
                {
                    data?.map((el) => (
                        <Donor name={el.name} link={el.website_url} key={el.id} />
                    ))
                }
            </div>
        </section>
    )
}