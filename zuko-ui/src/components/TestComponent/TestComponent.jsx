import styles from './TestComponent.module.scss'

export default function TestComponent({testProperty = "default value"}){
    return <p className={styles.title}>{testProperty}</p>
}