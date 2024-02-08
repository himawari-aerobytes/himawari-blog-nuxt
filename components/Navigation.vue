<template>
    <div class="mb-3 ">
        <v-app-bar color="orange" app>
            <v-btn class="xl:hidden text-white" @click="sideBarStore.changeShow" icon>
                <v-icon>mdi-menu</v-icon>

            </v-btn>

            <v-toolbar-title class="text-white">Himawari Project</v-toolbar-title>


            <div v-if="loginProfileStore.isLogin()">
                <div class="flex">
                    <v-avatar id="menu-activator" size="large" @click="openMenu">
                        <v-img :src="loginProfileStore.getPictureUrl()" />
                    </v-avatar>
                    <p id="menu-activator" class="my-auto md:block hidden mx-3 font-bold text-white">{{
                        loginProfileStore.getDisplayName() }}</p>

                    <v-menu activator="#menu-activator">
                        <v-list>
                            <v-list-item class="text-red-500">
                                <v-list-item-title @click="logout">ログアウトする</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                </div>

            </div>
            <div v-else>
                <login-page class="mr-2" />
            </div>
        </v-app-bar>

    </div>
</template>
    
<script setup lang="ts">
import LoginPage from '@/pages/LoginPage.vue';
import { useLoginProfileStore } from '@/composables/LineProfileStore';
import { useSidebarStore } from '@/composables/SideBarStore';
import { ref } from 'vue';

const sideBarStore = useSidebarStore();
const loginProfileStore = useLoginProfileStore();


//Cookie Define
const MAX_AGE = 604800; // 1week
const lineAccessTokenCookie = useCookie('line_accessToken', { maxAge: MAX_AGE, secure: true });
const lineIdTokenCookie = useCookie('line_idToken', { maxAge: MAX_AGE, secure: true });
const linePictureUrlCookie = useCookie('line_pictureUrl', { maxAge: MAX_AGE, secure: true });
const lineDisplayNameCookie = useCookie('ine_displayName', { maxAge: MAX_AGE, secure: true });
const lineUserIdCookie = useCookie('line_userId', { maxAge: MAX_AGE, secure: true });

let menuOpen = ref(false);

const openMenu = () => {
    menuOpen.value = true;
}

const logout = () => {
    lineAccessTokenCookie.value = null;
    lineIdTokenCookie.value = null;
    linePictureUrlCookie.value = null;
    lineDisplayNameCookie.value = null;
    lineUserIdCookie.value = null;

    location.reload();
}

</script>