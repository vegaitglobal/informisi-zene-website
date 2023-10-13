import styles from './AboutHero.module.scss'

export default function AboutHero({ header = "O nama", src, alt = "Missing image", text1, text2, description }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{header}</h1>
            <div className={styles.imgTextComp}>
                <img className={styles.image} src={src} alt={alt} />
                <p className={styles.paragraph}>{text1}</p>
                <p className={styles.paragraph}>{text2}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}