import React, { useContext, useEffect, useState } from 'react'
import { larabackInstance } from '../../axiosInstance';
import { MerchContext } from '../../providers/storeProvider';


import styles from "./merch-component.module.css";
import SingleMerchComponent from './single-merch-component';

export default function MerchSection({ paginate }) {



    const [merchProducts, setMerchProducts] = useState([]);
    const [merchList, setMerchList] = useContext(MerchContext);

    useEffect(function () {
        larabackInstance.get("/store/items")
            .then((e) => {
                setMerchProducts(paginate ? e.data.splice(0, 4) : e.data);
                console.log(merchProducts)
                setMerchList(e.data);
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


