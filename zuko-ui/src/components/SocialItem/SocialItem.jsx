import React from 'react'
import {Link} from 'react-router-dom'
import styles from './SocialItem.module.scss'

const SocialItem = ({socialItem}) => {
  return (
    <li className={styles.socialListItem}>
        <Link to={socialItem.linkUrl} target='_blank' className={styles.socialListLink}>
            <img src={socialItem.socialImg} alt="" />
        </Link>
    </li>
  )
}

export default SocialItem