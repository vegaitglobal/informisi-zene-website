import React from 'react'
import {Link} from 'react-router-dom'
import styles from './SocialItem.module.css'

const SocialItem = ({socialItem}) => {
  return (
    <li className={styles['social-list-item']}>
        <Link to={socialItem.linkUrl} target='_blank' className={styles['social-list-link']}>
            <img src={socialItem.socialImg} alt="" />
        </Link>
    </li>
  )
}

export default SocialItem