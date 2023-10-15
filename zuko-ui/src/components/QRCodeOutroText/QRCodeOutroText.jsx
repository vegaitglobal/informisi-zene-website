import React from 'react'
import styles from './QRCodeOutroText.module.scss'
import {Link} from 'react-router-dom'

const QRCodeOutroText = () => {
  return (
    <p className={styles.QRCodeText}>
        Važno nam je da znate kako trošimo Vaš novac i zato svakog donatra kroz izveštaj o radu i trošenju doniranih sredstava obaveštavamo kako smo iskoristili donirana sredstva.
        <br/>
        <br/>
        Izveštaj o radu možete pogledati <Link to="">ovde</Link>
    </p>
  )
}

export default QRCodeOutroText