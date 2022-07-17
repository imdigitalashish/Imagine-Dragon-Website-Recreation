import React from 'react'


import styles from "./single-merch-component.module.css";

export default function SingleMerchComponent({ data }) {
    console.log(data);


    return (
        <div className={styles.cardContainer}>
            <div className={styles.overlay}>
                <p>Price: {data.price_of_item}</p>
                <p>Sizes Available: </p>
                <p style={{fontSize: "1.4em"}}>{data.list_of_sizes}</p>
                <button>Buy Now</button>
            
            </div>
            <img src={`${process.env.LARABACK}/${data.image_of_item}`} alt="" />

            <h2>{data.name_of_item}</h2>
        </div>
    )
}
