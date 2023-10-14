import styles from './ContactInformation.module.scss'

const dataZUKOHeading = 'Podaci udruženja'
const namePropery1 = 'Naziv'
const namePropery2 = 'Adresa'
const namePropery3 = 'Mail'
const text1 = 'Žensko udruženje kolubarskog okruga'
const text2 = 'Kolubarska 22 \n11563 Veliki Crljen \nSrbija'
const text3 = 'zenekolubara@yahoo.com'
export default function ContactInformation({testProperty = "default value"}){
    return <div>
                <h2 className={styles.title}>{dataZUKOHeading}</h2>
                <p className={styles.namePropery}>{namePropery1}</p>
                <p className={styles.text}>{text1}</p>
                <p className={styles.namePropery}>{namePropery2}</p>
                <p className={styles.text}>{text2}</p>
                <p className={styles.namePropery}>{namePropery3}</p>
                <p className={styles.text}>{text3}</p>
            </div>
}