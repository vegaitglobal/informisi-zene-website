import React from 'react'
import styles from './QRCodeItem.module.scss'

const QRCodeItem = ({QRUrl}) => {
  return (
		<div className={styles.QRCodeItem}>
			<h3 className={styles.QRCodeTitle}>QR kod za donacije</h3>
			<div className={styles.QRCode}>
				<img
					src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
					alt="ZUKO QR code"
					className={styles.QRCodeImg}
				/>
			</div>
		</div>
  );
}

export default QRCodeItem