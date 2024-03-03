import { useState } from 'react'
import styles from '../css/Content.module.css'
import { Cards } from './Cards'

export const Content = () => {


    const [showAvailable, setShowAvailable] = useState(false);

    const handleClick = () => {
        setShowAvailable(!showAvailable);
    };

    return (
        <div className={styles.contenedor}>
            <div className={styles.text}>
                <h1 className={styles.title}>Our Collection</h1>
                <p className={styles.paragraph}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                <div className={styles.buttonsContent}>
                    <button onClick={handleClick} className={showAvailable ? styles.button : styles.buttonActive }>
                        All products
                    </button>
                    <button onClick={handleClick} className={showAvailable ? styles.buttonActive : styles.button}>
                        Available Now
                    </button>
                </div>
            </div>
            <Cards showAvailable={showAvailable} />
        </div>
    );
}
