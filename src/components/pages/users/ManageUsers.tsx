import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../../config';

export interface Users {
    id: number,
    name: string,
    email: string,
    role: string,
    address: string,
    photo: null
}



function MnageUsers() {
    // const [users, setUsers] = useState([])
    const [users, setUsers] = useState<Users[]>([])

    useEffect(() => {
        document.title = "Manage Users"
        getUsers();
    }, [])


    function getUsers() {

        api.get("users")
            .then((res) => {
                // console.log(res.data)
                setUsers(res.data)
                // console.log(roles)
            })
            .catch((err) => {

                console.error(err)

            })


    }



const handleDelete=(id:Number)=>{
    console.log(id+"Confirmed Delete")

    api.delete(`http://localhost/php_react-api/api/users/${id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.error(err)
        })

}




  return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Users</h4>

                <Link to="/users/create" className='btn btn-outline-primary'> Add New User</Link>

                <div className="card">

                    <div className="table-responsive">
                        <table className='table table-striped'>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Role</th>
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
                                {users.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <div className='d-flex'>

                                                <Link to={`/posts/details/${item.id}`} type="button" className="btn btn-icon btn-outline-primary me-2">
                                                    <span className="bx  bx-search"></span>
                                                </Link>
                                                <Link to={`/posts/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary me-2">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </Link>
                                                <button type="button" onClick={()=>{confirm("Are you sure to delete?") && handleDelete(item.id)}}  className="btn btn-icon btn-outline-danger">
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

export default MnageUsers