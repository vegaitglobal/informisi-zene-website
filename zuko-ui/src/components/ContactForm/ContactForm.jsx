import { useToast } from '../../hooks/useToast';
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const {successToast} = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmailNotification(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            title: '',
            message: '',
        });
        successToast('Vaša poruka je uspešno poslata!');
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
                required
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
            <div className={styles.button}>
                <RoundedButton buttonType='submit' label='Pošalji' />
            </div>
        </form>
    </div>
}
