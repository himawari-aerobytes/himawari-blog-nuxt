<template>
    <h3 class="ml-3 tracking-widest">最新の投稿</h3>
    <div class="w-full bg-slate-200 grid md:grid-cols-3 py-3 justify-center">
        <template v-if="articleHeaders.length !== 0">
            <v-card class="pb-3 mb-3 mx-3" v-for="header in articleHeaders" @click="cardClickHandler(header.postId)">
                <img class="object-cover w-full h-60" v-if="header.featuredImage?.node?.sourceUrl"
                    :src="header.featuredImage?.node?.sourceUrl" />
                <img class="object-cover" v-else src="@/public/img/HimawariProjectLogo.png" />
                <v-card-title class="font-bold">{{ header.title }}</v-card-title>
                <v-card-subtitle>{{ extractTagText(header.excerpt) }}</v-card-subtitle>
            </v-card>
        </template>
        <template v-else>
            <blog-server-not-found class="pb-3 mb-3 mx-3 col-span-3" :is-show="true" />
        </template>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import PostService from '@/services/PostService';
import BlogServerNotFound from '@/components/BlogServerNotFound.vue';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
    getArticleHeaders();
})

let articleHeaders: Ref<PostType[]> = ref(new Array());

const getArticleHeaders = async () => {
    articleHeaders.value = await PostService.getList();
}

const extractTagText = (target: string) => {
    // HTMLタグのみを除去する正規表現
    const pattern = new RegExp("<(\"[^\"]*\"|'[^']*'|[^'\">])*>", "g");
    // HTMLタグのみを削除して戻り値配列に格納
    const convText = target.replace(pattern, "");

    const MAX_LENGTH = 100;

    if (convText.length > MAX_LENGTH) {
        return convText.substring(0, MAX_LENGTH) + '...';
    }
    return convText;
}

const cardClickHandler = (postId: string) => {
    router.push(`/content/${postId}`);

}


</script>

<style scoped>
.v-card-title {
    text-overflow: "" !important;
    white-space: normal !important;
}
</style>