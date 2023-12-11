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
