import React from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/service/posts';
import FilterablePost from '../components/FilterablePost';

export const metadata: Metadata = {
    title: 'Dowon | Posts',
    description: 'These are the contents recorded by Kim Dowon, who records, learns, and develops.',
};

const PostsPage = async () => {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((list) => list.category))];
    return <FilterablePost posts={posts} categories={categories} />;
};

export default PostsPage;
