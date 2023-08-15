import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'

const TopNav = () => {

    const [sideNav, setSideNav] = useState(false);

    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={() => setSideNav(!sideNav)}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum
                    <span className='text-orange-700 font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] font-bold'>
                    <p className='bg-orange-700 text-white rounded-full p-2'>Free</p>
                    <p className='p-2'>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text'
                    placeholder='Search meals' />
            </div>
            <button className='bg-orange-700 text-white border-none hidden md:flex items-center py-2 rounded-full font-bold hover:scale-105 ease-out duration-200'>
                <BsFillCartFill className='pr-2' size={25} /> Cart
            </button>

            {/* When the side menu button is clicked, the menu appears, when it´s clicked again, it hides */}
            {sideNav ?
                (<div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'
                    onClick={() => setSideNav(!sideNav)}></div>)
                : ('')}

            <div className={sideNav ?
                ('bg-white fixed top-0 left-0 w-[300px] h-screen z-10 duration-300')
                : ('bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-500')}>

                <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' size={25}
                    onClick={() => setSideNav(!sideNav)} />

                <h2 className='text-2xl p-4'>Yum<span className='text-orange-700 font-bold'>Eats</span></h2>

                <nav>
                    <ul className='flex flex-col py-4 text-gray-900'>
                        <li className='flex text-xl pl-4 py-4 hover:bg-gray-200'>
                            <BsPerson className='bg-black text-white mr-4 rounded-full' size={25} />
                            Account
                        </li>
                        <li className='flex text-xl pl-4 py-4 hover:bg-gray-200'>
                            <TbTruckReturn className='bg-black text-white mr-4 rounded-full' size={25} />
                            Delivery
                        </li>
                        <li className='flex text-xl pl-4 py-4 hover:bg-gray-200'>
                            <MdOutlineFavorite className='bg-black text-white mr-4 rounded-full' size={25} />
                            Favorites
                        </li>
                        <li className='flex text-xl pl-4 py-4 hover:bg-gray-200'>
                            <FaGoogleWallet className='bg-black text-white mr-4 rounded-full' size={25} />
                            Wallet
                        </li>
                        <li className='flex text-xl pl-4 py-4 hover:bg-gray-200'>
                            <MdHelp className='bg-black text-white mr-4 rounded-full' size={25} />
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default TopNav;
