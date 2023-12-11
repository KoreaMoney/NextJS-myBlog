import { IPost } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

interface IProps {
    posts: IPost[];
}

const PostGrid = ({ posts }: IProps) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.path}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
};

export default PostGrid;
