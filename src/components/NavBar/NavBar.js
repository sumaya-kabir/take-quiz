import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='md:flex justify-between p-12'>
            <div>
                <h2 className='text-center p-3 rounded-lg text-3xl text-white font-bold bg-red-400'>Take Quiz</h2>
            </div>
            <div className='text-center nav-style text-xl font-semibold text-red-400'>
            <Link to={'/'}>Home</Link>
            <Link to={'/topics'}>Topics</Link>
            <Link to={'/statistics'}>Statistics</Link>
            <Link to={'/blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default NavBar;