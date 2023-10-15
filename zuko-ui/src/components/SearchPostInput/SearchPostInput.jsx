import GeneralHeading from '../GeneralHeading/GeneralHeading';
import styles from './SearchPostInput.module.scss'

export default function SearchPostInput({label = "Pretraga", setQuery}){

    const handleSearch = (e) => {
        const getData = setTimeout(() => {
            setQuery(e.target.value);
        }, 300)

        return () => clearTimeout(getData);
    }
    
    return <div className={styles.container}>
        <GeneralHeading label='Vesti' />
        <p className={styles.title}>{label}</p>
        <input className={styles.search} placeholder={label} type="text" onChange={handleSearch}/>
    </div>
}