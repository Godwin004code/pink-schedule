import React from 'react'

const Header = () => {
  return (
    <header className='flex px-10 justify-between py-8 pt-24 w-[100%]'>
        <div>
            <h2>Logo</h2>
        </div>
        <div className='flex'>
            <h2 className='my-auto font-bold text-2xl mr-10'><span className='text-pink-600 '>PINK</span> SCHEDULING</h2>
            <svg className='w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
        </div>
    </header>
  )
}

export default Header