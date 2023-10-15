import React, { useEffect, useState } from 'react'
import styles from './QRCode.module.scss'
import DonationForm from '../DonationForm/DonationForm'
import { getDonationInfo } from '../../services/donationService'
import QRCodeItem from '../QRCodeItem/QRCodeItem'

const QRCode = () => {
    const [donationData, setDonationData] = useState({});
    const [QRUrl, setQRUrl] = useState('')
	
    useEffect(() => {
        try {
            const getData = async () => {
				const data = await getDonationInfo()
				console.log("data2",data);
				setDonationData(data.donationData[0])
				console.log('data.donationData[0] :>> ', data.donationData[0]);
                setQRUrl(data.qrImage.data.i)
            }
            getData()
        } catch (error) {
            console.log(error)
        }
    }, [])


  return (
    <div className={styles.QRCodeSection}>
        <QRCodeItem QRUrl={QRUrl}/>
        <DonationForm donationData={donationData}/>
    </div>
  )
}

export default QRCode