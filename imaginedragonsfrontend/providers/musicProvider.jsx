import { createContext, useContext, useState } from "react";


export const MusicContext = createContext({});

function MusicProvider({ children }) {


    const musicData = useContext(MusicContext);

    const [musicList, setMusicList] = useState();


    const data = [musicList, setMusicList];
    return (
        <MusicContext.Provider value={data}>
            {children}
        </MusicContext.Provider>
    )

}


export default MusicProvider;