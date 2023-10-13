import React from 'react'
import styles from './Footer.module.css'
import FooterSocials from '../FooterSocials/FooterSocials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles['footer-content']}>
        <h3 className={styles['footer-title']}>Prijavite se na bilten</h3>
        <form action="" className={styles['footer-form']}>
            <label htmlFor=""></label>
            <input type="email" id='' placeholder='Vaša mail adresa' className={styles['footer-input']}/>
            <button className={styles['footer-btn']}>
                <img src="/arrow-right.svg" alt="" />
            </button>
        </form>
        <img src="/avioncic.png" alt="paper aeroplane img" className={styles['footer-img']} />
        </div>
        <FooterSocials/>
    </footer>
  )
}

export default Footer