import React, { useState } from 'react';
import { mealData } from '../data/data';
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Meal = () => {

    const [foods, setFoods] = useState(mealData);

    const filterFoods = category => {
        setFoods(mealData.filter(item => {
            return item.category === category
        }))
    }

    return (
        <div className='max-w-[1520px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-4'>Our Meals</h1>

            <div className='flex flex-col md:flex-row justify-center'>
                <div className='flex justify-center'>
                    <button
                        className='mx-1 mb-5 bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:scale-105 ease-out duration-200'
                        onClick={() => setFoods(mealData)}>
                        All
                    </button>
                    <button
                        className='mx-1 mb-5 bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:scale-105 ease-out duration-200'
                        onClick={() => filterFoods("pizza")}>
                        Pizza
                    </button>
                    <button
                        className='mx-1 mb-5 bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:scale-105 ease-out duration-200'
                        onClick={() => filterFoods("chicken")}>
                        Chicken
                    </button>
                    <button
                        className='mx-1 mb-5 bg-orange-700 text-white border-orange-700 hover:bg-white hover:text-orange-700 hover:scale-105 ease-out duration-200'
                        onClick={() => filterFoods("salad")}>
                        Salad
                    </button>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    foods.map(item => {
                        return (
                            <div key={item.id} className='border-none hover:scale-105 ease-out duration-200'>
                                <img className='w-full h-[200px] object-cover rounded-lg' src={item.image}
                                    alt={item.name} />
                                <div className='flex justify-between py-4 px-2'>
                                    <p className='font-bold'>{item.name}</p>
                                    <p className='bg-orange-700 w-[18] h-[18] px-2 py-3.5 -mt-12 font-bold rounded-full border-8 text-white'>{item.price}</p>
                                </div>

                                <div className='pl-2 pb-4 -mt-4'>
                                    <p className='flex w-[100px] items-center text-indigo-600 cursor-pointer'>See More <ArrowSmRightIcon className='w-5 ml-2' /></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Meal;
