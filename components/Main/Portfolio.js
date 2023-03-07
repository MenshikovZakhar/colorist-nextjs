import Carousel from './Carousel';
import Image from 'next/image';
import React from 'react';
import styles from "../../styles/Portfolio.module.css";
class Portfolio extends React.PureComponent {
  render() {
    return (
      <Carousel
        images={[
          <Image className={styles.slider} src='/images/slide1.jpg'
            alt='1'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide2.jpg'
            alt='2'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide3.jpg'
            alt='3'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide4.jpg'
            alt='4'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide5.jpg'
            alt='5'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide6.jpg'
            alt='6'
            width={150}
            height={150}
            unoptimized />,
          <Image className={styles.slider} src='/images/slide7.jpg'
            alt='7'
            width={150}
            height={150}
            unoptimized />
        ]}
        radius={360}
      />
    )
  }
}

export default Portfolio;