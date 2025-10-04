import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../../config';

export interface Role {
    id: number;
    name: string;
}

function ManageRoles() {

    const [roles, setRoles] = useState<Role[]>([])

    useEffect(() => {
        console.log(roles)
    }, [roles])
    useEffect(() => {
        getRoles()
    }, []
    )

    function getRoles() {

        api.get("roles")
            .then((res) => {
                // console.log(res.data)
                setRoles(res.data)
                // console.log(roles)
            })
            .catch((err) => {

                console.error(err)

            })


    }

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Dashboard /</span> Roles</h4>

                <Link to="/roles/create" className='btn btn-outline-primary mb-3'> Add New</Link>

                <div className="card">

                    <div className="table-responsive">
                        <table className='table table-striped'>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((item) =>
                                    <tr key={item.id}>
                                        <th>{item.id}</th>
                                        <th>{item.name}</th>
                                        <th>
                                            <div className='d-flex '>
                                                <Link to="/roles/edit" className='btn btn-outline-info'> Edit</Link>
                                                <button className='btn btn-outline-danger'>Delete</button>
                                            </div>
                                        </th>
                                    </tr>



                                )}
                            </tbody>




                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ManageRoles