import styles from './ContactInformation.module.scss'

const dataZUKOHeading = 'Podaci udruženja'
const namePropery1 = 'Naziv'
const namePropery2 = 'Adresa'
const namePropery3 = 'Mail'
const defaultText1 = 'Žensko udruženje kolubarskog okruga'
const defaultText2 = 'Kolubarska 22 \n11563 Veliki Crljen \nSrbija'
const defaultText3 = 'zenekolubara@yahoo.com'
export default function ContactInformation({text1 = defaultText1,text2 = defaultText2, text3 = defaultText3}){
    return <div className={styles.wrapper}>
                    <h2 className={styles.title}>{dataZUKOHeading}</h2>
                <div className={styles.wrapperElement}>
                    <p className={styles.namePropery}>{namePropery1}</p>
                    <p className={styles.text}>{text1}</p>
                </div>
                <div className={styles.wrapperElement}>
                    <p className={styles.namePropery}>{namePropery2}</p>
                    <p className={styles.text}>{text2}</p>
                    </div>
                <div className={styles.wrapperElement}>
                    <p className={styles.namePropery}>{namePropery3}</p>
                    <p className={styles.text}>{text3}</p>
                </div>
            </div>
}