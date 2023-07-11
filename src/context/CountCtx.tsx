import { ReactNode, createContext, useState } from "react";


type ContexType ={
    count:number,
    setCount:(n:number)=>void
}

export const CounteCtx = createContext<ContexType | null>(null);
type Props = {children:ReactNode}
export const CountProvider =({children}:Props)=>{
    const [count,setCount] = useState(0)
    return(
        <CounteCtx.Provider value={{count,setCount}}>{children}</CounteCtx.Provider>
    );
}