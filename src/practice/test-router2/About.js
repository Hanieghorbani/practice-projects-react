import React from 'react'
import { Link ,Outlet,useNavigate} from 'react-router-dom'
export default function About() {
  let navigate = useNavigate()
  return (
    <div>
        <h1 className='text-center'>this is h1 in about page</h1>
        <button onClick={()=>{
          navigate('/login')
        }}>login in site</button>
        <div className='d-flex justify-content-between align-content-center w-50 mx-auto'>
            <Link className='nav-link' to='dashbord'>dashbord</Link>
            <Link className='nav-link' to='setting'>setting</Link>
        </div>
        <hr />
        <Outlet />
    </div>
  )
}
