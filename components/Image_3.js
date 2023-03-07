import React from 'react';
import styles from "../styles/Image.module.css";
import Image from 'next/image';
function Images({ image, onCardClick }) {

    function handleClick() {
        onCardClick(image);
    }

    return (
        <div>
            <Image className={styles.image_3} src={image.src}
                alt=""
                width={150}
                height={150}
                onClick={handleClick}
                unoptimized
            />

        </div>
    )
}

export default Images;