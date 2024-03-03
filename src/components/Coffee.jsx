import styles from '../css/Cards.module.css'



export const Coffee = ({ coffee }) => {

    return (

        <div className={styles.card}>
            <h3 className={coffee.popular === 'popular' ? styles.popular : styles.noPopular}>{coffee.popular}</h3>
            <img className={styles.cardImage} src={coffee.img}></img>
            <div className={styles.cardContent} >
                <h3 className={styles.nameOfCoffe}>{coffee.name}</h3>
                <p className={styles.price}>${coffee.price.toFixed(2)}</p>
            </div>
            <div className={styles.cardSubContent}>
                <div className={styles.subContent}>
                    <img src={coffee.rating === "No Rating" ? "./src/assets/star.svg" : "./src/assets/Star_fill.svg"} />
                    <p className={styles.rating}>{coffee.rating}</p>
                    <p className={styles.votes}>{coffee.votes}</p>
                </div>
                <div className={styles.contentSoldOut}>
                    <p className={styles.soldOut}>{coffee.available === "Sold out" ? "Sold Out" : "" }</p>
                </div>


            </div>
        </div>




    )
}
