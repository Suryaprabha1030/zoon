import React, { useEffect, useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({accessTokenSurya}) => {
  console.log(accessTokenSurya)
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchUsers();
    },[])
    const  fetchUsers=async()=>{
        const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZUBtZS5jb20iLCJleHAiOjE3MTA4NDQ3MzJ9.rhwVVyDAALEligcul_Povp-vrLSGo7zFXNLdQBbe7eU"
        // const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtZUBtZS5jb20iLCJleHAiOjE3MTA4NTk2OTN9.v-E_zSUxF7q92QSAaviqvUB5ntNSJbDfSjo3w88KNDY"
        try{
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
           
          };
        // 
        //   https://surya.serveo.net/v1/users/me/
        // 'https://surya.serveo.net/v1/users/?skip=0&limit=100'
        // https://surya.serveo.net/v1/users/?skip=0&limit=100
        
        const res= await axios.get("https://surya.serveo.net/v1/users/?skip=0&limit=100",{headers})
        console.log(res.data)
        setData(res.data)
        console.log(data)
        toast.success("fetched successfully")
        
    }catch(err){
        toast.error("error fetching")

    }

    }
  return (
   
    <div>
    <div className='w-screen h-screen bg-white overflow-y-scroll'>
    
    <div className='w-full  flex flex-col justify-center items-center mb-10'>
    {/* <div className='w-20 h-10 mt-2   bg-gradient-to-b from-blue-500 via-blue-500 to-purple-500 rounded-lg'></div> */}
    <div className='text-5xl text-center font-bold '>UserList</div>
    <div className='w-20 h-3 mt-2 rounded-lg shadow-md  ms-10  bg-green-600 '></div>
    

    </div>
    
    <table className='w-full  table-fixed border-collapse border-slate-800 text-center '>
        <thead>
        <tr className=' h-20 text-center bg-green-500 '>
            <th className=' w-16 text-xl  '>Id</th>
            <th className='p-5 text-xl '>Email</th>
            <th className='p-5 text-xl '>Role</th>
            <th className='p-5 text-xl '>name</th>

            <th className='p-5 text-xl '>phnNum</th>

        </tr>
        </thead>
        <tbody>
        {data.map((u) => (
  <tr  className=' h-10 text-center pt-2' key={u.id}>
    <td className='p-3 border-2 bg-slate-200 text-xl'>{u.id}</td>
    <td className='p-3 border-2 bg-slate-200 text-xl'>{u.email}</td>
    <td className='p-3 border-2 bg-slate-200 text-xl'>{u.role_name}</td>
    <td className='p-3 border-2 bg-slate-200 text-xl'>{u.first_name}</td>
    <td className='p-3 border-2 bg-slate-200 text-xl'>{u.phone_number}</td>
  </tr>
))}
         
          
           
        </tbody>

    </table>


    </div>

   
  
    <ToastContainer/>
      
    </div>
  )
}

export default Table
