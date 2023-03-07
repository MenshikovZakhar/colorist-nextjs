import Image from 'next/image';

import styles from "../../styles/Haircolor.module.css";
function Haircolor() {
    return (
        <section className={styles.haircolor_me}>
            <div className={styles.haircolor__description}>
                <div className={styles.haircolor_me__description}>
                    <div className={styles.haircolor_me__name}>

                        <Image className={styles.haircolor__description_photo} src='/images/valeria__photo-3.png'
                            alt=""
                            width={150}
                            height={150}
                            unoptimized
                        />

                        <p className={styles.haircolor__name}>Валерия Смоленцева</p>
                        <p className={styles.haircolor__name}>Парикмахер широкого профиля, колорист</p>
                    </div>
                    <div className={styles.haircolor_me__description_text}>
                        <p className={styles.haircolor__description_subtitle}>Смена цвета волос очень сильно влияет на женщину. Цвет волос становится
                            отражением совершенно новой натуры, значимой и неотразимой. И это чувствуют все: родные, друзья, коллеги по работе, знакомые.
                            Смена цвета волос поможет радикально изменить мироощущение. Цвет волос влияет на характер, меняя наши наклонности, привычки,
                            делает всю жизнь новой. Внезапная смена имиджа – это желание перемен. Решение вопроса в пользу ярких оттенков говорит, что
                            женщина хочет выйти из состояния застоя. Мозг в стрессовой ситуации ищет способ разрядить атмосферу, и изменение внешности
                            – это как раз та самая разрядка. Вы как бы уходите от образа, который находится в стрессовом состоянии. </p>
                    </div>
                </div>
                <div className={styles.haircolor_me__text}>
                    <p className={styles.haircolor__description_subtitle}>По статистике, за последние несколько лет в нашей стране все больше и больше
                        женщин окрашивают волосы. Причины разные: подчеркнуть свою индивидуальность или сменить стиль,  закрасить седину,  стать
                        светлее или темнее. Но в каждом случае женщина хочет стать чуточку красивее. А значит, стать более уверенной в себе.</p>
                    <p className={styles.haircolor__description_subtitle}>Я Вам в этом с удовольствием помогу!</p>
                </div>
                <div className={styles.haircolor_me__description}>
                    <div className={styles.haircolor__description_img}>
                        <Image className={styles.haircolor__img} src='/images/haircolor__img.jpg'
                            alt=""
                            width={150}
                            height={150}
                            unoptimized
                        />
                    </div>
                    <div className={styles.haircolor_me__description_text}>
                        <p className={styles.haircolor__description_subtitle}>Сегодня можно выбирать не только оттенки, но и способы окрашивания,
                            получая совершенно разные результаты.  Существуют различные техники окрашивания волос.</p>
                        <p className={styles.haircolor__description_subtitle}>С помощью  техник  сложного окрашивания (Аиртач, Шатуш, Балаяж,
                            Мелирование)  можно освежить образ, изменить кардинально цвет волос и замаскировать седину. Носится окрашивание в этих
                            техниках в среднем 6-8 месяцев. </p>
                        <p className={styles.haircolor__description_subtitle}>Если нет желания воздействовать на пигмент, но хочется попробовать себя в
                            новом образе  на помощь придёт тонирование. Тонирование волос — окрашивание нестойким красителем, который постепенно
                            вымывается во время мытья волос (обычно оттенок значительно тускнеет уже через 1-1,5 месяца). Однако он незаменим для
                            тех, кто хочет сначала проверить, пойдет ли ему тот или иной оттенок, а затем уже принять решение. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Haircolor;