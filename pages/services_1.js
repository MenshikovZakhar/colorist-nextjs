import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "../styles/ServicesMe.module.css";
import ScrollToTop from "react-scroll-to-top";
import { useState } from 'react';
import Emailjs from '../components/Emailjs';
import Consultation from '../components/Consultation';
import Head from 'next/head'
import { arrayPortfolio_6 } from '../constants/arrayPortfolio';
import { arrayPortfolio_7 } from '../constants/arrayPortfolio';
import Link from 'next/link';
import Images from '../components/Image_2';
import { ImagePopup } from '../components/ImagePopup';
function ServicesMe_1() {
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
                <title>Услуги окрашивания волос</title>
                <meta name="description" content="окрашивание волос, сложное окрашивание, цены Челябинск" />
                <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
            </Head>
            <div className={styles.page}>
                <Header
                    onAppointment={handleAppointment}
                />
                <main className={styles.servicesme}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />
                    <section className={styles.servicesme__description}>
                        <div className={styles.servicesme_description}>
                            <div className={styles.servicesme_title}>
                                <h2 className={styles.servicesme__title}>Сложное окрашивание</h2>
                                <p className={styles.servicesme__text}>(Airtouch, Shatush, Balayage, Мелирование)</p>
                                <p className={styles.servicesme__text}>Входит: Консультация (при необходимости тест-прядь), рассветление техникой, профессиональный уход,
                                    тонирование, оформление кончиков (при необходимости), укладка</p>
                            </div>
                            <div className={styles.servicesme__content}>
                                <span className={styles.servicesme_title_content}>
                                    <span className={styles.serv_title}>Средняя длинна волос</span>
                                    <span className={styles.servicesme_line}><span className={styles.servicesme_line_style_dotted}></span></span>
                                    <span className={styles.servicesme_price_content}><span className={styles.servicesme_price}> от 8000 ₽<span className={styles.servicesme_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.servicesme_title_content}>
                                    <span className={styles.serv_title}>Длинные волосы</span>
                                    <span className={styles.servicesme_line}><span className={styles.servicesme_line_style_dotted}></span></span>
                                    <span className={styles.servicesme_price_content}><span className={styles.servicesme_price}> от 10000 ₽<span className={styles.servicesme_point_zero}>
                                    </span></span> </span></span>

                            </div>
                        </div>
                        <div>
                            <ul className={styles.servicesme__elements}>
                                {arrayPortfolio_6.map((image, index) => {
                                    return (
                                        <Images key={index}
                                            src={image.src}
                                            image={image}
                                            onCardClick={handleCardClick}
                                        />
                                    );
                                })}
                            </ul>

                            <Link
                                href='/portfolio_1'
                                className={styles.servicesme_title}
                            >
                                <h3 className={styles.servicesme__title2}>Примеры работ</h3>
                            </Link>
                        </div>
                    </section>

                    <section className={styles.servicesme__description}>
                        <div className={styles.servicesme_description}>
                            <div className={styles.servicesme_title}>
                                <h2 className={styles.servicesme__title}>Окрашивание в один тон</h2>
                                <p className={styles.servicesme__text}>(Стоимость зависит от сложности работы и расхода материала)</p>
                                <p className={styles.servicesme__text}>Входит: Консультация,  препигментация (при необходимости), лёгкий уход по типу волос,
                                    окрашивание, оформление кончиков (при необходимости), укладка</p>
                            </div>

                            <div className={styles.servicesme__content}>
                                <span className={styles.servicesme_title_content}>
                                    <span className={styles.serv_title}>Короткая длинна волос</span>
                                    <span className={styles.servicesme_line}><span className={styles.servicesme_line_style_dotted}></span></span>
                                    <span className={styles.servicesme_price_content}><span className={styles.servicesme_price}> от 2000 ₽<span className={styles.servicesme_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.servicesme_title_content}>
                                    <span className={styles.serv_title}>Средняя длинна волос</span>
                                    <span className={styles.servicesme_line}><span className={styles.servicesme_line_style_dotted}></span></span>
                                    <span className={styles.servicesme_price_content}><span className={styles.servicesme_price}> от 3000 ₽<span className={styles.servicesme_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.servicesme_title_content}>
                                    <span className={styles.serv_title}>Длинные волосы</span>
                                    <span className={styles.servicesme_line}><span className={styles.servicesme_line_style_dotted}></span></span>
                                    <span className={styles.servicesme_price_content}><span className={styles.servicesme_price}> от 4000 ₽<span className={styles.servicesme_point_zero}>
                                    </span></span> </span></span>
                            </div>
                        </div>
                        <div>
                            <ul className={styles.servicesme__elements}>
                                {arrayPortfolio_7.map((image, index) => {
                                    return (
                                        <Images key={index}
                                            src={image.src}
                                            image={image}
                                            onCardClick={handleCardClick}
                                        />
                                    );
                                })}
                            </ul>
                            <Link
                                href='/portfolio_4'
                                className={styles.servicesme_title}
                            >
                                <h3 className={styles.servicesme__title2}>Примеры работ</h3>
                            </Link>
                        </div>
                    </section>
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

export default ServicesMe_1;