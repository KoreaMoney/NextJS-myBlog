import React from 'react';
import PostGrid from './PostGrid';
/**
 * 개발 사항
 * 1. 모든 포스트 데이터를 읽어오기
 * 2. 모든 포스트 데이터를 보여주기
 */
const FeaturedPost = () => {
    return (
        <section className="">
            <h2>Featured Posts</h2>
            <PostGrid />
        </section>
    );
};

export default FeaturedPost;
