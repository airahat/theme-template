import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
// import type CreatePost from './CreatePost';

interface Post {

    userId: number;
    id: number;
    title: string;
    body: string;

}
// type Post = {

//     userId: number;
//     id: number;
//     title:string;
//     body: string;

// }


function CreatePost() {

    let [title, setTitle] = useState<string>("");
    let [body, setBody] = useState<string>("");


    useEffect(() => {

        document.title = "Create Post"
        // postData();
    }, [])
    // useEffect(() => {
    //     console.log(posts)
    // }, [posts])

    // async function getData() {

    //     try {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data = await res.json();
    //         console.log(data)
    //         setPosts(data)
    //     }
    //     catch (err) {
    //         console.error(err)
    //     }
    // }

    // Axios structure
    function postData() {
        alert("Locked and Loaded")



        // axios.get("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) => {
        //         // console.log(res.data);
        //         setPosts(res.data)
        //     })

        //     .catch((err) => {

        //         console.error(err)

        //     })
    }




    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><Link to="/posts" className="text-muted fw-light">Posts /</Link> Create Post</h4>

                <div className="card mt-3">

                <h4 className='p-3'>Create New Post</h4>
                    <div className="card-body">
                        <form onSubmit={postData}>
                            <div className='mb-3'>
                                <label className='form-label'>Title</label>
                                <input type="text" name='title' className='form-control' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Body</label>
                                <textarea name='body' className='form-control' rows={4}> </textarea> 
                            </div>
                            <button className='btn-outline-info' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CreatePost