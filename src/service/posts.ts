import { readFile } from 'fs/promises';
import path from 'path';

export interface IPost {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export type IPostData = IPost & { content: string; next: IPost | null; prev: IPost | null };

// posts.json의 파일을 받아서 Promise로 구성하여 배열형태로 반환하는 코드를 작성
export async function getAllPosts(): Promise<IPost[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<IPost[]>(JSON.parse)
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

// featured가 true것만 보여주기
export async function getFeaturedPosts(): Promise<IPost[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

// featured가 false것만 보여주기
export async function getNonFeaturedPosts(): Promise<IPost[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

// data의 md파일을 읽어오게 하기
export async function getPostData(fileName: string): Promise<IPostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);
    if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음.`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length ? posts[index + 1] : null;
    const content = await readFile(filePath, 'utf-8');
    return { ...post, content, next, prev };
}
