import styles from './TestComponent.module.css'

export default function TestComponent({testProperty = "default value"}){
    return <p className={styles.title}>{testProperty}</p>
}