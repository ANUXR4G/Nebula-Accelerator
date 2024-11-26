import React from 'react';

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

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-5xl font-bold text-black">NEWS FORUM</h1>
                <button className="mt-4 text-blue-500 underline">Show All</button>
            </div>
            <div className="flex overflow-x-auto py-4 scrollbar-hide">
                {articles.map((article, index) => (
                    <div key={index} className="min-w-[300px] max-w-[300px] mx-4">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                        <h2 className="mt-2 text-xl font-semibold text-black">{article.title}</h2>
                        <p className="text-gray-600">{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsForum;
