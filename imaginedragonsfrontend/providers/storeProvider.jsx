import { createContext, useContext, useState } from "react";

export const MerchContext = createContext({});

function MerchProvider({children}) {
    const merchData = useContext(MerchContext);


    const [merchList, setMerchList] = useState();

    const data = [merchList, setMerchList];


    return (
        <MerchContext.Provider value={data}>
            {children}
        </MerchContext.Provider>
    )

}

export default MerchProvider;