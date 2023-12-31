import React from 'react';
import PostGrid from './PostGrid';
import { getFeaturedPosts } from '@/service/posts';

const FeaturedPost = async () => {
    //모든 포스트 데이터를 읽어오기
    const posts = await getFeaturedPosts();

    return (
        <section className="my-4">
            <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
            <PostGrid posts={posts} />
        </section>
    );
};

export default FeaturedPost;
