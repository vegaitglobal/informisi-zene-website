import { useCallback } from 'react';
import GeneralHeading from '../GeneralHeading/GeneralHeading';
import styles from './SearchPostInput.module.scss'
import useDebounce from '../../hooks/useDebounce';

export default function SearchPostInput({label = "Pretraga", setQuery, setCurrentPage}){
    const handleSearch = useCallback(useDebounce((value) => {
        setQuery(value);
        setCurrentPage(1);
    }), []);
    
    return <div className={styles.container}>
        <GeneralHeading label='Vesti' />
        <p className={styles.title}>{label}</p>
        <input className={styles.search} placeholder={label} type="text" onChange={(e) => handleSearch(e.target.value)}/>
    </div>
}