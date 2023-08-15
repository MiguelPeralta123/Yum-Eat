import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1520px] mx-auto px-4 pb-2 bg-[#24262b]'>
            <div className='px-8 py-10 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full pb-2 text-3xl text-white'>Yum<span className='text-orange-700 font-bold'>Eats</span></h1>
                    <p>
                        Lorem ipsum in exercitation dolore anim proident pariatur ad id nulla adipisicing qui elit eu. Quis aliqua enim magna officia ea pariatur in commodo esse consectetur deserunt exercitation laborum. Nisi amet amet id fugiat exercitation.
                    </p>
                    <div className='flex justify-between md:w-[75%] mt-8 mb-2'>
                        <FaFacebookSquare className='hover:cursor-pointer' size={40} />
                        <FaInstagram className='hover:cursor-pointer' size={40} />
                        <FaTwitterSquare className='hover:cursor-pointer' size={40} />
                        <FaGithubSquare className='hover:cursor-pointer' size={40} />
                        <FaDribbbleSquare className='hover:cursor-pointer' size={40} />
                    </div>
                </div>

                <div className='lg:col-span-2 flex justify-between lg:ml-12 mt-8'>
                    <div>
                        <h6 className='font-bold text-[#9b9b9b] pb-2'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Mexico</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[#9b9b9b] pb-2'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Mexico</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[#9b9b9b] pb-2'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Mexico</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[#9b9b9b] pb-2'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>Canada</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>Mexico</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
