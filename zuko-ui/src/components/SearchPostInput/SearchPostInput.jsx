import { useEffect, useState } from 'react'
import styles from './SearchPostInput.module.scss'

export default function SearchPostInput({label = "Pretraga", setQuery}){
    
    return <div>
        <p className={styles.title}>{label}</p>
        <input className={styles.search} placeholder={label} type="text" onChange={(e) => setQuery(e.target.value)}/>
    </div>
}