import React from 'react';
import { topPicks } from '../data/data';

// Libary to create sliders, visit https://splidejs.com/integration/react-splide/
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
    return (
        <>
            <h1 className='hidden lg:flex justify-center lg:pb-4 text-orange-500 font-bold text-2xl text-center'>Top Picks</h1>
            <div className='hidden lg:flex max-w-[1520px] m-auto lg:p-2 lg:pb-12'>
                <Splide options={{perPage: 4, gap:"0.5rem", drag:'free', arrows:false}}>
                    {
                        topPicks.map(item => {
                            return (
                                <SplideSlide key={item.id}>
                                    <div className='relative rounded-3xl group overflow-hidden'>
                                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white z-10'>
                                            <p className='px-3 pt-4 text-2xl font-bold'>{item.title}</p>
                                            <p className='px-3'>{item.price}</p>
                                            <button className='absolute border-solid border-white mx-3 bottom-4 hover:bg-orange-700 hover:scale-105 ease-out duration-200'>Add To Cart</button>
                                        </div>
                                        <img className='w-full h-[200px] object-cover rounded-3xl cursor-pointer group-hover:scale-105 ease-out duration-200'
                                            src={item.img} alt={item.title} />
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </>
    );
}

export default TopPicks;
