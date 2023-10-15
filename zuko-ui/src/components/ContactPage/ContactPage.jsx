import styles from './ContactPage.module.scss'
import ContactForm from '../ContactForm/ContactForm'
import ContactInfo from '../ContactInformation/ContactInformation'

export default function ContactPage(){
    return (
        <div className={styles.wrapper}>
            <ContactForm className={styles.form} />
            <ContactInfo className={styles.text}/>
        </div>
    )
}