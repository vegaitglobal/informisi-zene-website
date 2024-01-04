import { useCallback } from 'react';
import GeneralHeading from '../GeneralHeading/GeneralHeading';
import styles from './SearchPostInput.module.scss'
import useDebounce from '../../hooks/useDebounce';
import MoonLoader from "react-spinners/MoonLoader";

export default function SearchPostInput({label = "Pretraga", setQuery, setCurrentPage, isLoading}){
    const handleSearch = useCallback(useDebounce((value) => {
        setQuery(value);
        setCurrentPage(1);
    }), []);
    
    return <div className={styles.container}>
        <GeneralHeading label='Vesti' />
        <p className={styles.title}>{label}</p>
        <div className={styles.searchHolder}>
            <input className={styles.search} placeholder={label} type="text" onChange={(e) => handleSearch(e.target.value)}/>
            {isLoading &&
                <div className={styles.searchLoader}>
                    <MoonLoader size={20}/>
                </div>
            }
        </div>
    </div>
}