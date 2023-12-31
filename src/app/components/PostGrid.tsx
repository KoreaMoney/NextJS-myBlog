import { IPost } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

interface IProps {
    posts: IPost[];
}

const PostGrid = ({ posts }: IProps) => {
    return (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
                <li key={post.path}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
};

export default PostGrid;
