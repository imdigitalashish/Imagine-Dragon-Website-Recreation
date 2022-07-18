import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import { MusicContext } from '../../providers/musicProvider';
export default function MusicDetailPage() {

    const router = useRouter();

    const [music, setMusicList] = useContext(MusicContext);

    const { id } = router.query;

    const musicObject = music.filter((music) => music.id == id)[0];


    const date = new Date(musicObject.created_at);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    
    let humanReableDate = `${monthNames[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()}`

    return (
        <div style={{ display: "flex", padding: "3em", gap: "2em", color: "white"}}>

            <img src={`${process.env.LARABACK}/${musicObject.music_thumbnail_link}`} alt="" />

            <div>
                <h1>{musicObject.music_title}</h1>
                <p>{humanReableDate}</p>
                <p>Likes: {musicObject.likes}</p>
            </div>
        </div>
    )
}
