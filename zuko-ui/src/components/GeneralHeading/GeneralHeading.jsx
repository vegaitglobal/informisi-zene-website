import styles from './GeneralHeading.module.scss'

export default function GeneralHeading({label = "HEADING MISSING"}){
    return <h1 className={styles.heding}>{label}</h1>
}