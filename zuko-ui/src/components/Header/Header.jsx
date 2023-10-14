import { useState } from 'react';
import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayedSubmenu, setDisplayedSubmenu] = useState(null);

    const data = [
        {
            label: 'Novosti',
            href: '',
            submenu: [
                {
                    label: 'Vesti',
                    href:'/news'
                },
                {
                    label: 'Prilike za žene',
                    href:'/opportunities'
                },
            ]
        },
        {
            label: 'Publikacije',
            href: '/publications',
            submenu: [],
        },
        {
            label: 'Doniraj',
            href: '/donations',
            submenu: []
        },
        {
            label: 'O Nama',
            href: '/about',
            submenu: [],
        },
        {
            label: 'Kontakt',
            href: '/contact',
            submenu: [],
        }
    ]

    const onClick = (index) => {
        if (displayedSubmenu === index) return setDisplayedSubmenu(null);
        setDisplayedSubmenu(index);
    };

    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <NavLink to="/">
                <img className={styles.logo} src="../logo.png" alt=" Logo" />
                </NavLink>
                <div className={styles.holder} style={isMenuOpen ? {transform: `translateY(0px)`} : null}>
                    <ul className={`${styles.nav}`} >
                        {data?.map((item, index) => (
                        <li className={styles.item} key={item.label}>
                            {item?.submenu?.length ? 
                            <>
                                <button onClick={() => onClick(index)} className={`${styles.link} ${displayedSubmenu === index && styles.linkActive}`} type='button'>{item.label}<span className={styles.chevronIcon}></span>
                                </button> 
                                {displayedSubmenu === index && (
                                    <div className={styles.subnav}>
                                        <ul className={styles.sublist}>
                                            {item?.submenu.map(subitem => (
                                                <li className={styles.subitem} key={subitem.label}>
                                                    <NavLink className={styles.sublink} to={subitem.href}>{subitem.label}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                            : 
                            <NavLink to={item.href} className={styles.link}>{item.label}</NavLink>
                            }
                        </li>))}
                    </ul>
                </div>
                <button className={styles.menuBtn} type='button' onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
                    <span className={styles.menuIcon}></span>
                </button>
            </div>
        </header>
    )
}

export default Header
