import styles from './QuickInformation.module.scss';
import {Link} from 'react-router-dom';

function QuickInformation(){
    return (
        <section className={styles.holder}>
            <img className={styles.image} src='/bulb.svg' alt='Decorative image of bulb' />
            <p className={styles.text}>Imaš ideju kako da unaprediš položaj žena u svojoj zajednici i želiš da se pridružiš ŽUKO timu? </p>
            <Link to='/contact' className={styles.link}>Kontaktirajte nas!</Link>
        </section>
    )
}

export default QuickInformation;
 