import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../styles/PortfolioNav.module.css";
import { useRouter } from "next/router";

function PortfolioNav() {
    const router = useRouter();
    return (
        <>

            <nav className={styles.portfolionav__menu}>

                <Link
                    href='/portfolio'
                    className={router.pathname == "/portfolio" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}

                >
                    Все работы
                </Link>

                <Link
                    href='/portfolio_1'
                    className={router.pathname == "/portfolio_1" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}
                >
                    Сложное окрашивание
                </Link>

                <Link
                    href='/portfolio_2'
                    className={router.pathname == "/portfolio_2" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}

                >
                    Креативные
                </Link>

                <Link
                    href='/portfolio_3'
                    className={router.pathname == "/portfolio_3" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}

                >
                    Стрижки
                </Link>


                <Link
                    href='/portfolio_4'
                    className={router.pathname == "/portfolio_4" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}

                >
                    Окрашивание в один тон
                </Link>
                <Link
                    href='/portfolio_5'
                    className={router.pathname == "/portfolio_5" ? `${styles.portfolionav__link} ${styles.active}` : `${styles.portfolionav__link}`}

                >
                    Тонирование и уход
                </Link>
            </nav>

        </>
    );
};

export default PortfolioNav; 