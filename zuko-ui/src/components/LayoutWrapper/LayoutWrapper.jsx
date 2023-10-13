import styles from './LayoutWrapper.module.scss';

export default function LayoutWrapper({children}) {
    return <div className={styles.layout}>{children}</div>
}