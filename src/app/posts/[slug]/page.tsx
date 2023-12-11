import { getPostData } from '@/service/posts';
import React from 'react';
interface IProps {
    params: {
        slug: string;
    };
}

const PostPage = async ({ params: { slug } }: IProps) => {
    // 전달된 slug에 해당하는 포스트 데이터 읽어오기
    const post = await getPostData(slug);

    return (
        <>
            <h1>{post.title}</h1>
            <pre>{post.content}</pre>
        </>
    );
};

export default PostPage;
