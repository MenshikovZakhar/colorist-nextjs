import React from 'react';
import styles from "../styles/ImagePopup.module.css";
import Image from 'next/image';
import classNames from 'classnames';


export const ImagePopup = ({ isOpen, onClose, card }) => {
    const classPopup = classNames(isOpen ? `${styles.popup_opened} ${styles.popup}` : `${styles.popup}`);

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={classPopup} onMouseDown={handleMouseDown}>
            <div className={styles.popup__figure}>

                {card.src && (<Image alt="" className={styles.popup__container} src={card.src} width={150} height={150} unoptimized />)}

                <button
                    className={styles.popup__close}
                    aria-label='Close'
                    type='button'
                    onClick={() => onClose(false)}
                ></button>
            </div>
        </div>
    );
};