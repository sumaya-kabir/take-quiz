import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='md:flex justify-between p-12'>
            <div>
                <h2 className='text-center p-3 rounded-lg text-3xl text-white font-bold bg-red-400'>Take Quiz</h2>
            </div>

            <nav className='text-center nav-style text-xl font-semibold text-red-400 '>
                    <NavLink to={'/'} end className={({ isActive }) =>
                    isActive ? "md:bg-red-400 md:text-white rounded-xl" : undefined
                    }>Home
                    </NavLink>
                    <NavLink to={'/topics'} className={({ isActive }) =>
                    isActive ? "md:bg-red-400 md:text-white rounded-xl" : undefined
                    }>Topics</NavLink>
                    <NavLink to={'/statistics'} className={({ isActive }) =>
                    isActive ? "md:bg-red-400 md:text-white rounded-xl" : undefined
                    }>Statistics</NavLink>
                    <NavLink to={'/blog'} className={({ isActive }) =>
                    isActive ? "md:bg-red-400 md:text-white rounded-xl" : undefined
                    }>Blog</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;