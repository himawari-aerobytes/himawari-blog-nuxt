import Repository from "./Repository";

class PostRepository {
    static getList() {
        return Repository(`query MyQuery {
          posts {
            edges {
              node {
                postId
                title
                author {
                  node {
                    username
                    name
                  }
                }
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                date
              }
            }
          }
        }`).getWp() // graphQLのIDEのをコピペ
    }
  
    static getPost(id:string) {
      return Repository(`query MyQuery {
        posts(where: {id: ${id}}) {
          edges {
            node {
              id
              featuredImage {
                node {
                  sourceUrl
                }
              }
              content
              title
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }`).getWp() // graphQLのIDEのをコピペ
  }
}

export default PostRepository