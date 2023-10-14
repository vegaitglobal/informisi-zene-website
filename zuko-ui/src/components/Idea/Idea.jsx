import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './Idea.module.scss';

function Idea(){
    return (
        <section className={styles.holder}>
            <img className={styles.image} src='/bulb.svg' alt='Decorative image of bulb' />
            <p className={styles.text}>Imaš ideju kako da unaprediš položaj žena u svojoj zajednici i želiš da se pridružiš ŽUKO timu? </p>
            <RoundedButton label={'Kontaktiraj nas!'} />
        </section>
    )
}

export default Idea
