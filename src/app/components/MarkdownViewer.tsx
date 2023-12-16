'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

interface IProps {
    content: string;
}

const MarkdownViewer = ({ content }: IProps) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose max:prose-xl"
            components={{
                code(props) {
                    const { ref, children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                        <SyntaxHighlighter language={match[1]} PreTag="div" {...rest} style={materialDark}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
                img: (image) => (
                    <Image
                        className="w-full max-h-60 object-cover rounded-md"
                        src={image.src || ''}
                        alt={image.alt || ''}
                        width={500}
                        height={350}
                    />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownViewer;
