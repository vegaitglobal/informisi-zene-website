import styles from './AboutHero.module.css'

export default function AboutHero({ header = "O nama", src, alt = "Missing image", text }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{header}</h1>
            <img className={styles.image} src={src} alt={alt} />
            <p className={styles.paragraph}>{text}</p>
        </div>
    );
}