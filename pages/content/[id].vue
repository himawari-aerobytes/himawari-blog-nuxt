<template>
    <v-container class=" xl:px-[200px]">
        <h1 class="text-3xl font-bold text-left text-[#f29738] mt-3 mb-5">{{ post.title }}</h1>
        <div class="flex">
            <div class="category" v-for="category in categories">
                <p>{{ category }}</p>
            </div>
        </div>

        <div class="[&>p]:py-4" v-html="post.content"></div>
    </v-container>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
import { reactive } from 'vue';
import { onMounted } from 'vue';
const post = reactive(<ContentType>new Object());

const route = useRoute();

let categories: string[] | null=null;

onMounted(async () => {
    try {
        const response = await PostService.getContent(route.params.id);
        post.categories = response.categories;
        post.content = response.content;
        post.featuredImage = response.featuredImage;
        post.id = response.id;
        post.title = response.title;
        categories = post.categories.nodes.map(e => e.name).filter(e => e !== 'ブログ')

    } catch (e: any) {
        console.error(e);
    }



});

</script>

<style scoped>
:deep(h1) {
    color: #494949;
    border-left: 5px solid #e6e6e6;
    padding: 1rem 2rem;
}

:deep(h2) {
    color: #364e96;
    /*文字色*/
    padding: 0.5em 0;
    /*上下の余白*/
    border-bottom: solid 3px #364e96;
    /*下線*/
}

:deep(h3) {
    color: #494949;
    font-weight: bold;

}

:deep(h4) {
    font-weight: bold;
}

:deep(h4:after) {
    position: absolute;
    content: " ";
    display: block;
    border-bottom: solid 3px #ffc778;
    bottom: -3px;
    width: 30%;
}

:deep(h5) {
    position: relative;
    display: inline-block;
    padding: 0 55px;
}

:deep(h5:before),
:deep(h5:after) {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 45px;
    height: 1px;
    background-color: black;
}

:deep(h5:before) {
    left: 0;
}

:deep(h5:after) {
    right: 0;
}

:deep(a) {
    color: #f29738;
    text-decoration-color: rgb(255, 90, 255);
    text-decoration: underline;

}

:deep(.youtube) {
    width: 100%;
    aspect-ratio: 16 / 9;
}

:deep(.youtube iframe) {
    width: 100%;
    height: 100%;
}

.category {
    padding: 0.5em 1em;
    margin: 2em 0.3rem;
    color: #5f5f5f;
    background: #edeeee;
    width: 6rem;
    height: 2.5rem;
    /*背景色*/
}

.category p {
    margin: 0;
    padding: 0;
}
</style>