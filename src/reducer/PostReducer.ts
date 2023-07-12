import { Post } from "../../type/postType"

type Add ={
    type :"add",
    payload:{
        title:string,
        body:string
    }
}

type Remove = {
    type:"remove",
    payload:{
        id:number
    }
}

type Edit ={
    type:"edit",
    payload:{
        id:number,
        newTitle:string,
        newBody:string
    }
}

export type TypeReducer = Add | Remove | Edit;

export const PostReducer =(post:Array<Post>,action:TypeReducer)=>{
    switch(action.type){
        case "add":
            return [...post,{id:post.length,title:action.payload.title,body:action.payload.body}]
        case "remove":
            return post.filter(item =>item.id !== action.payload.id)
        case "edit":
            return post.map((item)=>{
                
                if(item.id === action.payload.id){
                    if(!item.title && !item.body)return item;
                    item.title = action.payload.newTitle;
                    item.body = action.payload.newBody;
            }
            return item
        })

        default:
        return post
    }
}