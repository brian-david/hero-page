import React from 'react';

const HeroElement = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-75"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-24">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Welcome to My Next.js Application
                    </h1>
                    <p className="text-xl mb-8">
                        A modern web application built with Next.js featuring a responsive navbar and hero section
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 text-lg font-medium rounded-md bg-white text-gray-900 hover:bg-gray-100">
                            Get Started
                        </button>
                        <button className="px-8 py-3 text-lg font-medium rounded-md border border-white text-white hover:bg-white hover:bg-opacity-10">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroElement
