import React from 'react';
import { categories } from '../data/data';

const Categories = () => {
    return (
        <div className='max-w-[1520px] mx-auto px-4 pb-4'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-4'>Trending Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 pb-4'>
                {categories.map(item => {
                    return (
                        <div key={item.id} className='flex justify-center items-center p-4 hover:scale-105 ease-out duration-200'>
                            <img className='w-40 h-10 object-cover rounded-xl cursor-pointer shadow-xl'
                                src={item.image}
                                alt={item.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Categories;
