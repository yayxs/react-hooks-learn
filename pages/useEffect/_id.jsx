import React , { useState,useEffect } from 'react'

function BlogView({id}){
    const [blog,setBlog] = useState(null)

    useEffect(()=>{
        const doAsync = async ()=>{
            setBlog(null)
            const res = await fetch()
        }
    })
}

export default BlogView