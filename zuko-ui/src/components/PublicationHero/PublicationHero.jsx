import React from 'react'
import style from "./PublicationHero.module.scss";
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import GeneralHeading from './../GeneralHeading/GeneralHeading';

export default function PublicationHero({list = [], onSelectChange = () => {} }) {
    return (
        <div className={style.hero}>
            <GeneralHeading label='Publikacije'/>

            <h3 className={style.subtitle}>
                Sortiraj po vrsti
            </h3>
            <div className={style.categoriesContainer}>
                <CategoriesSelect options={list} defaultSelection="Sve vrste" onSelectChange={onSelectChange} />
            </div>
        </div>
    );
}