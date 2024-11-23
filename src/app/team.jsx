"use client";

import { useState } from 'react';

const ImageCard = ({ name, designation, description, imageSrc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            
            <div className="relative">
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-48 object-cover bg-gray-300 rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
                    <h3 className="text-sm font-bold">{name}</h3>
                    <p className="text-xs">{designation}</p>
                </div>
            </div>
            {isHovered && (
                <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-lg rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ">
                    <div className="flex flex-col sm:flex-row items-center">
                        <img src={imageSrc} alt={name} className="w-16 h-16 rounded-full mb-2 sm:mb-0 sm:mr-2" />
                        <div>
                            <h3 className="text-lg font-bold text-[#2baee2]">{name}</h3>
                            <p className="text-sm text-gray-500">{designation}</p>
                            <p className="text-xs text-gray-400 mt-1">{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Team = () => {
    const data = [
        { name: "Alice Johnson", designation: "Astrophysicist", description: "Studying black holes", imageSrc: "https://via.placeholder.com/150" },
        { name: "Bob Smith", designation: "Cosmologist", description: "Exploring the universe", imageSrc: "https://via.placeholder.com/150" },
        { name: "Carol Davis", designation: "Quantum Physicist", description: "Advancing quantum computing", imageSrc: "https://via.placeholder.com/150" },
        { name: "David Brown", designation: "Astrobiologist", description: "Searching for extraterrestrial life", imageSrc: "https://via.placeholder.com/150" },
        { name: "Eva White", designation: "Aerospace Engineer", description: "Designing next-gen spacecraft", imageSrc: "https://via.placeholder.com/150" },
        { name: "Frank Miller", designation: "Data Scientist", description: "Analyzing cosmic data", imageSrc: "https://via.placeholder.com/150" },
        { name: "Grace Lee", designation: "Planetary Geologist", description: "Studying Mars geology", imageSrc: "https://via.placeholder.com/150" },
        { name: "Henry Wilson", designation: "Space Medicine Specialist", description: "Ensuring astronaut health", imageSrc: "https://via.placeholder.com/150" },
        { name: "Irene Garcia", designation: "Propulsion Engineer", description: "Developing advanced rocket engines", imageSrc: "https://via.placeholder.com/150" },
        { name: "Jack Taylor", designation: "Space Policy Analyst", description: "Shaping future space missions", imageSrc: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="bg-black text-white py-10 w-full min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-8 sm:mb-12">STARS OF THE NEBULA</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {data.map((member, index) => (
                        <ImageCard
                            key={index}
                            name={member.name}
                            designation={member.designation}
                            description={member.description}
                            imageSrc={member.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;