import { getPostData } from '@/service/posts';
import React from 'react';
import MarkdownViewer from '@/app/components/MarkdownViewer';
interface IProps {
    params: {
        slug: string;
    };
}

const PostPage = async ({ params: { slug } }: IProps) => {
    const post = await getPostData(slug);

    return (
        <>
            <h1>{post.title}</h1>
            <MarkdownViewer content={post.content} />
        </>
    );
};

export default PostPage;
