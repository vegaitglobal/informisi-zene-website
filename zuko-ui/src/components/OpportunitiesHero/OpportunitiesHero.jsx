import React from 'react'
import style from "./OpportunitiesHero.module.scss";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import GeneralHeading from './../GeneralHeading/GeneralHeading';

export default function OpportunitiesHero({list = [], onSelectChange = () => {} }) {


    return (
        <div className={style.hero}>
            <GeneralHeading label='Prilike za žene'/>

            <h3 className={style.subtitle}>
                Sortiraj po projektu
            </h3>
            <div className={style.categoriesContainer}>
                <CategoriesSelect options={list} defaultSelection="Svi projekti" onSelectChange={onSelectChange} />
            </div>
            
        </div>
    );
}