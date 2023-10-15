import styles from './LayoutWrapper.module.scss';

export default function LayoutWrapper({children, wrapperSmall}) {
    return <div className={`${styles.layout} ${wrapperSmall ? styles.layoutSmall : ""}`}>{children}</div>
}