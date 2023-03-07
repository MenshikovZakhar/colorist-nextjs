import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from "../styles/Price.module.css";
import Emailjs from '../components/Emailjs';
import Image from 'next/image';
import ScrollToTop from "react-scroll-to-top";
import Head from 'next/head'
import Consultation from '../components/Consultation';
import { useState } from 'react';


function Price() {
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
                <title>Стоимость услуг</title>
                <meta name="description" content="окрашивание волос, тонирование волос, женские стрижки, сложное окрашивание, цены Челябинск" />
                <meta name="google-site-verification" content="8BRcuTdCOhaFlOOQA7RlKNnEaxh6Gg9b6xGGRxZMJrc" />
                <meta name="yandex-verification" content="66f9e7d8e1547925" />
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" type="image/png" href="/logo192.png" />
            </Head>
            <div className={styles.page}>
                <Header
                    onAppointment={handleAppointment}
                />
                <main className={styles.price}>
                    <ScrollToTop smooth className={styles.scrolltop} viewBox="0 0 24 24" />

                    <div className={styles.price_description}>
                        <div className={styles.price__description}>

                            <h2 className={styles.price__title}>Прайс на услуги</h2>

                            <div className={styles.price__box}>
                                <div className={styles.price__value}>
                                    <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />

                                    <h3 className={styles.price_title}>Окрашивание в 1 тон</h3>
                                </div>
                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> от 2000 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> от 3000 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Длинные волосы</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> от 4000 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>
                            </div>

                            <div className={styles.price__box}>
                                <div className={styles.price__value}>
                                    <Image className={styles.price__iqons} src='/images/price__img-2.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={styles.price_title}>Женские стрижки</h3>
                                </div>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Длинные волосы</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                            </div>
                            <div className={styles.price__box}>
                                <div className={styles.price__value}>

                                    <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    <h3 className={styles.price_title}>Окрашивание корней + Тонирование длинны</h3>
                                </div>
                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 2000 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 2500 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <span className={styles.pricelist_title_content}>
                                    <span className={styles.pricelist_title}>Длинные волосы</span>
                                    <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                    <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 3000 ₽<span className={styles.pricelist_point_zero}>
                                    </span></span> </span></span>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Контуринг</h3>

                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 4000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 5000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 6000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Cложное окрашивание волос: Airtouch</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 8000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 10000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Cложное окрашивание волос: Мелирование</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 8000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 10000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Cложное окрашивание волос: Мелирование</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 8000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 10000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-1.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Cложное окрашивание волос: Balayage</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 8000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 10000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                </div>

                                <h2 className={styles.price__title_2}>Профессиональный уход за волосами</h2>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-3.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Глубокое увлажнение</h3>
                                    </div>
                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 2000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>
                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-3.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Питание + белок</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 2000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>
                                </div>

                                <div className={styles.price__box}>
                                    <div className={styles.price__value}>
                                        <Image className={styles.price__iqons} src='/images/price__img-3.png'
                                            alt="logo"
                                            width={150}
                                            height={150}
                                        />
                                        <h3 className={styles.price_title}>Глоссинг (Glossing)</h3>
                                    </div>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Короткая длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 1500 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>


                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Средняя длинна волос</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 2000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>

                                    <span className={styles.pricelist_title_content}>
                                        <span className={styles.pricelist_title}>Длинные волосы</span>
                                        <span className={styles.pricelist_line}><span className={styles.pricelist_line_style_dotted}></span></span>
                                        <span className={styles.pricelist_price_content}><span className={styles.pricelist_price}> 3000 ₽<span className={styles.pricelist_point_zero}>
                                        </span></span> </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Consultation />
                </main>
                <Footer />
            </div>
            <Emailjs
                isOpen={isAppointmentpOpen}
                onClose={closePopupsMessage}
            />
        </>

    )
}

export default Price;
