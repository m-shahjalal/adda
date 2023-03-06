import React, { useState } from "react"
import logImage from '../../src/images/group.png'
import { Link } from "react-router-dom"
import { Iregister } from "../utils/type"

 const Register:React.FC = () => {
      const [regiData, setRegiData] =useState<Iregister>({
        name:'',
        email:'',
        password:'',
        cpassword:''
      })

      const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
        setRegiData({
          ...regiData,
          [event.target.name]:event.target.value
        })
      }

       const {name,email,password,cpassword} = regiData

      const submitRegister= (event : React.FormEvent<HTMLFormElement>)=>{
          event.preventDefault()
       setRegiData(regiData)
       console.log(regiData);
       setRegiData({
        name:'',
        email:'',
        password:'',
        cpassword:''
       })
      
      }

    return (
        <div className="flex items-center sm:flex-col lg:flex-row">
          
        <div className="w-4/12 min-h-screen bg-gray-100 p-7 sx:w-12/12 md:w-12/12 sm:w-12/12 lg:w-4/12">
         <h2 className="mb-3 text-center text-purple-900">Adda with us !!</h2>
          <div className="mt-8 w-70 h-70">
              
           <img alt="loginpict" src={logImage}/>
          </div>
        
           
        </div>
        
       
       <div className="flex justify-center w-8/12 min-h-screen sx:w-12/12 md:w-12/12 sm:w-12/12 lg:w-8/12">
        
       
          <div className="flex-col flex-wrap p-5 bg-white rounded-l-md" >
         
           
              <p className="justify-center mb-1 font-semibold text-center text-md">Register</p>
             
             <div className="content-center w-10/12 px-2 py-1 mx-2 mb-3 rounded-md bg-slate-300">
              
                <form onSubmit={(e)=>submitRegister(e)} className="w-8/12 m-auto mt-4">
                  
                <div className="mb-2">
                  <label className="block mb-2 text-xs font-semibold">User Name</label>
                  <input  type="text" placeholder="Enter your name"
                  name="name" value={name}  onChange={handleChange }
                   className="block w-full px-1 py-1 text-gray-500 border border-gray-300 rounded-md focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" />
                </div>
                   
                <div className="mb-2">
                  <label className="block mb-2 text-xs font-semibold">Email</label>
                  <input  type="email" placeholder="Enter your email" 
                  name='email' value={email} onChange={handleChange}
                  className="block w-full px-1 py-1 text-gray-500 border border-gray-300 rounded-md focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" />
                </div>
                
                <div className="mb-2">
                  <label className="block mb-2 text-xs font-semibold">Password</label>
                  <input type="password" placeholder="*****"
                  name='password' value={password} onChange={handleChange}
                   className="block w-full px-1 py-1 text-gray-500 border border-gray-300 rounded-md focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-xs font-semibold">confirm Password</label>
                  <input type="password" placeholder="*****" 
                  name='cpassword' value={cpassword} onChange={handleChange} 
                  className="block w-full px-1 py-1 text-gray-500 border border-gray-300 rounded-md focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700" />
                </div>
       
       
                <div className="mb-2">
                <button  className="bg-purple-600 block w-full text-white rounded-md border-3 border-slate-300 hover:border-indigo-300 ...  focus:ring-purple-700 ">
                    Register
                  </button>
                
                </div>

              </form>
       
          
             </div>
            
         
              
              <div className="text-center">
              <div className="w-72">
                <span className="text-xs font-semibold text-gray-400">already have account?</span>
              
                <Link to='/signup' className="text-xs font-semibold text-purple-700">Login</Link>
              </div>
            </div>
           
            
          </div>
       
       
       
       
       </div>
       
       
       </div>
       )
       }

export default Register
