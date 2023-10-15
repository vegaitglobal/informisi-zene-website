import React, {useState} from 'react'
import style from "./CategoriesSelect.module.scss";

export default function CategoriesSelect({options, defaultSelection, onSelectChange = () => {}}) {
    const [localState, setLocalState] = useState(0);

    const onChange = (event) => {
        const selectedValue = event.target.value;

        setLocalState(selectedValue);

        onSelectChange(selectedValue);
    }

    return (
        <select
            className={style.categories}
            value={localState}
            onChange={onChange}
        >
            <option value={0}> 
                {defaultSelection}
            </option>
            {options.map(({id, name}) => <option value={id} key={`option-${id}`}>{name}</option>)}
        </select>
    );
}