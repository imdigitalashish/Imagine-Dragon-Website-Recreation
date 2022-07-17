import React from 'react'
import styles from "./single-ticket.module.css";



export default function SingleTicketCard({ data }) {

    console.log(data);
    const humanReadableDate = new Date(data.tour_date);
    console.log(humanReadableDate)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    return (
        <div className={styles.singleCard}>

            <div className={styles.leftCard}>
                <p style={{ fontSize: "1.6em", color: "white" }}>{monthNames[humanReadableDate.getMonth()]}</p>
                <p style={{ fontSize: "4em", color: "white" }}>{humanReadableDate.getDate()}</p>
            </div>

            <div>


                <div className={styles.middleCard}>
                    <div className={styles.middleCardAddressHolder}>
                        <p>{data.location_of_tour}</p>
                        <p>{data.destination_of_tour}</p>
                    </div>

                    <div className={styles.ticketHolder}>

                        <svg id={styles.tickerCounter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.51 43.45"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M9.77,22.93,28.54,9.26l8.2,11.26L18,34.19ZM28.19.89a4.65,4.65,0,0,1,6.49,1L38.1,6.6a3.49,3.49,0,1,0,4.1,5.64l3.42,4.69a4.65,4.65,0,0,1-1,6.49L18.32,42.56a4.65,4.65,0,0,1-6.49-1l-3.42-4.7a3.48,3.48,0,0,0-4.1-5.63L.89,26.52a4.65,4.65,0,0,1,1-6.49ZM16.09,35.56a2.33,2.33,0,0,0,3.25.51L38.11,22.4a2.32,2.32,0,0,0,.51-3.25L30.42,7.89a2.32,2.32,0,0,0-3.25-.51L8.4,21.05a2.31,2.31,0,0,0-.51,3.24Z" /></g></g></svg>
                        <a href={data.tickets_link} target="_blank"> 
                            <h4>TICKET</h4>
                        </a>
                    </div>

                    <div className={styles.ticketHolder}>

                        <svg id={styles.tickerCounter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.51 43.45"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M9.77,22.93,28.54,9.26l8.2,11.26L18,34.19ZM28.19.89a4.65,4.65,0,0,1,6.49,1L38.1,6.6a3.49,3.49,0,1,0,4.1,5.64l3.42,4.69a4.65,4.65,0,0,1-1,6.49L18.32,42.56a4.65,4.65,0,0,1-6.49-1l-3.42-4.7a3.48,3.48,0,0,0-4.1-5.63L.89,26.52a4.65,4.65,0,0,1,1-6.49ZM16.09,35.56a2.33,2.33,0,0,0,3.25.51L38.11,22.4a2.32,2.32,0,0,0,.51-3.25L30.42,7.89a2.32,2.32,0,0,0-3.25-.51L8.4,21.05a2.31,2.31,0,0,0-.51,3.24Z" /></g></g></svg>
                        <a href={data.tickets_link_vip} target="_blank">
                            <h4>VIP</h4>
                        </a>
                    </div>

                </div>

            </div>

            <div className={styles.rightCard}>

            </div>


        </div>
    )
}
