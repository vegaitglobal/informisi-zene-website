import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './ContactForm.module.scss'
import { useState } from "react";

export default function ContactForm({ heading = "Pišite nam" }) {
    const [formData, setFormData] = useState({
        ime: '',
        mail: '',
        telefon: '',
        naslov: '',
        poruka: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data:', formData);
        // You can send the form data to an API endpoint or perform any other actions here
    };
    return <div className={styles.formContainer}>
        <h2 className={styles.title}>{heading}</h2>
        <form className={styles.wrapper} onSubmit={handleSubmit}>


                <input
                    className={styles.input}
                    type="text"
                    name="ime"
                    placeholder='Ime'
                    value={formData.ime}
                    onChange={handleInputChange}
                    required
                />


                <input
                    className={styles.input}
                    type="email"
                    name="mail"
                    placeholder='Mail'
                    value={formData.mail}
                    onChange={handleInputChange}
                    required
                />

                <input
                    className={styles.input}
                    type="tel"
                    name="telefon"
                    placeholder='Telefon'
                    value={formData.telefon}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className={styles.input}
                    type="text"
                    name="naslov"
                    placeholder='Naslov'
                    value={formData.naslov}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    className={styles.textarea}
                    name="poruka"
                    placeholder='Poruka'
                    value={formData.poruka}
                    onChange={handleInputChange}
                    required
                />
                <div className={styles.button}>
            <RoundedButton buttonType='submit' label='Pošalji'/>
            </div>
        </form>
    </div>
}