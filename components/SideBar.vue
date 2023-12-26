<template>
    <v-navigation-drawer image="https://blog.himawari.engineerseed.com/wp-content/uploads/2023/10/SideBar.png"
        :permanent="store.isShow" app dark :width="200">
        <v-list nav dense>
            <v-list-subheader>Himawari</v-list-subheader>
            <v-list-item>
                <v-list-item-title>
                    <v-btn href="/index" block variant="text">ホーム</v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-btn href="/content/profile" block variant="text">プロフィール</v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title>
                    <v-btn href="/contact" block variant="text">お問い合わせ</v-btn>
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

</script>