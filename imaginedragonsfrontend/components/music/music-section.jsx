import React, { useEffect, useState } from 'react'
import { larabackInstance } from '../../axiosInstance';

import styles from "./music-section.module.css";
import SingleMusicCard from './single-music-card';

export default function MusicSection() {


    const [listOfMusic, setListOfMusic] = useState([]);

    useEffect(() => {
        larabackInstance.get("/musics")
            .then((e) => {
                setListOfMusic(e.data.splice(0, 4));

            })
    }, [])


    let MusicCards = listOfMusic.map((e) => {
        return <SingleMusicCard key={e.id} data={e} />
    })


    return (
        <div className={styles.musicSection}>
            <h2>
                MUSIC
            </h2>


            <div className={styles.listOfAllMusicCards}>
                {MusicCards}
            </div>




        </div>
    )
}
