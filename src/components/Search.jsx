

import React from 'react'

const Search = () => {
  return (
    <section className='bg-black w-[100%] flex flex-col justify-center items-center pb-16'>
        
        <section className='bg-white w-[60%] mx-auto py-8 rounded-2xl pb-28' >
        <h2 className='uppercase text-4xl text-black font-bold text-center '>start</h2>
        <h2 className='uppercase text-4xl text-black font-bold text-center '>search</h2>
        <div className='flex justify-between w-[80%] mt-10 mx-auto'>
        <div className='explore-box uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3'>hair</div>
        <div className='explore-box uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3'>face</div>
        <div className='explore-box uppercase text-center text-4xl text-black font-bold bg-[#ccc] px-5 rounded-3xl py-3'>body</div>
        </div>

        </section>
        <button className='mt-7 uppercase bg-red-800 text-white font-medium py-3 px-7 mx-auto text-center rounded-2xl'>sign up</button>
        <p className='text-white font-medium mt-4'>Create an account to personalise your search results</p>
    </section>
  )
}

export default Search