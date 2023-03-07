import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/Navigation.module.css";
import HiddenMenu from './HiddenMenu';
import Image from 'next/image';
import { useRouter } from "next/router";
function Navigation() {
    const [toggle, setToggle] = useState(true);

    const onClickOpenMenu = () => {
        setToggle(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };

    const router = useRouter();

    return (
        <>
            {toggle ? (
                <div className={styles.nav_menu__menu_adapt} onClick={onClickOpenMenu}></div>
            ) : (
                <HiddenMenu onClickCloseMenu={onClickCloseMenu} />
            )}
            <nav className={styles.nav__menu}>

                <Link
                    href='/about'
                    className={router.pathname == "/about" ? `${styles.nav__link} ${styles.active}` : `${styles.nav__link}`}

                    onClick={onClickCloseMenu}
                >
                    Обо мне
                </Link>

                <Link
                    href='/services'
                    className={router.pathname == "/services" ? `${styles.nav__link_2} ${styles.active}` : `${styles.nav__link_2}`}
                >
                    <Image className={styles.menu_icon} src='/images/menu_icon.png'
                        alt="Navbar image"
                        width={150}
                        height={150}
                    />
                    Услуги
                </Link>
                <ul className={styles.submenu}>
                    <li className={styles.submenu__links}><Link className={styles.submenu__link} href='/services_1'>Окрашивание</Link></li>
                    <li className={styles.submenu__links}><Link className={styles.submenu__link} href='/services_2'>Тонирование</Link></li>
                    <li className={styles.submenu__links}><Link className={styles.submenu__link} href='/services_3'>Женские стрижки</Link></li>
                    <li className={styles.submenu__links}><Link className={styles.submenu__link} href='/services_4'>Профессиональный уход</Link></li>
                </ul>
                <Link
                    href='/price'
                    className={router.pathname == "/price" ? `${styles.nav__link} ${styles.active}` : `${styles.nav__link}`}
                >
                    Стоимость
                </Link>
                <Link
                    href='/portfolio'
                    className={router.pathname == "/portfolio" ? `${styles.nav__link} ${styles.active}` : `${styles.nav__link}`}
                >
                    Портфолио
                </Link>
                <Link
                    href='/contacts'
                    className={router.pathname == "/contacts" ? `${styles.nav__link} ${styles.active}` : `${styles.nav__link}`}
                >
                    Контакты
                </Link>

            </nav>
        </>
    );
};

export default Navigation; 