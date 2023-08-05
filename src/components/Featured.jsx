import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {

    const slides = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='relative max-w-[1520px] w-full h-[400px] px-4 pb-4 group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 
                text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 
                text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    slides.map((sliderItems, slideIndex) => (
                        <div key={slideIndex} className='text-2xl cursor-pointer'
                            onClick={() => goToSlide(slideIndex)}>
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Featured;
