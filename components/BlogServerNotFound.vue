<template v-if="isShow">
    <div v-if="isTimeout">
        <h1 class="text-bold"> サーバが一時的に停止しています </h1>
        <p>ページを再読み込みすると表示されることがあります</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';

defineProps(['isShow']);
const isTimeout = ref(false);
onMounted(() => {
    setTimeout(() => {
        isTimeout.value = true;
    }, 1000);
});


</script>