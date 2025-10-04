import React from 'react'
import { Link } from "react-router-dom";
// import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../../../config';




function CreateRole() {

    let [name, setName] = useState<string>("");



    useEffect(() => {

        document.title = "Create Roles"
        // postData();
    }, [])

    // Axios structure
    function roleData(e: React.FormEvent) {
        // console.log("Title:"+name)

        e.preventDefault()
        // alert("Locked and Loaded")
        const data = { name };
        api.post("create-roles", data)
            .then((res) => {
                console.log(res.data);
                setName("");
                alert("Data Saved Successfully")
            })


    }

    
    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><Link to="/roles" className="text-muted fw-light">Roles /</Link> Create New Role</h4>

            <div className="card mt-3">

                <h4 className='p-3'>Create New Role</h4>
                <div className="card-body">
                    <form onSubmit={roleData}>
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input type="text" name='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
                        </div>

                        <button className='btn-outline-info' type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </>
)

}

export default CreateRole