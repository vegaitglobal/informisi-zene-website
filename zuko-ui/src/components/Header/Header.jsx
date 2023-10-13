import styles from './Header.module.css';

// const navigation = [
//     {
//         name: 'Novosti',
//         href: 'javascript:;'
//     },
//     {
//         name: 'Publikacije',
//         href: 'javascript:;'
//     },
//     {
//         name: 'Doniraj',
//         href: 'javascript:;'
//     },
//     {
//         name: 'O Nama',
//         href: 'javascript:;'
//     },
//     {
//         name: 'Kontakt',
//         href: 'javascript:;'
//     }
// ]

function Header(){
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="../logo.png" alt=" Logo" />
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <button className={styles.link} type='button' href="">Novosti</button>
                    <div className={styles.subnav}>
                        <ul className={styles.sublist}>
                            <li className={styles.subitem}>
                                <a className={styles.sublink} href="">Vesti</a>
                            </li>
                            <li className={styles.subitem}>
                                <a className={styles.sublink} href="">Prilike za žene</a>
                            </li> 
                        </ul>
                    </div>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="">Publikacije</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="">Doniraj</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="">O nama</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="">Kontakt</a>
                </li>
            </ul>
            <button className={styles.menuBtn} type='button'>
                <span className={styles.menuIcon}></span>
            </button>
        </header>
    )
}

export default Header
