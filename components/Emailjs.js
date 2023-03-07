import styles from "../styles/Emailjs.module.css";
import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';
import { Preloader } from './Preloader';
import Image from 'next/image';
import success from "../public/images/success.png"
import error from "../public/images/error.png"



import {
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../constants/index';

function Emailjs({ isOpen, onClose, }) {


    const classPopup = classNames(isOpen ? `${styles.popup_opened} ${styles.popup}` : `${styles.popup}`);

    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
    const [imgAcceptAuth, setImgAcceptAuth] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ap6gpqg',
            'template_ity9nob',
            toSend,
            'Z6le3YMDE9ovmwfTV'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageAcceptAuth(SAVE_MOVIE_MESSAGE);
                setImgAcceptAuth(success);
                setIsLoading(true)
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setMessageAcceptAuth(NOT_FOUND_MESSAGE);
                setImgAcceptAuth(error);
                setIsLoading(true)
            });


        setToSend('');
        setEmailjsOpen(true)
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsFormValid(e.target.closest('form').checkValidity());
        setImgAcceptAuth("")
        setMessageAcceptAuth("");
        setIsLoading(false);
    };

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
            setEmailjsOpen(false)
        }
    };

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    return (
        <div className={classPopup} onMouseDown={handleMouseDown}>
            {isEmailjsOpen ? (<div className={styles.emailjs__message}> <h2 className={styles.emailjs__title_2}>{messageAcceptAuth}</h2>
                {isLoading ? null :
                    <Preloader />
                }

                <Image onLoad={() => setIsLoading(true)} style={isLoading ? {} : { display: 'none' }}
                    className={styles.info_image} src={imgAcceptAuth ? imgAcceptAuth : '/images/success.png'}
                    alt='logo'
                    width={150}
                    height={150}
                /></div>) :
                (<div className={styles.emailjs} >
                    <h2 className={styles.emailjs__title}>Оставьте Вашу заявку.</h2>
                    <p className={styles.emailjs__text}>Я свяжусь с Вами в ближайшее время.</p>
                    <form onSubmit={onSubmit} className={styles.emailjs__form} >
                        <input
                            className={styles.emailjs__input}

                            type='text'
                            name='name'
                            placeholder='Введите Ваше Имя'
                            value={toSend.name || ''}
                            onChange={handleChange}
                            pattern="[а-яА-Яa-zA-ZёË\- ]{2,}"
                            required
                        />
                        <span className={`${styles.register__error} ${styles.auth__error}`}>{errors.name}</span>

                        <input
                            className={styles.emailjs__input}

                            type="tel"
                            name='phone'
                            placeholder='Введите Ваш телефон'
                            value={toSend.phone || ''}
                            onChange={handleChange}
                            pattern="[0-9]{11}"
                            required
                        />
                        <span className={`${styles.register__error} ${styles.auth__error}`}>{errors.phone}</span>
                        <textarea
                            className={styles.emailjs__textarea}

                            type='text'
                            name='message'
                            value={toSend.message || ''}
                            onChange={handleChange}
                            placeholder='Укажите желаемый вид, оказываемых услуг, время и удобную для Вас дату'
                        />
                        <button disabled={!isFormValid} type="submit"
                            className={isFormValid ? `${styles.register__submit_button} ${styles.auth__submit_button}` :
                                `${styles.auth__submit_button_disabled} ${styles.auth__submit_button}`}
                        >
                            Отправить</button>

                        <p className={styles.emailjs__text_2}>Также для связи со мной Вы можете воспользоваться любым из доступных способов.</p>

                        <div className={styles.emailjs__iqons}>
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

                    </form>

                </div>)
            }

            <button
                className={styles.emailjs__close}
                aria-label='Close'

                type='button'
                onClick={() => { setToSend(''); setEmailjsOpen(false); onClose(false) }}
            ></button>

        </div>
    );
}

export default Emailjs;