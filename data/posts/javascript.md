# data test합니다

### 고구마

-   데이터 점 확인합니다.
    `이건 뭘까`

```jsx
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
    content: string;
}

const MarkdownViewer = ({ content }: IProps) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose lg:prose-xl"
            components={{
                code(props) {
                    const { ref, children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                        <SyntaxHighlighter language={match[1]} PreTag="div" {...rest} style={dark}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownViewer;
```

<!-- ![React Office desk](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) -->
