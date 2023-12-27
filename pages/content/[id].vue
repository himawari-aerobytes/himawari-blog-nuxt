<template>
    <v-container class=" xl:px-[200px]">
        <h1 class="text-5xl text-center text-[#f29738] mt-3 mb-20">{{ post.title }}</h1>
        <div class="mb-5 w-full">
            <img class="object-scale-down h-[32rem] w-full" :src="post?.featuredImage?.node?.sourceUrl" />
        </div>
        <p class="ml-3 py-4">カテゴリ {{ post.categories?.nodes.map(e => e.name).join(",") }}</p>
        <div class="[&>p]:py-4" v-html="post.content"></div>
    </v-container>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
import { reactive } from 'vue';
import { onMounted } from 'vue';
const post = reactive(<ContentType>new Object());

const route = useRoute();
onMounted(async () => {
    try {
        const response = await PostService.getContent(route.params.id);
        post.categories = response.categories;
        post.content = response.content;
        post.featuredImage = response.featuredImage;
        post.id = response.id;
        post.title = response.title;
    } catch (e: any) {
        console.error(e);
    }

});

</script>

<style scoped>
:deep(h1) {
    color: #f29738;
    /*文字色*/
    /*線の種類（点線）2px 線色*/
    border-bottom: dashed 2px #f29738;
}

:deep(h2) {
    color: #364e96;
    /*文字色*/
    padding: 0.5em 0;
    /*上下の余白*/
    border-top: solid 3px #364e96;
    /*上線*/
    border-bottom: solid 3px #364e96;
    /*下線*/
}

:deep(h3) {
    padding: 0.25em 0.5em;
    /*上下 左右の余白*/
    color: #494949;
    /*文字色*/
    background: transparent;
    /*背景透明に*/
    border-left: solid 5px #7db4e6;
    /*左線*/
}

:deep(h4) {
    border-bottom: solid 3px skyblue;
    position: relative;
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
</style>