import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                <div>
                    <h2 className="text-lg font-bold mb-2">NEBULA</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-gray-400 transition-colors duration-1000">About</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition-colors duration-1000">Membership</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition-colors duration-1000">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition-colors duration-1000">Work</a></li>
                    </ul>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400 transition-colors duration-1000">Instagram</a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-1000">LinkedIn</a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-1000">X</a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-1000">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; Nebula Acceleration All rights reserved  {new Date().getFullYear()}. Created By Anurag Nanda</p>
            </div>
        </footer>
    );
};

export default Footer;
