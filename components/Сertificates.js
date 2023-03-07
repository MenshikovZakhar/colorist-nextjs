import React, { useState, useEffect } from 'react';
import styles from "../styles/Partners.module.css";
import Images from './Image_3';
import dynamic from 'next/dynamic';
const InfiniteCarousel = dynamic(import('react-leaf-carousel'), { ssr: false });
import { arrayCertificates } from '../constants/arrayPortfolio';

const Сertificates = ({ onCardClick }) => {

    return (
        <div className={styles.partners}>
            <div className={styles.partners__description}>
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
                    arrows={true}
                    autoCycle={false}
                    pauseOnHover={true}
                    cycleInterval={3000}
                    duration={1000}
                    adaptiveHeight={true}

                >

                    {arrayCertificates.map((image, index) => {

                        return (

                            <Images key={index}
                                src={image.src}
                                image={image}
                                onCardClick={onCardClick}
                            />
                        )
                    })
                    }
                </InfiniteCarousel>
            </div>
        </div>
    );
}



export default Сertificates;