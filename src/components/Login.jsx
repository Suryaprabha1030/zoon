import React, { useRef } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from './Table';

const Login = ({accessTokenSurya}) => {
  const [accessTokenSurya, setAccessTokenSurya] = useState("");
  // const{handleLogin}=onLogin
    const nameRef=useRef()
    const passRef=useRef()
    const navigate=useNavigate()
    const login=async(e)=>{

        e.preventDefault()
        try{
        
        const formData = new URLSearchParams();
        formData.append('grant_type', '');
        formData.append('username', nameRef.current.value);
        formData.append('password', passRef.current.value);
        formData.append('scope', '');
        formData.append('client_id', '');
        formData.append('client_secret', '');
        
        const res=await axios.post('https://surya.serveo.net/v1/users/token',formData,{headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json'
        }}
        )
        // const  access_token = "suryapoovi";

        // console.log(res.data.access_token )
        // setAccessToken( res.data.access_token )
        setAccessToken( access_token)

       
        // onLogin(access_token);
        // navigate("/table",{access_token})
         navigate("/table")
          
        
          
        
   
        
      
  
        
        //  navigate("/table")

       }
       catch(err){
        // console.log(err)
        toast.error("check your input field",err)

    }}
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-b from-purple-500 via-teal-400 to-purple-300'>
    <div className='w-1/3 h-2/3 shadow-md bg-white flex flex-col items-center'>
    <h1 className='text-3xl font-bold mt-10 text-blue-900'>Login Here</h1>
    <div className='w-10 h-3 mt-2   bg-gradient-to-b from-blue-500 via-blue-500 to-purple-500 rounded-lg'></div>
    <label className='w-3/4 text-2xl text-blue-900 font-semibold mt-5'>UserName</label>
    <div className='w-3/4 h-10'>
    <input className='w-full h-full mt-3 border-2 border-slate-900 outline-none rounded-lg p-4 text-md font-medium' ref={nameRef}/>
    </div>
    <div>

    </div>
    <label className='w-3/4 text-2xl text-blue-900 font-semibold mt-5'>password</label>
    <input className='w-3/4 h-10 mt-3 border-2  outline-none border-slate-900 rounded-lg p-4 text-md font-medium'  ref={passRef}/>
    <button className='w-1/4  h-10 mt-10  shadow-md w-1/4  h-10   bg-red-500 text-xl text-white font-medium rounded-xl  hover:bg-green-500 hover:w-1/3 transition-colors duration-300 hover:border-0 ' onClick={login}>Login</button>

    </div>
    <ToastContainer/>
    <Table accessTokenSurya={accessTokenSurya}/>
    </div>

  )
}

export default Login
