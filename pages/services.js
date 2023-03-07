import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "../styles/ServicesMe.module.css";
import ScrollToTop from "react-scroll-to-top";
import Services from '../components/Main/Services';
import { useState } from 'react';
import Emailjs from '../components/Emailjs';
import Consultation from '../components/Consultation';
import Head from 'next/head'
function ServicesMe() {

    const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);
    const closePopupsMessage = () => {
        setAppointmentpOpen(false);
    };

    //открытие попапа онлайн записи
    const handleAppointment = () => {
        setAppointmentpOpen(true)
    }

    return (
        <><Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <title>Услуги</title>
            <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки, сложное окрашивание, цены Челябинск" />
            <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
            <meta name="yandex-verification" content="66f9e7d8e1547925" />
            <link rel="shortcut icon" type="image/png" href="/favicon.png" />
            <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
        </Head>

            <div className={styles.page}>
                <Header onAppointment={handleAppointment} />
                <main className={styles.servicesme}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />
                    <Services />
                    <Consultation />
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

export default ServicesMe;