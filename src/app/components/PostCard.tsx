import { IPost } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
    post: IPost;
}

const PostCard = ({ post: { title, description, date, category, path } }: IProps) => {
    return (
        <Link href={`/posts/${path}`}>
            <Image src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
            <time>{date.toString()}</time>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{category}</span>
        </Link>
    );
};

export default PostCard;
