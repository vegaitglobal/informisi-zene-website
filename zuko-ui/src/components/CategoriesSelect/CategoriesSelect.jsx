import React, {useState} from 'react'
import style from "./CategoriesSelect.module.scss";

export default function CategoriesSelect({options, defaultSelection}) {
    const [selectedFruit, setSelectedFruit] = useState(0);

    return (
        <select
            className={style.categories}
            value={selectedFruit}
            onChange={e => setSelectedFruit(e.target.value)}
        >
            <option value={0} selected hidden>
                {defaultSelection}
            </option>
            {options.map(({id, name}) => <option value={id} key={`option-${id}`}>{name}</option>)}
        </select>
    );
}