export interface IPost {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    features: boolean;
}
// posts.json의 파일을 받아서 Promise로 구성하여 배열형태로 반환하는 코드를 작성
export async function getAllPosts(): Promise<IPost[]> {}
