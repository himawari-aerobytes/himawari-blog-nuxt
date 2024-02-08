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

const url = 'https://wdruieg1nl.execute-api.ap-northeast-1.amazonaws.com/himawari-line-login-1';


const request = {
    'code': route.query.code
}

console.log("りくえすと");
console.log(request);

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

            console.log(`storeにセットした値は、${store.accessToken}です。`);

            // Cookie

            lineAccessTokenCookie.value = await response.access_token;
            lineIdTokenCookie.value = await response.id_token;
            console.log(`cookieにセットした値は、${lineAccessTokenCookie.value}です。`);

        }

    } catch (error) {
        console.error("認証に失敗しました");
        console.error(error);
        router.push('/login/auth-failure');
    }

    try {
        let accessToken: string | null;
        if (lineAccessTokenCookie.value) {
            console.log("cookieから値を取得しました");
            accessToken = lineAccessTokenCookie.value
        } else {
            console.log("storeから値を取得しました");
            accessToken = store.accessToken;
        }

        console.log(accessToken);

        const data = await fetch(LINE_PROFILE_URL, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const response =await data.json();

        console.log("2回目のログイン");

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
