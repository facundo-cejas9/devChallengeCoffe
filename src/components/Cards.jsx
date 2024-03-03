import styles from '../css/Cards.module.css'
import { Data } from '../data/data';
import { Coffee } from './Coffee'


export const Cards = ({showAvailable }) => {


    const filteredData = showAvailable ? Data.filter(coffee => coffee.available === "available") : Data;

    return (
        <div className={styles.cardsContainer}>
            {filteredData.map((coffee, index) => (
                <Coffee key={index} coffee={coffee} />
            ))}
        </div>
    );
}
