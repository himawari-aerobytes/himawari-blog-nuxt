interface ContentType {
    content: string;
    featuredImage: FeatureImageNode;
    id: string;
    title: string;
    categories: Categories;
}

interface FeatureImageNode{
    node: SourceURL;
}

interface SourceURL {
    sourceUrl: string;

}

interface Categories{
    nodes: CategoriesNode[];
}

interface CategoriesNode{
    name: string;
}