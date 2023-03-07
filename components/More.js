import styles from "../styles/More.module.css";
export const More = ({ addCounter }) => {
    return (
        <section className={styles.more}>
            <button type='button' className={styles.more__button} onClick={addCounter}>
                Ещё
            </button>
        </section>
    );
};