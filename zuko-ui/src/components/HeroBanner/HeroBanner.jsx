import styles from './HeroBanner.module.scss';
import {Link} from 'react-router-dom';

function HeroBanner(){
    return (
        <section className={styles.holder}>
            <img className={styles.image} src="/hero-image.png" alt="Hero banner" />
            <div className={styles.content}>
                <h1 className={styles.title}>Već 10 godina ideje o rodnoj ravnopravnosti pretvaramo u stvarnost</h1>
                <Link className={styles.link} to='/news'>Saznaj više</Link>
            </div>
        </section>
    )
}

export default HeroBanner
