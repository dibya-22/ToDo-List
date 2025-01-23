import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-blue-500 text-white py-5 px-10 sticky top-0'>
            <div className="logo">
                <span className='font-bold text-xl cursor-pointer'>Taskly</span>
            </div>
            <ul className='flex gap-10'>
                <li className='cursor-pointer hover:font-semibold hover:text-black hover:underline transition-all'>Home</li>
                <li className='cursor-pointer hover:font-semibold hover:text-black hover:underline transition-all'>Tasks</li>
                <li className='cursor-pointer hover:font-semibold hover:text-black hover:underline transition-all'>About</li>
            </ul>
        </nav>
    )
}

export default Navbar
