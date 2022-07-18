import React from 'react'


import styles from "./single-merch-component.module.css";

import Link from "next/link";

export default function SingleMerchComponent({ data }) {
    console.log(data);


    return (
        <div className={styles.cardContainer}>
            <div className={styles.overlay}>
                <p>Price: {data.price_of_item}</p>
                <p>Sizes Available: </p>
                <p style={{ fontSize: "1.4em" }}>{data.list_of_sizes}</p>
                <Link href={"/store/" + data.id}><button>Buy Now</button></Link>

            </div>
            <img src={`${process.env.LARABACK}/${data.image_of_item}`} alt="" />

            <h2>{data.name_of_item}</h2>
            <h3>Stock: {data.quantity}</h3>
        </div>
    )
}
