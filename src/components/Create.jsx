import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'


function Create() {
    const [values,setValues]=useState({
        id:'',
        username:'',
        email:'',
        status:'',
    })
    const navigate= useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://employee-data-4qyb.onrender.com/users',values)
        .then(res=>{
            console.log(res)
            navigate('/')
        }
            
        )
        .catch(err=>console.log(err))
    }
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
     <h1>Add a Employee</h1>
     <form onSubmit={handleSubmit}>
     <div className='mb-2'>
         <label htmlFor="name">Id:</label>
         <input onChange={e => setValues({...values,id: e.target.value})} type="text" name='id'
         className='form-control' placeholder='Enter your Id' />
       </div>
       <div className='mb-2'>
         <label htmlFor="name">Name:</label>
         <input onChange={e => setValues({...values,username: e.target.value})} type="text" name='username'
         className='form-control' placeholder='Enter your name' />
       </div>

       <div className='mb-2'>
         <label htmlFor="email">Email:</label>
         <input onChange={e => setValues({...values,email: e.target.value})} type="email" name='email'
         className='form-control' placeholder='Enter your email' />
       </div>


       <div className='mb-2'>
         <label htmlFor="phone">Status:</label>
         <select className='btn btn-primary' onChange={e => setValues({...values,status: e.target.value})}   >
        <option className='btn btn-success'>Active</option>
        <option className='btn btn-danger'>Inactive</option>
         </select>
    </div>
       <button onClick={handleSubmit} className='btn btn-success'>Submit</button>

       <Link to="/" className='btn btn-primary ms-3'>Back</Link>


     </form>
   </div>
  </div>
  )
}

export default Create
