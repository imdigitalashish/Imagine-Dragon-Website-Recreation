import React, { useEffect, useState } from 'react'
import { larabackInstance } from '../../axiosInstance';


import styles from "./merch-component.module.css";
import SingleMerchComponent from './single-merch-component';

export default function MerchSection() {



    const [merchProducts, setMerchProducts] = useState([]);

    useEffect(function () {
        larabackInstance.get("/store/items")
            .then((e) => {
                setMerchProducts(e.data.splice(0, 4));
                console.log(merchProducts)
            })
    }, [])


    const MerchProducts = merchProducts.map(e => <SingleMerchComponent key={e.id} data={e} />);


    return (
        <div className={styles.musicSection}>

            <h2>OFFICIAL MERCH</h2>

            <div className={styles.officialMerchComponent}>
                {MerchProducts}
            </div>

        </div>
    )
}


