import React from 'react';

const TopicCards = ({topic}) => {
    const {logo, name}= topic;
    return (
        <div className='w-3/4 border-2 border-red-200 rounded p-2 ml-12'>
            <img className='border' src={logo} alt="" />
            <h3 className='text-center text-2xl font-medium'>{name}</h3>
            <button className='text-white bg-red-400 px-5 py-2 rounded w-full mt-3'>Let's Practice</button>
        </div>
    );
};

export default TopicCards;