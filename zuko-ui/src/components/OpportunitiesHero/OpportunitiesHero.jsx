import React from 'react'
import style from "./OpportunitiesHero.module.scss";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";

export default function OpportunitiesHero({list = [], onSelectChange = () => {} }) {


    return (
        <div className={style.hero}>
            <h2 className={style.title}>
                Prilike za žene
            </h2>

            <h3 className={style.subtitle}>
                Sortiraj po projektu
            </h3>
            <div className={style.categoriesContainer}>
                <CategoriesSelect options={list} defaultSelection="Svi projekti" onSelectChange={onSelectChange} />
            </div>
            
        </div>
    );
}