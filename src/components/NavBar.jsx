import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a className='logo bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent' href='#hero'>
                    Supun Prabodha
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex items-center gap-4'>
                    <a
                        href='https://www.linkedin.com/in/supun-prabodha-liyanage/?originalSubdomain=lk'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group'
                    >
                        <img
                            src='https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg'
                            alt='LinkedIn'
                            className='w-6 h-6 fill-current text-gray-800 bg-gray-200 rounded-full p-1 group-hover:bg-gray-300 transition-colors duration-200'
                        />
                    </a>
                    <a
                        href='https://github.com/SupunPrabodha'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group'
                    >
                        <img
                            src='https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg'
                            alt='GitHub'
                            className='w-6 h-6 fill-current text-gray-800 bg-gray-200 rounded-full p-1 group-hover:bg-gray-300 transition-colors duration-200'
                        />
                    </a>
                    <a href='#contact' className='group relative overflow-hidden rounded-lg'>
                        <div className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 transition-all duration-300'>
                            <span className='text-white font-medium'>Contact Me</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;