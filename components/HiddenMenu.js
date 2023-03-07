import Link from 'next/link';
import React from 'react';
import styles from "../styles/HiddenMenu.module.css";
import Image from 'next/image';
import { useRouter } from "next/router";
function HiddenMenu({ onClickCloseMenu }) {
  const router = useRouter();
  return (
    <section className={styles.hidden_menu}>
      <nav className={styles.nav__menu_adapt}>
        <div className={styles.nav_menu__close} onClick={onClickCloseMenu}></div>
        <div className={styles.nav_movie__movie_adapt}>
          <Link href='/' className={styles.header__link}>

            <Image
              className={`${styles.header__logo} ${styles.header__logo_hiddenMenu}`}
              src='/images/logo_1.png'
              alt="Navbar image"
              width={150}
              height={150}
            />
          </Link>
          <Link
            href='/' className={styles.nav_movie__link_adapt}
            onClick={onClickCloseMenu}
          >
            Главная
          </Link>
          <Link
            href='/about'
            className={router.pathname == "/about" ? `${styles.nav_movie__link_adapt} ${styles.active}` : `${styles.nav_movie__link_adapt}`}
            onClick={onClickCloseMenu}
          >
            Обо мне
          </Link>
          <Link
            href='/services'
            className={router.pathname == "/about" ? `${styles.nav_movie__link_adapt} ${styles.active}` : `${styles.nav_movie__link_adapt}`}
            onClick={onClickCloseMenu}
          >
            Услуги
          </Link>
          <Link
            href='/price'
            className={router.pathname == "/about" ? `${styles.nav_movie__link_adapt} ${styles.active}` : `${styles.nav_movie__link_adapt}`}
            onClick={onClickCloseMenu}
          >
            Стоимость
          </Link>
          <Link
            href='/portfolio'
            className={router.pathname == "/about" ? `${styles.nav_movie__link_adapt} ${styles.active}` : `${styles.nav_movie__link_adapt}`}
            onClick={onClickCloseMenu}
          >
            Портфолио
          </Link>
          <Link
            href='/contacts'
            className={router.pathname == "/about" ? `${styles.nav_movie__link_adapt} ${styles.active}` : `${styles.nav_movie__link_adapt}`}
            onClick={onClickCloseMenu}
          >
            Контакты
          </Link>
        </div>
        <h1 className={styles.hidden_menu__title}>Cвязаться со мной</h1>

        <div className={styles.iqons}>
          <a href="tel:+79514840077">
            <Image className={styles.iqons__logo} src='/images/phone.svg'
              alt='logo'
              width={150}
              height={150}
            />
          </a> <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
            <Image className={styles.iqons__logo} src='/images/whatsapp.svg'
              alt='logo'
              width={150}
              height={150}
            />
          </a>
          <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
            <Image className={styles.iqons__logo} src='/images/instagram.svg'
              alt='logo'
              width={150}
              height={150}
            />
          </a>
          <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
            <Image className={styles.iqons__logo} src='/images/telegram.svg'
              alt='logo'
              width={150}
              height={150}
            />
          </a>
          <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
            <Image className={styles.iqons__logo} src='/images/vk.svg'
              alt='logo'
              width={150}
              height={150}
            />
          </a>

        </div>
      </nav>
    </section>
  );
};

export default HiddenMenu;