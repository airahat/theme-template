import React, { useEffect, useState } from 'react'

import api from '../../../config';

import { Link } from 'react-router-dom';

import type { Role } from '../roles/ManageRoles';

function CreateUser() {
  const [roles, setRole] = useState<Role[]>([]);
useEffect(()=>{
  document.title="Create user";
  getRoles();
})

    function getRoles() {

        api.get("roles")
            .then((res) => {
                // console.log(res.data)
                setRole(res.data)
                // console.log(roles)
            })
            .catch((err) => {

                console.error(err)

            })


    }





  return (
    <>
            <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><Link to="/users" className="text-muted fw-light">User /</Link> Create New User</h4>

            <div className="card mt-3">

                <h4 className='p-3'>Create New Role</h4>
                <div className="card-body">
                    <form >
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input type="text" name='name' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input type="text" name='email' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Address</label>
                            <input type="text" name='address' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Role</label>
                            <select name="role_id" className='form-select'>
                              <option value="0" selected disabled>Select a Role</option>
                            {
                              roles.map((role)=>
                                <option value={role.id} key={role.id}>{role.name}</option>
                              )
                            }
                            </select>
                        </div>

                        <button className='btn-outline-info' type='submit'>Submit</button>
                    </form>
                </div>
            </div>

        </div>
        </>
  )
}

export default CreateUser