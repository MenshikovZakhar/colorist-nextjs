import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "../styles/Contacts.module.css";
import Map from '../components/Map';
import ScrollToTop from "react-scroll-to-top";
import Emailjs from '../components/Emailjs';
import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image';

function Contacts() {
    const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);
    const closePopupsMessage = () => {
        setAppointmentpOpen(false);
    };
    //открытие попапа онлайн записи
    const handleAppointment = () => {
        setAppointmentpOpen(true)
    }
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>Контакты</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки, сложное окрашивание, цены Челябинск"></meta>
                <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
            </Head>
            <div className={styles.page}>
                <Header
                    onAppointment={handleAppointment}
                />
                <main className={styles.contacts}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />
                    <div className={styles.map__description}>


                        <h2 className={styles.map__title}>Контакты</h2>

                        <div className={styles.map__conteiner}>
                            <div className={styles.map__box}>
                                <Image className={styles.map__iqons} src='/images/location-1.svg'
                                    alt="logo"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.contacts__value} >
                                    <h3 className={styles.contacts__title}>Адрес</h3>
                                    <span className={styles.contacts__name}>г. Челябинск, ул. Образцова, д.13</span>
                                </div>
                            </div>

                            <div className={styles.map__box}>
                                <Image className={styles.map__iqons} src='/images/location-2.png'
                                    alt="logo"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.contacts__value} >
                                    <h3 className={styles.contacts__title}>Телефон</h3>
                                    <span className={styles.contacts__name}>+7(951)484-00-77</span>
                                </div>
                            </div>

                            <div className={styles.map__box}>
                                <Image className={styles.map__iqons} src='/images/location-3.svg'
                                    alt="logo"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.contacts__value} >
                                    <h3 className={styles.contacts__title}>Режим работы</h3>
                                    <span className={styles.contacts__name}>Пн-Вс: с 9-00 до 21-00 по предварительной записи</span>
                                </div>
                            </div>

                            <div className={styles.map__box}>
                                <Image className={styles.map__iqons} src='/images/location-4.svg'
                                    alt="logo"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.contacts__value} >
                                    <h3 className={styles.contacts__title}>E-mail</h3>
                                    <span className={styles.contacts__name}>lera8787@inbox.ru</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contacts__communication}>
                            <a href="tel:+79514840077">
                                <Image className={styles.contacts__logo} src='/images/phone.svg'
                                    alt='logo'
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                                <Image className={styles.contacts__logo} src='/images/whatsapp.svg'
                                    alt='logo'
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                <Image className={styles.contacts__logo} src='/images/instagram.svg'
                                    alt='logo'
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                                <Image className={styles.contacts__logo} src='/images/telegram.svg'
                                    alt='logo'
                                    width={150}
                                    height={150}
                                />
                            </a>
                            <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                                <Image className={styles.contacts__logo} src='/images/vk.svg'
                                    alt='logo'
                                    width={150}
                                    height={150}
                                />
                            </a>
                        </div>
                    </div>
                    <Map />
                </main>
                <Footer />
            </div>
            <Emailjs
                isOpen={isAppointmentpOpen}
                onClose={closePopupsMessage}
            />
        </>
    );
}

export default Contacts;