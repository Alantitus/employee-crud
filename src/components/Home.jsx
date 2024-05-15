import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [data,setData]= useState([])
    useEffect(()=>{
        axios.get('https://employee-data-4qyb.onrender.com/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDelete = (id) => {
        const confirm = window.confirm("Do you want to delete the record?")
        if(confirm){
          axios.delete('hhttps://employee-data-4qyb.onrender.com/users/'+id).then(res => {
                 location.reload();
          }).catch(err => console.log(err))
        }
      }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>LIST OF EMPLOYEES</h1>
        <div className="w-75 rounded bg-light border shadow p-4 ">
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td><button className='btn btn-dark'>{d.status}</button></td>
                                <td><Link className='btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link></td>
                                <td><Link to={`/update/${d.id}`} className='btn btn-sm btn-success'>Edit</Link></td>
                                <td><button onClick={e=>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
