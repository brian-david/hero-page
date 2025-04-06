import React from 'react';
import Image from 'next/image';
import heroImage from '../../public/hero-image.jpg';

const HeroElement = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full bg-gradient-to-r from-gray-200 to-blue-100 opacity-90">
                    <Image
                        src={heroImage}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="opacity-25 z-[-1]"
                    />
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-24">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                        Your global Crypto Exchange Dashboard
                    </h1>
                    <p className="text-xl mb-8">
                        Real-time rates, powerful conversion tools, and comprehensive market insights in one place.
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
