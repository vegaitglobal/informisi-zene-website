import React from 'react'
import styles from './QRCodeItem.module.scss'

const QRCodeItem = ({QRUrl}) => {
  return (
    <div className={styles.QRCodeItem}>
        <h3 className={styles.QRCodeTitle}>QR kod za donacije</h3>
        <div className={styles.QRCode}>
            <img src={`data:image/jpeg;base64,${QRUrl}`} alt="ZUKO QR code" className={styles.QRCodeImg} />
        </div>
    </div>
  )
}

export default QRCodeItem