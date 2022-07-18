import React, { useContext } from 'react'

import { useRouter } from 'next/router';
import { MerchContext } from '../../providers/storeProvider';

import styles from "./storestyle.module.css";

export default function MerchDetailPage() {
    const [merchList, setMerchList] = useContext(MerchContext);
    const router = useRouter();


    const { id } = router.query;

    const merchObject = merchList.filter((merch) => merch.id == id)[0];

    console.log(merchObject);

    return (
        <div className={styles.singleStorePage}>

            <img src={`${process.env.LARABACK}/${merchObject.image_of_item}`} alt="" srcset="" />
            <div className={styles.StorePageContent}>
                <h1>{merchObject.name_of_item}</h1>
                <p>Category: {merchObject.category_of_item}  <br></br> QTY: {merchObject.price_of_item}</p>
                <h3>Price: {merchObject.price_of_item}</h3>

                <p>Expected Date Of Delivery: {merchObject.expected_date_of_delivery}</p>
            </div>
        </div>
    )
}
