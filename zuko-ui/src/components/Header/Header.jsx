import { useLayoutEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayedSubmenu, setDisplayedSubmenu] = useState(null);
    // const list = useRef(null);
    // const menu = useRef(null);

    const data = [
        {
            label: 'Novosti',
            href: '',
            submenu: [
                {
                    label: 'Vest',
                    href:'www.google.com'
                },
                {
                    label: 'Prilike za žene',
                    href:'www.google.com'
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
            href: '',
            submenu: [
                {
                    label: 'Vest',
                    href:'www.google.com'
                },
                {
                    label: 'Prilike za žene',
                    href:'www.google.com'
                },
            ]
        },
        {
            label: 'O Nama',
            href: '/publications',
            submenu: [],
        },
        {
            label: 'Kontakt',
            href: '/publications',
            submenu: [],
        }
    ]

    const onClick = (index) => {
        if (displayedSubmenu === index) return setDisplayedSubmenu(null);
        setDisplayedSubmenu(index);
    };

    return (
        <header className={styles.header}>
            <img className={styles.logo} src="../logo.png" alt=" Logo" />
            <div className={styles.holder} style={isMenuOpen ? {transform: `translateY(0px)`} : null}>
                <ul className={`${styles.nav}`} >
                    {data?.map((item, index) => (
                    <li className={styles.item} key={item.label}>
                        {item?.submenu?.length ? 
                        <>
                            <button onClick={() => onClick(index)} className={styles.link} type='button' data-id={index}>{item.label}</button> 
                            {displayedSubmenu === index && (
                                <div className={styles.subnav}>
                                    <ul className={styles.sublist}>
                                        {item?.submenu.map(subitem => (
                                            <li className={styles.subitem} key={subitem.label}>
                                                <a className={styles.sublink} href={subitem.href}>{subitem.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                        : <a href={item.href} className={styles.link}>{item.label}</a>}
                    </li>))}
                </ul>
            </div>
            <button className={styles.menuBtn} type='button' onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
                <span className={styles.menuIcon}></span>
            </button>
        </header>
    )
}

export default Header
