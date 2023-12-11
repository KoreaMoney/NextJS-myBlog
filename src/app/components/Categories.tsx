import React from 'react';

interface IProps {
    categories: string[];
    selectedPost: string;
    onClick: (category: string) => void;
}

const Categories = ({ categories, selectedPost, onClick }: IProps) => {
    return (
        <section className="text-center p-4">
            <h2 className="text-lg font-bold border-b-2  border-sky-500 mb-2">Category</h2>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        onClick={() => onClick(category)}
                        className={`cursor-pointer hover:text-sky-500  ${
                            category === selectedPost && 'text-sky-500 text-lg font-semibold'
                        }`}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Categories;
