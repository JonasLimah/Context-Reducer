'use client'

import { Header } from "@/components/header";
import { PostArea } from "@/components/postArea";

import { PostProvider } from "@/context/PostContext";

const Page =()=>{
 
    return(
        <div>
           <Header/>
            <PostProvider>
                <PostArea/>
            </PostProvider>
        </div>
    );
}

export default Page;