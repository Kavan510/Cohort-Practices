import { useEffect, useState } from "react";

export function usePost(){
    const [post,setPost] =useState({});


async function getPost() {
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // https notu inlcude to errro avti ti 
    const json = await respone.json();
    setPost(json)
}

    useEffect(()=>{
        getPost();
    },[]);


return post.title;
}