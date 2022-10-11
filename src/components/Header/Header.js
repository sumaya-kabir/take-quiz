import React from 'react';
import pic from '../../img/flat-people-asking-questions-illustration_23-2148910627.webp'
const Header = () => {
    return (
        <div className='md:grid grid-cols-2'>
            <div className='md:pt-36 ml-20'>
            <h2 className='text-6xl'>Take <span className='text-red-400 font-bold'>Quiz</span> <br />
                Give answers <br />
                and Learn together
            </h2>
            <button className='bg-red-400 text-white px-5 py-3 rounded-lg mt-6 font-bold'>Take Quiz</button>
            </div>
            <div>
                <img className='w-5/6' src={pic} alt="" />
            </div>
        </div>
    );
};

export default Header;