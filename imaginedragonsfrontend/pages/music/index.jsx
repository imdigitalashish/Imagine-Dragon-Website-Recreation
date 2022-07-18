import React, { useContext } from 'react'
import { larabackInstance } from '../../axiosInstance';

import styles from "./music-index.module.css";
import SingleMusicComponent from '../../components/music/single-music-component';
import { MusicContext } from '../../providers/musicProvider';

export default function MusicPage(props) {

    const data = props.data;
    const [musicList, setMusicList] = useContext(MusicContext)

    setMusicList(data);

    return (
        <div className={styles.musicPage}>

            <h1>MUSIC</h1>
            {props.data.map(e => <SingleMusicComponent key={e.id} data={e} />)}


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
