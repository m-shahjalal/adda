import React from 'react'

 const PostCard:React.FC = () => {
  return (
  <div className="flex flex-wrap bg-slate-100 border border-red-1 place-items-center h-scree shadow-sm p-2 mb-1">
        <div className="flex w-full items-center justify-between">
        <div className='flex'>
          <img className='w-10 h-10 object-cover rounded-full' alt='User avatar'
        src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'/>
        <div className="text-gray-600 text-xs">
          <p className='text-xs'>shajala Supercars <br />20 minitues age</p> 
        </div>
        </div>
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
        </div>
      
        </div>
      <div className="overflow-hidden shadow-lg  hover:shadow-2xl rounded-lg h-30 w-full md:w-80 cursor-pointer m-auto">
          <a href="@#" className="w-full block h-full">
              <img alt="blog phto" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" className="max-h-40 w-full object-cover"/>
          <div className="bg-white w-full p-4">
            <p className="text-gray-600 font-light text-xs">
            It is difficult to believe that we have become so used to having instant access to information at...
          </p>
          <div className="flex flex-wrap justify-between items-center py-2 border-b-2 text-xs text-black font-medium">
                                
            <span className="flex rounde">          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <p>24 people likes </p>
            </span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>

            </span>
                    
          </div>
                  
            </div>
          </a>
      </div>
      
  </div>
 

  )
}

 export default PostCard



