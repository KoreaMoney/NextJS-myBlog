import React from 'react';
import Image from 'next/image';
import { getPostData } from '@/service/posts';
import PostContent from '@/app/components/PostContent';

interface IProps {
    params: {
        slug: string;
    };
}

const PostPage = async ({ params: { slug } }: IProps) => {
    const post = await getPostData(slug);
    const { title, path, next, prev } = post;

    return (
        <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
            <Image
                className="w-full h-1/5 max-h-[500px]"
                src={`/images/posts/${path}.png`}
                alt={title}
                width={760}
                height={420}
            />
            <PostContent post={post} />
            <section>
                {prev && <p>{prev.title}</p>}
                {next && <p>{next.title}</p>}
            </section>
        </article>
    );
};

export default PostPage;
