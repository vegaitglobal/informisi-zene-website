import React from 'react'
import styles from './DonationForm.module.scss'

const DonationForm = ({ donationData }) => {
	console.log('donationData :>> ', donationData);
    // console.log(donationData)
  return (
		<div className={styles.donationForm}>
			<h3 className={styles.donationFormTitle}>Račun za donacije</h3>
			<div className={styles.donationFormContent}>
				<h4 className={styles.donationFormSubtitle}>Primalac</h4>
				<div className={styles.donationFormReciever}>
					<p className={styles.donationFormData}>
						{donationData?.recipient_name}
						<br />
						<br />
						{donationData?.recipient_address}
						<br />
						<br />
						{donationData?.recipient_zip}
					</p>
				</div>
			</div>
			<div>
				<h4 className={styles.donationFormSubtitle}>Broj računa</h4>
				<div className={styles.donationCardBox}>
					<p className={styles.donationFormData}>
						{donationData?.account_number}
					</p>
				</div>
			</div>
		</div>
  );
}

export default DonationForm