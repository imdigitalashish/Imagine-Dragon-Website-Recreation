import React, { useEffect, useState } from 'react'
import { larabackInstance } from '../../axiosInstance';
import SingleTicketCard from './single-ticket-card';
import Link from "next/link";
import styles from "./tour-section.module.css";

export default function TourSection({ paginate }) {


    const [toursTickets, setTourTickets] = useState([]);


    useEffect(() => {
        larabackInstance.get('/tours')
            .then((e) => {
                setTourTickets(paginate ? e.data.splice(0, 6) : e.data);
                console.log(paginate ? toursTickets.splice(0, 7) : toursTickets);
            })
    }, []);


    let TickerCards = toursTickets.map((e) => <SingleTicketCard key={e.id} data={e} />)



    return (
        <div className={styles.tourSection}>
            <h2>TOUR</h2>
            <p>VIP TICKETS: Experience Imagine Dragons as a VIP on their 2022
                Mercury Tour, complete with a private viewing platform, interactive activities, brand new immersive experiences in the Mercury Lounge and much more! Exclusive packages are available, and all packages include a premium ticket to the show and limited-edition VIP
                merchandise.<br />
                Buy Mercury Tour VIP now
                Europe VIP experiences can be found
                here!</p>

            <div className={styles.tourCardHolder}>
                {TickerCards}
                {paginate ? <Link href='/tour'>
                    <div className={styles.allTourLink}>
                        <p>All Dates</p>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </Link> : <></>}
            </div>




        </div>
    )
}
