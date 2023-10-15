import ContactForm from '../ContactForm/ContactForm'
import ContactInformation from '../ContactInformation/ContactInformation'
import styles from './ContactPageComponent.module.scss'


export default function ContactPageComponent({}){
    return <div className={styles.wrapper}>
        <div className={styles.form}>
            <ContactForm/>
        </div>
        <div className={styles.text}>
            <ContactInformation/>
        </div>
    </div>
}