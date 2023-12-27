<template>
    <v-navigation-drawer :permanent="store.isShow" app dark :width="200">
        <v-list nav dense>
            <v-list-subheader>Himawari</v-list-subheader>
            <v-list-item>
                <v-list-item-title class="text-center">
                    <nuxt-link to="/">ホーム</nuxt-link>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="text-center">
                    <nuxt-link to="/ProfilePage">プロフィール</nuxt-link>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="text-center">
                    <nuxt-link to="/ContactPage">お問い合わせ</nuxt-link>
                </v-list-item-title>
            </v-list-item>

            <v-divider class="border-opacity-50 mt-60"></v-divider>

            <v-list-subheader>SNS</v-list-subheader>
            <v-list-item>
                <v-list-item-title>
                    <v-btn href="https://www.youtube.com/@himawari_aerobytes" class="text-left" block variant="text"><v-icon
                            icon="mdi-youtube" />YouTube
                    </v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title><v-btn href="https://twitter.com/shc_aerobytes" block variant="text"><v-icon
                            icon="mdi-twitter" />X(Twitter)</v-btn></v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title><v-btn href="https://github.com/himawari-aerobytes/himawari-aerobytes" block
                        variant="text"><v-icon icon="mdi-github" />
                        GitHub</v-btn></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script setup lang="ts">
import { useSidebarStore } from '@/composables/SideBarStore';


const store = useSidebarStore();
const router = useRouter();

</script>