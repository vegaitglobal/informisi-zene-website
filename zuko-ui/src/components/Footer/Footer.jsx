import React, { useRef } from 'react'
import styles from './Footer.module.scss'
import FooterSocials from '../FooterSocials/FooterSocials'
import { subscribeToNewsletter } from '../../services/notification.service'
import { useToast } from '../../hooks/useToast'

const Footer = () => {
    const email = useRef();
    const { successToast } = useToast();
    function handleSubscribe(e) {
        e.preventDefault();
        subscribeToNewsletter(email.current.value);
        successToast("Uspešno ste se prijavili na naš newsletter!");
    }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerContent}>
        <h3 className={styles.footerTitle}>Prijavite se na bilten</h3>
        <form className={styles.footerForm} onSubmit={handleSubscribe}>
            <label htmlFor="newsletter"></label>
            <input ref={email} type="email" id='newsletter' required placeholder='Vaša mail adresa' className={styles.footerInput}/>
            <button className={styles.footerBtn}>
                <img src="/arrow-right.svg" alt="submit to newsletter" />
            </button>
        </form>
        <img src="/avioncic.png" alt="paper aeroplane img" className={styles.footerImg} />
        </div>
        <FooterSocials/>
      </div>
    </footer>
  )
}

export default Footer