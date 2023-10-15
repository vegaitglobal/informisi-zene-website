import React from 'react'
import style from "./OpportunitiesHero.module.scss";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

export default function OpportunitiesHero() {
    const option = [
        {
            "id": 1,
            "name": "KOJI JE MOJ DEO?"
        },
        {
            "id": 2,
            "name": "ANALIZA"
        },
        {
            "id": 3,
            "name": "ACT"
        }
    ]

    return (
        <div className={style.hero}>
            <h2 className={style.title}>
                Prilike za žene
            </h2>

            <h3 className={style.subtitle}>
                Sortiraj po projektu
            </h3>
            <div className={style.categoriesContainer}>
                <CategoriesSelect options={option} defaultSelection="Svi projekti" />
            </div>
            
        </div>
    );
}