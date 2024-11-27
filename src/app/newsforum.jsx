"use client"
import React, { useEffect, useRef } from 'react';

const NewsForum = () => {
    const articles = [
        {
            title: "Article 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
        {
            title: "Article 10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/300x200",
        },
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-black">NEWS FORUM</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div ref={scrollRef} className="flex overflow-x-auto py-4 scrollbar-hide w-full md:w-auto">
                    {articles.concat(articles).map((article, index) => (
                        <div key={index} className="min-w-[250px] md:min-w-[300px] max-w-[300px] mx-2 md:mx-4">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-md"
                            />
                            <h2 className="mt-2 text-lg md:text-xl font-semibold text-black">{article.title}</h2>
                            <p className="text-gray-600 text-sm md:text-base">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className='text-nowrap'>
                <button className=" text-[#2aaee2] underline mt-4 md:mt-0 md:ml-4 p-2 ">
                    Show All --&gt;
                </button>
                </div>
            </div>
        </div>
    );
};

export default NewsForum;