import React from 'react'
import SocialItem from '../SocialItem/SocialItem'
import styles from './FooterSocials.module.scss'

const socialsList = [
    {
        linkUrl: 'https://www.instagram.com',
        socialImg: '/instagram.svg',
    },
    {
        linkUrl: 'https://www.tiktok.com',
        socialImg: '/tiktok.svg',
    },
    {
        linkUrl: 'https://www.facebook.com',
        socialImg: '/facebook.svg',
    },
    {
        linkUrl: 'https://www.twitter.com',
        socialImg: '/twitter.svg',
    }
]

const FooterSocials = () => {
  return (
    <div>
        <h3 className={styles['socials-title']}>Pratite nas</h3>
        <ul className={styles['socials-list']}>
            {socialsList.map(socialItem => (
                <SocialItem socialItem={socialItem}/>
            ))}
        </ul>
    </div>
  )
}

export default FooterSocials