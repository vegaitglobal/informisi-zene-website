import React from 'react'
import styles from './Footer.module.scss'
import FooterSocials from '../FooterSocials/FooterSocials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerContent}>
        <h3 className={styles.footerTitle}>Prijavite se na bilten</h3>
        <form action="" className={styles.footerForm}>
            <label htmlFor="newsletter"></label>
            <input type="email" id='newsletter' placeholder='Vaša mail adresa' className={styles.footerInput}/>
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