<template>
    <div class="LoginCallBack">
        <v-container class="mb-10">
            <!-- ローディング画面 -->
            <div class="text-center">
                <p class="my-10">ログインしています</p>
                <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
            </div>
        </v-container>
    </div>
</template>
  
<script setup lang="ts">
import { useLoginProfileStore } from '@/composables/LineProfileStore';
import { onMounted } from 'vue';

//Cookie Define
const MAX_AGE = 604800; // 1week
const lineAccessTokenCookie = useCookie('line_accessToken', { maxAge: MAX_AGE, secure: true });
const lineIdTokenCookie = useCookie('line_idToken', { maxAge: MAX_AGE, secure: true });
const linePictureUrlCookie = useCookie('line_pictureUrl', { maxAge: MAX_AGE, secure: true });
const lineDisplayNameCookie = useCookie('ine_displayName', { maxAge: MAX_AGE, secure: true });
const lineUserIdCookie = useCookie('line_userId', { maxAge: MAX_AGE, secure: true });

// Router(URL Paths)
const router = useRouter();
const route = useRoute();


// LINK_LINE_SIGN_INから値を取得
const runtimeConfig = useRuntimeConfig();
const url = runtimeConfig.public.linkLineSignIn;

const request = {
    'code': route.query.code
}

// Constant
const LINE_PROFILE_URL = "https://api.line.me/v2/profile";

// Store
const store = useLoginProfileStore();

onMounted(async () => {
    try {
        if (!lineAccessTokenCookie.value) {

            const data = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(request)
            });

            const response = await data.json();
            // store
            store.accessToken = await response.access_token;

            // Cookie
            lineAccessTokenCookie.value = await response.access_token;
            lineIdTokenCookie.value = await response.id_token;
        

        }

    } catch (error) {
        console.error("認証に失敗しました");
        console.error(error);
        router.push('/login/auth-failure');
    }

    try {
        let accessToken: string | null;
        if (lineAccessTokenCookie.value) {
            accessToken = lineAccessTokenCookie.value
        } else {
            accessToken = store.accessToken;
        }

        console.log(accessToken);

        const data = await fetch(LINE_PROFILE_URL, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const response =await data.json();

        // store
        store.pictureUrl = await response.pictureUrl || '';
        store.displayName = response.displayName || '';
        store.userId = response.userId || '';

        // Cookie Set
        linePictureUrlCookie.value = store.pictureUrl;
        lineDisplayNameCookie.value = store.displayName;
        lineUserIdCookie.value = store.userId;

        router.push('/');


    } catch (error) {

        lineAccessTokenCookie.value = null;
        lineIdTokenCookie.value = null;
        linePictureUrlCookie.value = null;
        lineDisplayNameCookie.value = null;
        lineUserIdCookie.value = null;

        console.error("プロフィールの取得に失敗しました");
        console.error(error);
        router.push('/login/auth-failure');

    }


})


</script>
