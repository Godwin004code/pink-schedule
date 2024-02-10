import React from 'react'

const Nav = () => {
  return (
    <section className='w-[100%] flex justify-between py-4 fixed bg-white z-50' style={{borderBottom: "1px solid #ccc"}}>
        <div></div>
        <div className='w-[50%]'>
            <nav className='w-[100%]'>
                <ul className='flex justify-between'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Philosophy</li>
                    <li>Comp Card</li>
                    <li className='mr-4'>Contact</li>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Nav