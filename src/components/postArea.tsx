import { PostContext } from "@/context/PostContext";
import { useContext, useState } from "react";


export const PostArea =()=>{
   const [title,setTitle] = useState('')
   const [body,setBody] = useState('')
    const Posts = useContext(PostContext)
   const handleAdd=()=>{
    if(title.trim()==="" || body.trim()==="")return false;
    Posts?.dispatch({
        type:"add",
        payload:{
            title:title.trim(),
            body:body.trim()
        }
    })
    setTitle('')
    setBody('')
   } 
   const handleRemove=(id:number)=>{
    Posts?.dispatch({
        type:'remove',
        payload:{id}
    })
   }
   const handleEdit=(id:number)=>{
    const post = Posts?.posts.find(item=>item.id === id)
    if(!post)return false;
    const newTitle = window.prompt("edite seu Titulo",post.title)
    const newBody = window.prompt("edite seu comentario",post.body)
    if((!newTitle || newTitle.trim() === "") || (!newBody || newBody.trim() === ""))return false;
    Posts?.dispatch({
        type:"edit",
        payload:{
            id,
            newTitle:newTitle.trim(),
            newBody:newBody.trim()
        }
    })
   }
   return(
        <div>
            <h1>Titulo do post:</h1>
            <input value={title} onChange={e=>setTitle(e.target.value)} className="text-black p-2 rounded outline-none" type="text" />
            <h1>Corpo do post:</h1>
            <textarea value={body} onChange={e=>setBody(e.target.value)} className=" text-black p-2 rounded w-60 h-20 outline-none"  autoComplete="on"style={{resize:"none"}}  ></textarea>
            <div onClick={handleAdd} className="  border rounded w-40 flex justify-center cursor-pointer  p-2 my-2 hover:opacity-50 ">
                <button>Enviar</button>
               
            </div>
            <p>Total de Post: {Posts?.posts.length}</p>
            <hr />
            <div>
                {Posts?.posts.map((item)=>(
                    <section key={item.id} className="m-1 p-2">
                        <hr />
                      
                        <div >
                       
                            <h1 className="font-semibold text-lg">{item.title}</h1>
                            
                            <p className="font-serif text-base">{item.body}</p>
                        </div>
                        <div className="flex justify-end ">
                            <p onClick={()=>handleEdit(item.id)} className=" cursor-pointer hover:opacity-50">[editar]</p>
                            <p onClick={()=>handleRemove(item.id)} className=" cursor-pointer hover:opacity-50">[excluir]</p>
                        </div>
                        <hr />
                    </section>
                ))}
            </div>
        </div>
    );
}   