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
            <article className="rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                <Image
                    src={`/images/posts/${path}.png`}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-[20vh]"
                />
                <div className="flex flex-col items-center p-4">
                    <time className="self-end text-neutral-500">{date.toString()}</time>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="w-full truncate">{description}</p>
                    <span className="rounded-lg text-sm bg-green-100 px-2 my-2 ">{category}</span>
                </div>
            </article>
        </Link>
    );
};

export default PostCard;
