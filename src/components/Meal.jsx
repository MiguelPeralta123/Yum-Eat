import React from 'react';
import { mealData } from '../data/data';

const Meal = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-4'>Our Meal</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    mealData.map(item => {
                        return(
                            <div className='border-none'></div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Meal;
