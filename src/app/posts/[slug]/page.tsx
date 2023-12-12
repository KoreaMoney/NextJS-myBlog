import React from 'react';
import Image from 'next/image';
import { getPostData } from '@/service/posts';
import MarkdownViewer from '@/app/components/MarkdownViewer';

import { AiTwotoneCalendar } from 'react-icons/ai';

interface IProps {
    params: {
        slug: string;
    };
}

const PostPage = async ({ params: { slug } }: IProps) => {
    const { title, description, date, category, path, content } = await getPostData(slug);

    return (
        <article>
            <Image src={`/images/posts/${path}.png`} alt={title} width={760} height={420} />
            <section>
                <div>
                    <AiTwotoneCalendar />
                    <p>{date.toString()}</p>
                </div>
                <h1>{title}</h1>

                <MarkdownViewer content={content} />
            </section>
        </article>
    );
};

export default PostPage;
