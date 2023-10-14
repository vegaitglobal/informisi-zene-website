import styles from './AboutHero.module.scss'

const text1Default = 'Žensko udruženje kolubarskog okruga (ŽUKO) je osnovano u maju 2013. godine sa idejom unapređenja položaja žena na lokalnom nivou.'
const text2Default =  'Vremenom su se, sa rastom udruženja, i ciljevi rada jasnije definisali, a danas ŽUKO aktivno deluje širom Srbije.'
const descriptionDefault =  'Zahvaljujući podršci pojedinaca, organizacija, fondacija, kompanija i drugih saradnika, ŽUKO je uspešno sproveo preko 30 projekata koji su značajno doprineli boljem životu žena, posebno žena na selu i njihovih porodica.'
const srcDefault = './AboutHero.png'

export default function AboutHero({ heading = "O nama", src = srcDefault, alt = "Missing image", text1 = text1Default, text2 = text2Default, description = descriptionDefault }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{heading}</h1>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={src} alt={alt} />
                    <div className={styles.textWrapper}>
                        <p className={styles.paragraph}>{text1}</p>
                        <p className={styles.paragraph}>{text2}</p>
                        <p className={styles.description}>{description}</p>
                    </div>
            </div>
        </div>
    );
}