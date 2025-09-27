import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';

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


function ManagePosts() {

    let [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {

        document.title = "Manage Post"
        getData();
    }, [])
    useEffect(() => {
        console.log(posts)
    }, [posts])

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
    function getData() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                // console.log(res.data);
                setPosts(res.data)
            })

            .catch((err) => {

                console.error(err)

            })
    }




    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Posts</h4>

                <Link to="/posts/add" className='btn btn-outline-primary'> Add New</Link>

                <div className="card">

                    <div className="table-responsive">
                        <table className='table table-striped'>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>Test</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum aspernatur amet cum quos eius nihil hic minima voluptates, et iste non ullam odio recusandae, optio praesentium dolorem assumenda reiciendis?</td>
                                    <td>
                                        <div className='d-flex'>

                                        <button type="button" className="btn btn-icon btn-outline-primary me-2">
                                        <span className="tf-icons bx bx-edit"></span>
                                    </button>
                                        <button type="button" className="btn btn-icon btn-outline-danger">
                                        <span className="tf-icons bx bx-trash"></span>
                                    </button>
                                        </div>
                                    </td>
                                </tr> */}
                                {posts.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <div className='d-flex'>

                                                <button type="button" className="btn btn-icon btn-outline-primary me-2">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </button>
                                                <button type="button" className="btn btn-icon btn-outline-danger">
                                                    <span className="tf-icons bx bx-trash"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>




                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ManagePosts