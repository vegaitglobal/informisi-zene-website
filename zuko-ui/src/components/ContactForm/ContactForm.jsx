import { sendEmailNotification } from '../../services/notification.service';
import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './ContactForm.module.scss'
import { useState } from "react";

export default function ContactForm({ heading = "Pišite nam" }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmailNotification(formData);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            title: '',
            message: '',
        });
    };
    return <div className={styles.formContainer}>
        <h2 className={styles.title}>{heading}</h2>
        <form className={styles.wrapper} onSubmit={handleSubmit}>


            <input
                className={styles.input}
                type="text"
                name="name"
                placeholder='Ime'
                value={formData.name}
                onChange={handleInputChange}
                required
            />


            <input
                className={styles.input}
                type="email"
                name="email"
                placeholder='Mail'
                value={formData.email}
                onChange={handleInputChange}
                required
            />

            <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder='Telefon'
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input
                className={styles.input}
                type="text"
                name="title"
                placeholder='Naslov'
                value={formData.title}
                onChange={handleInputChange}
                required
            />
            <textarea
                className={styles.textarea}
                name="message"
                placeholder='Poruka'
                value={formData.message}
                onChange={handleInputChange}
                required
            />
            {isSubmitted && <p>Hvala Vam. Vaša poruka je uspešno poslata!</p>}
            <div className={styles.button}>
                <RoundedButton buttonType='submit' label='Pošalji' />
            </div>
        </form>
    </div>
}
