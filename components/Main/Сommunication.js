import styles from "../../styles/Сommunication.module.css";
import Image from 'next/image';

function Сommunication() {
    return (
        <section className={styles.communication}>
            <div className={styles.communication__description}>

                <div className={styles.communication_title}>
                    <h2 className={styles.communication__title}>По вопросам стоимости и записи обращайтесь</h2>
                </div>
                <p className={styles.communication__phone}>Тел: +7(951)484-00-77</p>

                <div className={styles.iqons__communication}>
                    <a href="tel:+79514840077">
                        <Image className={styles.communication__logo} src='/images/phone.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                        <Image className={styles.communication__logo} src='/images/whatsapp.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <Image className={styles.communication__logo} src='/images/instagram.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                        <Image className={styles.communication__logo} src='/images/telegram.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                    <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                        <Image className={styles.communication__logo} src='/images/vk.svg'
                            alt='logo'
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Сommunication;