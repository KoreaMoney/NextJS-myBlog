'use client';

import { IPost } from '@/service/posts';
import React, { useState } from 'react';
import PostGrid from './PostGrid';
import Categories from './Categories';

interface IProps {
    posts: IPost[];
    categories: string[];
}

const ALL_POSTS = 'All Posts';

const FilterablePost = ({ posts, categories }: IProps) => {
    const [selectedPost, setSelectedPost] = useState(ALL_POSTS);
    const filteredPost = selectedPost === ALL_POSTS ? posts : posts.filter((post) => post.category === selectedPost);

    return (
        <section className="flex m-4">
            <PostGrid posts={filteredPost} />
            <Categories categories={[ALL_POSTS, ...categories]} selectedPost={selectedPost} onClick={setSelectedPost} />
        </section>
    );
};

export default FilterablePost;
