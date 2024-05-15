import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function Read() {
    const [data,setData]= useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get('https://employee-data-4qyb.onrender.com/users/'+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 justify-content-center align-items-center bg-light' >
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h3>Details of Employee</h3>
      <div className='mb-2'>
          <strong>Name: {data.id}</strong>
      </div>
      <div className='mb-2'>
          <strong>Name: {data.username}</strong>
      </div>

      <div className='mb-2'>
          <strong>Email: {data.email}</strong>
      </div>

      <div className='mb-3'>
          <strong>Status: {data.status}</strong>
      </div>
     
     <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>

     <Link to={`/`} className='btn btn-primary ms-3'>Back</Link>



    </div>
  </div>
  )
}

export default Read
