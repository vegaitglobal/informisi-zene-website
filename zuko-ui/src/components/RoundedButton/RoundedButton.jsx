import styles from './RoundedButton.module.css'

export default function RoundedButton({label = "Ucitaj jos" , onClick = () => {}}){
    return <button className={styles.button} onClick={onClick} type="button" >{label}</button>
}