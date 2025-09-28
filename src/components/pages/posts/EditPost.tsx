import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import type CreatePost from './CreatePost';




function EditPost() {
    const[post, setPost]= useState({
        title: "",
        body: ""

    })
    const params = useParams();
    const queryId = params?.id;

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${queryId}`)
        .then((res) => {
            // console.log(res.data)
            let data=res.data;
            setPost(data)

        })
        .catch((err) => console.error(err))


}, [queryId])

const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    console.log(post)
}



    // let [title, setTitle] = useState<string>("");
    // let [body, setBody] = useState<string>("");



    useEffect(() => {

        document.title = "Create Post"
        // postData();
    }, [])



    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><Link to="/posts" className="text-muted fw-light">Posts /</Link> Create Post</h4>

                <div className="card mt-3">

                <h4 className='p-3'>Update Post</h4>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Title</label>
                                <input type="text" name='title' className='form-control' value={post.title} onChange={(e)=>setPost({...post,title:e.target.value})} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Body</label>
                                <textarea name='body' className='form-control' rows={4} value={post.body}  onChange={(e)=>setPost({...post,body:e.target.value})} > </textarea> 
                            </div>
                            <button className='btn-outline-info' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>


        </>
    )
}

export default EditPost
