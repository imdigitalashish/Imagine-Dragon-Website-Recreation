import React from 'react'
import styles from "./single-music-card.module.css";
export default function SingleMusicCard({ data }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.overlay}>
                <p>{data.music_title} </p>
                <button>INFO</button>

            </div>
            <img src={`${process.env.LARABACK}/${data.music_thumbnail_link}`} alt="" />
        </div>
    )
}
