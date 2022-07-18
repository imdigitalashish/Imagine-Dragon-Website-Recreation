import React from 'react'
import { larabackInstance } from '../../axiosInstance';

import styles from "./music-index.module.css";
import SingleMusicComponent from '../../components/music/single-music-component';

export default function MusicPage(props) {

    const data = props.data;

    console.log(data);

    return (
        <div className={styles.musicPage}>

            <h1>MUSIC</h1>
            {props.data.map(e =>  <SingleMusicComponent key={e.id} data={e} />)}
           

        </div>
    )
}


export async function getServerSideProps(context) {

    const response = await larabackInstance.get('/musics');
    const responseData = await response.data;


    return {
        props: { data: responseData }, // will be passed to the page component as props
    }
}
