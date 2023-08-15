import React from 'react';

const NewsLetter = () => {
    return (
        <div className='max-w-[1520px] m-auto px-12 py-4 bg-[#24262b] text-white '>
            <div className='mx-auto grid lg:grid-cols-3'>
                <div className='col-span-2 my-auto text-lg'>
                    <h1>Need some advice to improve your flow?</h1>
                    <p>Sign up to join out newsletter and stay up to date!</p>
                </div>
                <div className='my-4'>
                    <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
                        <input className='w-full p-3 flex rounded-md text-black'
                            type='email'
                            placeholder='Email' />
                        <button className='w-[200px] bg-[#00df9a] text-white font-medium rounded-md ml-4 my-6 px-6 py-3 border-none'>
                            Notify Me
                        </button>
                    </div>
                    <p>We are concerned about your data security, please read our {" "}
                        <span className='text-[#00df9a] cursor-pointer'>Privacy Policy</span>
                    </p>
                </div>
                <hr className='bg-[#00df9a]' />
            </div>
        </div>
    );
}

export default NewsLetter;
