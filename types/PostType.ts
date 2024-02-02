interface PostType {
    title: string
    excerpt: string
    id:string
    postId:string
    uri:string
    author:{
        username:string
    }
    categories:Categories
    featuredImage:{
        node:{
            sourceUrl:string
        }
    }
}

