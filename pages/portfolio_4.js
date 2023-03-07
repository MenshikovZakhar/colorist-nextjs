import Footer from '../components/Footer';
import Header from '../components/Header';
import Emailjs from '../components/Emailjs';
import PortfolioNav from '../components/PortfolioNav';
import PortfolioCardList from '../components/PortfolioCardList';
import styles from "../styles/Portfolio_2.module.css";
import Consultation from '../components/Consultation';
import ScrollToTop from "react-scroll-to-top";
import Head from 'next/head'
import { arrayPortfolio_4 } from '../constants/arrayPortfolio';
import React, { useState } from 'react';
import { ImagePopup } from '../components/ImagePopup';
function Portfolio() {
    const [selectedCard, setSelectedCard] = useState({});
    const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);
    const [isImagePopup, setImagePopup] = useState(false);
    const closePopupsMessage = () => {
        setAppointmentpOpen(false);
        setImagePopup(false);
    };

    //открытие попапа онлайн записи
    const handleAppointment = () => {
        setAppointmentpOpen(true)
    }
    //открытие попапа с картинкой
    const handleCardClick = (card) => {
        setSelectedCard(card);
        setImagePopup(true);
    };


    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>Портфолио</title>
                <meta name="description" content="Примеры работ, портфолио, окрашивание волос" />
                <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
            </Head>
            <div className={styles.page}>
                <Header
                    onAppointment={handleAppointment}
                />
                <main className={styles.portfolio}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />
                    <>
                        <PortfolioNav />
                    </>
                    <>
                        <PortfolioCardList onCardClick={handleCardClick} arrayPortfolio={arrayPortfolio_4} type={'all'} />
                    </>
                    <Consultation />
                </main>
                <Footer />
            </div>
            <Emailjs
                isOpen={isAppointmentpOpen}
                onClose={closePopupsMessage}
            />
            <ImagePopup
                isOpen={isImagePopup}
                onClose={closePopupsMessage}
                card={selectedCard}
            />
        </>
    );
}

export default Portfolio;