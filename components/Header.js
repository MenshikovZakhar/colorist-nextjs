import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "../styles/Header.module.css";
import Image from 'next/image';
import Navigation from './Navigation';
function Header({ onAppointment }) {
    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        });
    }, []);
    return (
        <header className={fixedHeader ? styles.header_active : styles.header}>
            <Link href='/' className={styles.header__link}>
                <Image className={styles.header__logo} src='/images/logo_1.png'
                    alt='logo'
                    width={150}
                    height={150}
                />
            </Link>
            <button onClick={onAppointment} type="button" className={styles.header__add}>Записаться<br /> онлайн</button>
            <Navigation />
        </header>
    );
};

export default Header;