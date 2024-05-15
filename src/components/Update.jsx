import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Update() {
    const {id}=useParams()
    const [values,setValues] = useState({
        username: '',
        email: '',
        status: '',
      })
    
      const navigate=useNavigate();
    
    useEffect(()=>{
        axios.get('https://employee-data-4qyb.onrender.com/users/'+id)
        .then(res=>{
            setValues(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const handleUpdate=(event)=>{
        event.preventDefault()
        axios.put('https://employee-data-4qyb.onrender.com/users/'+id,values)
        navigate('/')
    }
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-light'>
     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update Employee</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-2'>
          <label htmlFor="name">Name:</label>
          <input onChange={e => setValues({...values,name: e.target.value})} value={values.username}  type="text" name='name'
          className='form-control' placeholder='Enter your name' />
        </div>

        <div className='mb-2'>
          <label htmlFor="email">Email:</label>
          <input onChange={e => setValues({...values,email: e.target.value})} value={values.email}   type="email" name='email'
          className='form-control' placeholder='Enter your email' />
        </div>


        <div className='mb-2'>
          <label htmlFor="phone">Status:</label>
         <select className='btn btn-primary' onChange={e => setValues({...values,status: e.target.value})} value={values.status}  >
        <option className='btn btn-success'>Active</option>
        <option className='btn btn-danger'>Inactive</option>
         </select>
   
      </div>
        <button className='btn btn-success'>Update</button>

        <Link to="/" className='btn btn-primary ms-3'>Back</Link>


      </form>
    </div>
   </div>
  )
}

export default Update
