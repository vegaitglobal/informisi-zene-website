import styles from './SearchPostInput.module.scss'

export default function SearchPostInput({label = "Pretraga"}){
    return <div>
        <p className={styles.title}>{label}</p>
        <input className={styles.search} placeholder={label} type="text"/>
        </div>
}