import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "../styles/AboutMe.module.css";
import Emailjs from '../components/Emailjs';
import { ImagePopup } from '../components/ImagePopup';
import Image from 'next/image';
import Сertificates from '../components/Сertificates';
import { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Head from 'next/head'

function AboutMe() {
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
                <title>Валерия Смоленцева парикмахер колорист</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки, сложное окрашивание, цены Челябинск"></meta>
                <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
            </Head>
            <div className={styles.page}>
                <Header onAppointment={handleAppointment} />
                <main className={styles.aboutme}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />
                    <section className={styles.about}>
                        <div className={styles.about__description_text}>
                            <p className={styles.about__description_paragraph}>
                                Меня зовут Валерия, я колорист с опытом работы с волосами и оттенками более 10 лет.
                            </p>
                            <p className={styles.about__description_paragraph}>
                                Для меня, наиболее важное место в парикмахерском деле занимает колористика! Колористика- это наука о цветах. Так кто же такой колорист и чем он занимается? В первую очередь - это человек с особым складом ума, объединяющим креативность и практичность в одно целое. Так как работа должна быть не только красивой, но и радовать Вас долгое время)
                                Парикмахер-колорист, изучивший тонкости работы с цветовыми сочетаниями в теории и на практике — это более узкая специализация парикмахера-универсала.
                            </p>
                            <p className={styles.about__description_paragraph}>
                                В общем, я умею не только стричь и укладывать локоны, моя основная сфера — окрашивание.
                                Я знаю плюсы и минусы разных брендов красителей и как работает тот или иной пигмент, досконально разбираюсь в сложных техниках окрашивания (Airtouch, Shatush, Balayage) и принципах мелирования, создаю на волосах любые оттенки, блики и цветовые эффекты.
                                Так же помогу подобрать грамотный и правильный домашний уход именно для Ваших волос!
                                Подберу для Вас индивидуальный образ с учетом особенностей внешности, образа жизни и личных пожеланий!
                            </p>
                        </div>
                        <div className={styles.about__description}>

                            <Image className={styles.about__description_photo} src='/images/valeria__photo-3.png'
                                alt="фото"
                                width={150}
                                height={150}
                            />
                            <div className={styles.about__text}>
                                <h3 className={styles.about__description_title}>Валерия Смоленцева, 35 лет</h3>
                                <p className={styles.about__description_subtitle}>Парикмахер широкого профиля, колорист</p>
                                <p className={styles.about__description_subtitle}>
                                    <Image className={styles.about__location} src='/images/location.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    Челябинск, Образцова 13</p>
                                <p className={styles.about__description_subtitle}>
                                    <Image className={styles.about__phone} src='/images/location-2.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    +7(951)484-00-77</p>
                                <p className={styles.about__description_subtitle}>
                                    <Image className={styles.about__email} src='/images/email.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    colorist@yandex.ru</p>
                                <ul className={styles.about__list}>

                                    <li className={styles.about__list_item}>
                                        <a href="tel:+79514840077">
                                            <Image className={styles.about__logo} src='/images/phone_2.png'
                                                alt="logo"
                                                width={150}
                                                height={150}
                                            />
                                        </a>
                                    </li>
                                    <li className={styles.about__list_item}>
                                        <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                                            <Image className={styles.about__logo} src='/images/whatsapp_2.svg'
                                                alt="logo"
                                                width={150}
                                                height={150}
                                            />
                                        </a>
                                    </li>
                                    <li className={styles.about__list_item}>
                                        <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                            <Image className={styles.about__logo} src='/images/instagram_2.svg'
                                                alt="logo"
                                                width={150}
                                                height={150}
                                            />
                                        </a>
                                    </li>

                                    <li className={styles.about__list_item}>
                                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                                            <Image className={styles.about__logo} src='/images/telegram_2.svg'
                                                alt="logo"
                                                width={150}
                                                height={150}
                                            />
                                        </a>
                                    </li>
                                    <li className={styles.about__list_item}>
                                        <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                                            <Image className={styles.about__logo} src='/images/vk_2.svg'
                                                alt="logo"
                                                width={150}
                                                height={150}
                                            />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </section>
                    <Сertificates onCardClick={handleCardClick} />
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
export default AboutMe;