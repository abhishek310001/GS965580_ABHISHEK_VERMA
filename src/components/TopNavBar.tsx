import React from 'react';
import { Link } from 'react-router-dom';

const TopNavBar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/logo.svg"
                                alt="GSynergy Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Title in the middle */}
                    <div className="flex items-center justify-center">
                        <h1>GSynergy</h1>
                    </div>

                    {/* Sign-in / Sign-out menu on the right */}
                    <div className="flex items-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
