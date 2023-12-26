import RepositoryFactory from "@/repositories/RepositoryFactory";

class PostService {
    static async getList(): Promise<PostType[]> {
        try {
            const res = await RepositoryFactory.post.getList();
            return res.data.data.posts.edges.map((data: any) => {
                return data.node
            }) // 扱いやすいようにデータを加工する
        } catch {
            console.error('バックエンドからデータを取得できませんでした')
            return [] // エラーだった場合は空のpostListにする
        }
    }
    static async getContent(id: string): Promise<ContentType>{
        try {
            const res = await RepositoryFactory.post.getPost(id);
            return res.data.data.posts.edges[0].node
        } catch {
            console.log("バックエンドからデータを取得できませんでした");
            return <ContentType>Object.create(null);
        }
        
    }
}

export default PostService