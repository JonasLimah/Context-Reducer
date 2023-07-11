import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { Post } from "../../type/postType"
import { PostReducer, TypeReducer } from "@/reducer/PostReducer"


type TypeContextData ={
    post:Array<Post>
    dispatch:Dispatch<TypeReducer>
}

export const ContextPost = createContext<TypeContextData | null>(null);
type Props ={
    children:ReactNode
}
export const PostProvider = ({children}:Props)=>{
    const [post,dispatch] = useReducer(PostReducer,[])
    return(
        <ContextPost.Provider value={{post,dispatch}}>{children}</ContextPost.Provider>
    );
}