import React from 'react'
import styles from './Stats.module.scss'
import CountUp from "react-countup";

const stats = [
    {   
        id: 1,
        resultPrefix: "",
        resultNumber: "30",
        resultSuffix: "+",
        resultDescription: "Projekata sprovedenih tokom 10 godina trajanja udruženja"
    },
    {   
        id: 2,
        resultPrefix: "",
        resultNumber: "500",
        resultSuffix: "",
        resultDescription: "Žena uključenih iz ruralnih područja gde ŽUKO deluje"
    },
    {   
        id: 3,
        resultPrefix: "",
        resultNumber: "40",
        resultSuffix: "+",
        resultDescription: "Poznatih ličnosti iz sveta umetnosti, sporta i politike uključenih u kampanje udruženja"
    },
    {   
        id: 4,
        resultPrefix: "",
        resultNumber: "200",
        resultSuffix: "",
        resultDescription: "Medijskih izveštaja svake godine"
    },
    {   
        id: 5,
        resultPrefix: "",
        resultNumber: "4",
        resultSuffix: "mil.",
        resultDescription: "Vidljivost za 3 naše kampanje"
    }
]

const Stats = () => {
  return (
    <div className={styles.stats}>
        <h2 className={styles.statsTitle}>Naši rezultati</h2>
        <div className={styles.statsContent}>
        {stats.map(stat => (
            <div className={styles.statsItem} key={stat.id}>
                <div className={styles.statsCount}>
                    {stat.resultPrefix && <span>{stat.resultPrefix}</span>}
                    {stat.resultNumber && 
                        <CountUp end={stat.resultNumber} enableScrollSpy scrollSpyOnce/>
                    }
                    {stat.resultSuffix && <span>{stat.resultSuffix}</span>}
                </div>
                    {stat.resultDescription && <p className={styles.statsText}>{stat.resultDescription}</p> }
            </div>
        ))}
        </div>
    </div>
  )
}

export default Stats