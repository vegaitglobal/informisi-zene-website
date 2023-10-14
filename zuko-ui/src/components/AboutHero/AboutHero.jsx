import styles from './AboutHero.module.scss'

export default function AboutHero({ header = "O nama", src = srcDefault, alt = "Missing image", text1 = text1Default, text2 = text2Default, description = descriptionDefault }) {
    const text1Default = 'Žensko udruženje kolubarskog okruga (ŽUKO) je osnovano u maju 2013. godine sa idejom unapređenja položaja žena na lokalnom nivou.',
    const text2Default =  'Vremenom su se, sa rastom udruženja, i ciljevi rada jasnije definisali, a danas ŽUKO aktivno deluje širom Srbije.',
    const descriptionDefault =  'Zahvaljujući podršci pojedinaca, organizacija, fondacija, kompanija i drugih saradnika, ŽUKO je uspešno sproveo preko 30 projekata koji su značajno doprineli boljem životu žena, posebno žena na selu i njihovih porodica.',
    const srcDefault = './AboutHero.png'

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{header}</h1>
            {texts.map(text =>
                <div className={styles.imgTextComp}>
                <img className={styles.image} src={text.src} alt={alt} />
                <p className={styles.paragraph}>{text.text1}</p>
                <p className={styles.paragraph}>{text.text2}</p>
                <p className={styles.description}>{text.description}</p>
            </div>)}
        </div>
    );
}