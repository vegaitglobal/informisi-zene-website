import React from 'react'
import GridLoader from "react-spinners/GridLoader";
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
        <GridLoader
        color="#FFAA33"
        margin={6}
        aria-label="Loading Spinner"
        />
    </div>
  )
}

export default Loader