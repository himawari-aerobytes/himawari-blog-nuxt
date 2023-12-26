interface PostType {
    title: string
    excerpt: string
    id:string
    postId:string
    uri:string
    author:{
        username:string
    }
    categories:{
        description:string
        categoryId:string
    }
    featuredImage:{
        node:{
            sourceUrl:string
        }
    }
}

