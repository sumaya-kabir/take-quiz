import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='md:flex justify-between p-12'>
            <div>
                <h2 className='text-center p-3 rounded-lg text-3xl text-white font-bold bg-red-400'>Take Quiz</h2>
            </div>

            <div className='text-center nav-style text-xl font-semibold text-red-400'>
                    <NavLink to={'/'} className={({ isActive }) =>
              isActive ? "bg-red-400 text-white rounded-xl" : undefined
            }>Home</NavLink>
                    <NavLink to={'/topics'}>Topics</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
            </div>
        </div>
    );
};

export default NavBar;