 import React from 'react'
 import { useState } from 'react';
import { Link } from 'react-router-dom';

 export const TopNav = () => {

         const [show,setShow] = useState(false)

         const ToggleShow = () => {
               setShow(!show)
           }

   return (
  
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-2 mx-auto lg:flex max-w-7xl sm:px-5 lg:px-6 bg-slate-300" >
      <div className="flex items-center justify-between h-16 ">
    
        <div className="flex items-center justify-center flex-1 sm:items-center sm:justify-start">
          <div className="flex items-center ">
          <Link to='/'>logo</Link>
          </div>
          <div className=" sm:ml-6 sm:block">
            <div className="flex items-center space-x-4">
              <a href="##" className="px-3 py-2 text-xs font-medium text-black rounded-md " >message</a>
  
              <a href="@" className="px-3 py-2 text-xs font-medium text-black rounded-md hover:text-white">Notification</a>
              
               <span className='flex items-center text-xs hover:bg-slate-200'>
                 <a href="#$">event</a>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>

               </span>
              <label className="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            
                <input type="search" id="default-search" className="text-sm text-gray-900 border border-gray-300 rounded-lg lg:hidden md:hidden pl1/3 10 h-25 w- bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything." required/>
               
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    
  
          {/* <!-- Profile dropdown --> */}
          <div className="relative ml-5">
            <div>
              <button onClick={ToggleShow } type="button" className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </button>
            </div>
 
            { show ? (
              <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
            {/*   <!-- Active: "bg-gray-100", Not Active: "" --> */}
              <Link to="/profile" className="block px-4 text-gray-700 cursor-pointer txt-sm p-y-2 " role="menuitem"  id="user-menu-item-0">Your Profile </Link>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</Link>
            </div>
            ) :null
            
              }

          </div>
        </div>
      </div>
   
      </div>
   )
 }

 
 export default TopNav

