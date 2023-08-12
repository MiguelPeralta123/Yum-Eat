import React from 'react';

const Delivery = () => {
    return (
        <div className='w-full bg-white pt-20 pb-10 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
            <div className='w-[1160px] mx-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt='Two phones' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Get The App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience On-Demand</h1>
                    <p>
                        Lorem ipsum irure ullamco mollit ad incididunt labore id aute irure deserunt ad excepteur veniam. Irure elit minim sit et esse deserunt exercitation exercitation commodo ex nostrud duis enim eu. Dolore dolore quis deserunt non dolor nostrud officia eiusmod. Mollit adipisicing non excepteur dolor quis tempor elit minim veniam. Do fugiat enim consequat ipsum est commodo incididunt ex in proident irure id. Sunt tempor velit proident dolor labore exercitation ipsum amet. Ad dolor eu ipsum laborum nulla occaecat pariatur laborum veniam est.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 ease-out duration-200'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
