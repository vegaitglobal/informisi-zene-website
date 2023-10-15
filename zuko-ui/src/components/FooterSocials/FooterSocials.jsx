import React from 'react'
import SocialItem from '../SocialItem/SocialItem'
import styles from './FooterSocials.module.scss'

const socialsList = [
    {
        linkUrl: 'https://www.instagram.com',
        socialImg: '/instagram.svg',
        socialAlt: 'instagram'
    },
    {
        linkUrl: 'https://www.tiktok.com',
        socialImg: '/tiktok.svg',
        socialAlt: 'tiktok'
    },
    {
        linkUrl: 'https://www.facebook.com',
        socialImg: '/facebook.svg',
        socialAlt: 'facebook'
    },
    {
        linkUrl: 'https://www.twitter.com',
        socialImg: '/twitter.svg',
        socialAlt: 'twitter'
    }
]

const FooterSocials = () => {
  return (
    <div>
        <h3 className={styles.socialsTitle}>Pratite nas</h3>
        <ul className={styles.socialsList}>
            {socialsList.map((socialItem, index) => (
                <SocialItem socialItem={socialItem} key={`footer-socials-${index}`}/>
            ))}
        </ul>
    </div>
  )
}

export default FooterSocials