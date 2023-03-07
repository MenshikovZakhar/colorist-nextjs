import React from 'react';
import Link from 'next/link';
import styles from "../styles/PageNotFound.module.css";
function Custom404() {
    return (
        <div className={styles.page}>
            <div className={styles.page_notfound}>
                <h3 className={styles.notfound__title}>
                    404
                </h3>
                <p className={styles.notfound__subtitle} >
                    Страница не найдена
                </p>

                <Link
                    href='/'
                    className={styles.notfound__link}
                >
                    Назад
                </Link>
            </div>
        </div>
    );
}
export default Custom404;