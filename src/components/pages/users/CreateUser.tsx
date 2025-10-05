import React, { useEffect, useState } from 'react'

import api from '../../../config';

import { Link } from 'react-router-dom';

import type { Role } from '../roles/ManageRoles';
import type { User } from '../users/ManageUsers';

function CreateUser() {
  const [roles, setRole] = useState<Role[]>([]);
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    role: '',
    role_id: 0,
    address: '',
    photo: undefined
  });
  useEffect(() => {
    document.title = "Create user";
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


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(user)
    const formdata = new FormData();

    formdata.append("name", user.name ?? "");
    formdata.append("email", user.email ?? "");
    formdata.append("address", user.address ?? "");
    formdata.append("role_id", user.role_id.toString());
    formdata.append("photo", user.photo ?? "");
    console.log(formdata)



    api.post("create-user", formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })



      .then((res) => {

        console.log(res)

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

          <h4 className='p-3'>Create New User</h4>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type="text" name='name' className='form-control' value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="text" name='email' className='form-control' value={user?.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Address</label>
                <input type="text" name='address' className='form-control' value={user?.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Role</label>
                <select name="role_id" className='form-select' onChange={(e) => setUser({ ...user, role_id: parseInt(e.target.value) })}>
                  <option value="0" selected disabled>Select a Role</option>
                  {
                    roles.map((role) =>
                      <option value={role.id} key={role.id}>{role.name}</option>
                    )
                  }
                </select>
              </div>

              <div>
                <label className='form-label'>Photo</label>
                <input type="file" name='photo' className='form-control' onChange={(e) => { if (e.target.files !== null) setUser({ ...user, photo: e.target.files[0] }) }} />

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