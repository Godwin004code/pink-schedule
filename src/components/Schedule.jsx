
import React from 'react'
import DatePicker from 'tailwind-datepicker-react'

const Schedule = () => {
   

  return (
    <section className='bg-black w-[100%] flex justify-center items-center py-20'>
        <section className='w-[70%] flex'>
        <div className='bg-white w-[50%] py-28'>


<form class="max-w-md mx-auto">
  
  
 
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#ee0a67] peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ee0a67] peer-focus:dark:text-[#ee0a67] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#ee0a67] peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#ee0a67] peer-focus:dark:text-[#ee0a67] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        <svg className='w-[20px] h-[20px] my-auto peer-focus:fill-red-80 fill-[#ee0a67]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        </label>
    </div>
  
 



<div class="inp  relative w-full mt-12">
  <div class="inp w-full absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="date" class="inp right-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ee0a67] focus:border-[#fea1be] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#fea1be] dark:focus:border-[#fea1be] " placeholder="Select date" />
</div>



  <button type="submit" className="mt-8 text-white bg-[#ee0a67] hover:bg-[#fea1be] focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center  dark:hover:bg-[#fea1be] ">Submit</button>
</form>

        </div>
        <div className='pink-gradient w-[50%] flex justify-center items-center px-16'>
            <h2 className='text-white  text-5xl'>Schedule a service with us!</h2>
        </div>
        </section>
    </section>
  )
}

export default Schedule