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
    static async getContent(id: string|string[]): Promise<ContentType>{
        try {
            let idValue:string;
            if (typeof id === 'string') {
                idValue = id;
            } else {
                idValue = id[0];
            }

            const res = await RepositoryFactory.post.getPost(idValue);
            return res.data.data.posts.edges[0].node
            
        } catch {
            console.log("バックエンドからデータを取得できませんでした");
            return <ContentType>Object.create(null);
        }
        
    }
}

export default PostService