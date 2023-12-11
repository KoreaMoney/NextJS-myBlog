import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IProps {
    content: string;
}

const MarkdownViewer = ({ content }: IProps) => {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose lg:prose-xl">
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownViewer;
