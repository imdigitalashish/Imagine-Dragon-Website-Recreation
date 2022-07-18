import React from 'react'

import styles from "./single-music.module.css";
import Link from "next/link";

export default function SingleMusicComponent({ data }) {

    const date = new Date(data.created_at);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    
    let humanReableDate = `${monthNames[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()}`


    return (
        <div className={styles.singleMusicComp}>
            <div className={styles.musicCompLeft}>
                <img src={`${process.env.LARABACK}/${data.music_thumbnail_link}`} alt="" />


                <div>
                    <Link href={"music/"+data.id}>
                        <h3>{data.music_title}</h3>
                    </Link>
                    <p>{humanReableDate}</p>


                    <div className={styles.likeHolder}>
                        <i className="fa-regular fa-heart"></i>
                        <p>{data.likes}</p>
                    </div>

                    <div className={styles.musicButtonHolder}>
                        <a href={data.msuic_spotify_links} target="_blank">
                            <i className="fa-solid fa-circle-play"></i>
                            Listen On Spotify
                        </a>
                    </div>
                </div>

            </div>



            <svg style={{ padding: "2em" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 156.33"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line className={styles.clsOfSVG} x1="1" y1="122.14" x2="1" y2="42" /><line className={styles.clsOfSVG} x1="16" y1="19.54" x2="16" y2="135.8" /><line className={styles.clsOfSVG} x1="30" x2="30" y2="150.46" /><line className={styles.clsOfSVG} x1="46" y1="42.01" x2="46" y2="116.26" /><line className={styles.clsOfSVG} x1="61" y1="60.58" x2="61" y2="99.66" /><line className={styles.clsOfSVG} x1="78" y1="42.01" x2="78" y2="122.13" /><line className={styles.clsOfSVG} x1="96" y1="16.61" x2="96" y2="135.8" /><line className={styles.clsOfSVG} x1="110.5" y1="154.37" x2="111" /><line className={styles.clsOfSVG} x1="127" y1="124.09" x2="127" y2="43.96" /><line className={styles.clsOfSVG} x1="142" y1="21.5" x2="142" y2="137.76" /><line className={styles.clsOfSVG} x1="156" y1="1.96" x2="156" y2="152.41" /><line className={styles.clsOfSVG} x1="172" y1="43.97" x2="172" y2="118.22" /><line className={styles.clsOfSVG} x1="187" y1="62.53" x2="187" y2="101.61" /><line className={styles.clsOfSVG} x1="204" y1="43.97" x2="204" y2="124.08" /><line className={styles.clsOfSVG} x1="222" y1="18.57" x2="222" y2="137.76" /><line className={styles.clsOfSVG} x1="236.5" y1="156.32" x2="237" y2="1.96" /></g></g></svg>



        </div>
    )
}
