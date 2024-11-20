import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                <div>
                    <h2 className="text-lg font-bold mb-2">NEBULA</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Membership</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Work</a></li>
                    </ul>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                        <a href="#" className="hover:underline">X</a>
                        <a href="#" className="hover:underline">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">All rights reserved &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
