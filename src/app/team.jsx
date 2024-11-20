"use client";

import { useState } from 'react';

const ImageCard = ({ name, designation, description, imageSrc }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group m-4 cursor-pointer w-full sm:w-1/2 lg:w-1/5 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            
            <img
                src={imageSrc}
                alt={name}
                className="w-48 h-48 object-cover bg-gray-300" // Set height to width for square
            />
            {isHovered && (
                <div className="absolute top-0 left-0 right-0 bg-white p-4 shadow-lg rounded-lg transition-transform transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center">
                        <img src={imageSrc} alt={name} className="w-16 h-16 rounded-full mr-2" />
                        <div>
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="text-sm text-gray-500">{designation}</p>
                            <p className="text-xs text-gray-400">{description}</p>
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
        { name: "Jack Taylor", designation: "Space Policy Analyst", description: "Shaping future space missions", imageSrc: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="bg-black text-white py-10 w-screen max-w-full">
        <div className="container mx-auto px-1">
            <h1 className="text-center text-9xl sm:text-9xl font-black tracking-tighter text-nowrap mb-12">STARS OF THE NEBULA</h1>
            <div className="flex flex-wrap justify-center -mx-4">
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
