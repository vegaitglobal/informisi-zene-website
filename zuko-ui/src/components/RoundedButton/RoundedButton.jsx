import styles from './RoundedButton.module.css'

export default function RoundedButton({label = "Ucitaj jos" , onClick = () => {}, buttonType = "button"}){
    return <button className={styles.button} onClick={onClick} type={buttonType} >{label}</button>
}