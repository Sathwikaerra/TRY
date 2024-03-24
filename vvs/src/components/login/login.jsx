import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const navigate=useNavigate();
    const[email,setEmail]=useState();

    const[password,setPassword]=useState();

    const Handle=(e)=>{
        e.preventDefault();
         axios.post('http://localhost:8000/login',{email,password}).then(res=>{
          if(res.data=='success')
          {
       
            navigate(`/home/${email}`)
          }
          else{
            console.log(res.data)

          }
     
         }).catch(err=>{
          console.log('error in axios')
         })
        


    }
        
          
        
       
    




  return (
    <div className=' login'>
         <form className='form d-flex  ' onSubmit={Handle}>
      

        <div>
            <label htmlFor="">UserName:</label>
        <input type="email"  name="" onChange={(e)=>setEmail(e.target.value)} id="" />

        </div>

        <div>
            <label htmlFor="">Password:</label>
        <input type="password" name="" onChange={(e)=>setPassword(e.target.value)} id="" />

        </div>
        
        <div><button type='submit' className='btn btn-primary '>Login</button></div>

        <div>
            <p>Already  have an acccount ?<a className='link' href="/signup"><span className='text-black'>Signup here</span></a></p>
        </div>
        




       </form>
      
    </div>
  )
}

export default Login
