import { Dispatch, ReactNode, createContext, useEffect, useReducer } from "react"
import { Post } from "../../type/postType"
import { PostReducer, TypeReducer } from "@/reducer/PostReducer"


type TypeContextData ={
    posts:Array<Post>
    dispatch:Dispatch<TypeReducer>
}

export const PostContext = createContext<TypeContextData>({posts:[],dispatch:()=>null});
type Props ={
    children:ReactNode
}
export const PostProvider = ({children}:Props)=>{
    const [posts,dispatch] = useReducer(PostReducer,JSON.parse(localStorage.getItem("posts")||"[]"))
    
    useEffect(()=>{
       localStorage.setItem("posts",JSON.stringify(posts))
    },[posts])
    return(
        <PostContext.Provider value={{posts,dispatch}}>{children}</PostContext.Provider>
    );
}