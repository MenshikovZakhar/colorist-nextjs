import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import styles from "../../styles/Carousel.module.css";
class Carousel extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentIndex: (this.state.currentIndex + 1) % this.props.images.length
            })
        }, 4000)
    }

    render() {
        const { images, radius = 0 } = this.props;
        const { currentIndex } = this.state;
        const len = images.length || 0;
        const angle = 2 * Math.PI / len;

        return (
            <section className={styles.slider_portfolio}>
                <Link className={styles.portfolio_title} href='/portfolio'>
                    <h1 className={styles.portfolio__title}>Портфолио</h1></Link>
                <div className={styles.slider_1}>
                    <div className={styles.slider__viewport}
                        style={{
                            transform: `translateZ(${-radius}px) rotateY(${-currentIndex * angle}rad)`
                        }}>
                        {images.map((image, index) => {
                            const indexAngle = index * angle;
                            const z = Math.cos(indexAngle) * radius;
                            const x = Math.sin(indexAngle) * radius;

                            return (
                                <div
                                    key={index}

                                    className={index === currentIndex ? styles.slider__image_active :
                                        styles.slider__image
                                    }


                                    style={{
                                        transform: `translateZ(${z}px) translateX(${x}px) rotateY(${indexAngle}rad)`
                                    }}
                                    src={image}
                                >{image}</div>
                            )
                        })
                        }
                    </div>
                </div>

            </section >
        )
    }
}
export default Carousel;