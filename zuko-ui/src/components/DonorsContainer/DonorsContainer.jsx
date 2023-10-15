import {useState, useEffect} from "react";
import style from "./DonorsContainer.module.scss";
import Donor from "../Donator/Donor";

export default function DonorsContainer(){
    const [donors, setDonors] = useState([])

    useEffect(() => {
        setDonors(mockDonors);
    }, [])
    
    const mockDonors = [
        {
            "id":1,
            "name":"Program Ujedinjenih nacija za razvoj, UNDP",
            "website_url":"https://example.com/"
        },
        {
            "id":2,
            "name":"Agencija Ujedinjenih nacija za rodnu ravnopravnost i osnaživanje žena u Srbiji (UN Women)",
            "website_url":"https://example.com/"
        },
        {
            "id":3,
            "name":"Međunarodna organizacija za migracije, IOM",
            "website_url":"https://example.com/"
        }
    ]

    return (
        <section className={style.donors}>
            <h2 className={style.title}>
                Donatori
            </h2>
            <p className={style.description}>
                Podršku radu udruženja na ostvarivanju ciljeva su kroz projekte i institucionalno pružili:
            </p>

            <div className={style.donorsContainer}>
                {donors.map(({id, name, website_url}) => <Donor name={name} link={website_url} key={`donor-${id}`}/>)}
            </div>
        </section>
    )
}