import styles from "../../styles/Partners.module.css";
import Image from 'next/image';
import dynamic from 'next/dynamic';
const InfiniteCarousel = dynamic(import('react-leaf-carousel'), { ssr: false });



const Partners = () => {

    return (
        <div className={styles.partners}>
            <div className={styles.partners__description}>
                <h1 className={styles.partners__title}>Партнёры</h1>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 850,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1100,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                            },
                        },
                    ]}

                    slidesToScroll={1}
                    slidesToShow={7}
                    arrows={false}
                    autoCycle={true}
                    pauseOnHover={false}
                    cycleInterval={3000}
                    duration={1000}
                    adaptiveHeight={true}

                >
                    <div>

                        <Image className={styles.partners__img} src='/images/brands__img-1.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-2.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-3.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-4.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-5.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-6.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-7.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-8.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div>
                        <Image className={styles.partners__img} src='/images/brands__img-9.png'
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                </InfiniteCarousel>
            </div>
        </div>
    );
}

export default Partners;