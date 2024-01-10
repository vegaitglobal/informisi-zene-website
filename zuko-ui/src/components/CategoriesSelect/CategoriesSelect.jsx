import React from 'react'
import style from "./CategoriesSelect.module.scss";

export default function CategoriesSelect({options, defaultSelection, onSelectChange = () => {}, selectedCategory}) {

    const onChange = (event) => {
        const selectedValue = event.target.value;
        onSelectChange(selectedValue);
    }

    return (
        <select
            className={style.categories}
            value={selectedCategory}
            onChange={onChange}
        >
            <option value={""}> 
                {defaultSelection}
            </option>
            {options.map(({id, name}) => <option value={id} key={`option-${id}`}>{name}</option>)}
        </select>
    );
}