import styles from "../styles/Consultation.module.css";
import Image from 'next/image';

function Consultation() {
    return (
        <section className={styles.consultation}>

            <div className={styles.consultation__description}>

                <div className={styles.consultation_title}>
                    <h2 className={styles.consultation__title}>Не знаешь что выбрать?</h2>
                </div>
                <p className={styles.consultation__phone}>Запишись на предварительную консультацию. Это просто и бесплатно</p>
                <p className={styles.consultation__phone}>Тел: +7(951)484-00-77</p>

                <div className={styles.iqons__consultation}>
                    <a href="tel:+79514840077">
                        <Image className={styles.consultation__logo} src='/images/phone.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                        <Image className={styles.consultation__logo} src='/images/whatsapp.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <Image className={styles.consultation__logo} src='/images/instagram.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                        <Image className={styles.consultation__logo} src='/images/telegram.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                        <Image className={styles.consultation__logo} src='/images/vk.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
            </div>
            <Image className={styles.consultation__description_photo} src='/images/consultation.jpg'
                alt=''
                width={1000}
                height={100}
            />
        </section>
    )
}

export default Consultation;