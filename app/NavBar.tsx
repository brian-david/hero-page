'use client'
import React from 'react'
import Image from 'next/image';
import Logo from '../public/blockchain-icon.svg';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    return (
        <nav className="text-white w-full absolute z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image src={Logo} alt="Logo" width={25} height={25} className="brightness-0 invert" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <span className="px-3 py-2 rounded-md bg-gray-900/70 cursor-pointer">Home</span>
                                <span className="px-3 py-2 rounded-md hover:bg-gray-700/70 cursor-pointer">About</span>
                                <span className="px-3 py-2 rounded-md hover:bg-gray-700/70 cursor-pointer">Services</span>
                                <span className="px-3 py-2 rounded-md hover:bg-gray-700/70 cursor-pointer">Contact</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700/70 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-3 py-3 mx-4 my-2 rounded-lg bg-gray-800/40 backdrop-blur-md shadow-lg">
                    <div className="space-y-2">
                        <span className="block px-3 py-2 rounded-md bg-gray-900/60 cursor-pointer">Home</span>
                        <span className="block px-3 py-2 rounded-md hover:bg-gray-700/60 cursor-pointer transition-all duration-200">About</span>
                        <span className="block px-3 py-2 rounded-md hover:bg-gray-700/60 cursor-pointer transition-all duration-200">Services</span>
                        <span className="block px-3 py-2 rounded-md hover:bg-gray-700/60 cursor-pointer transition-all duration-200">Contact</span>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar