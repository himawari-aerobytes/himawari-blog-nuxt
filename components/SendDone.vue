<template>
    <div class="md:m-5 md:p-5">
        <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
            <v-icon class="mb-5" color="success" icon="mdi-check-circle" size="112"></v-icon>

            <h2 class="text-h5 mb-6">送信完了</h2>

            <p class="mb-4 text-medium-emphasis text-body-2">
                お客様のご意見は管理者へ通知されました。
            </p>

            <v-divider class="mb-4"></v-divider>

            <div class="text-end">
                <v-btn @click="() => $router.push({ name: '/' })" class=" text-none" color="success" rounded variant="flat"
                    width="90">
                    <router-link to="/">戻る</router-link>
                </v-btn>
            </div>
        </v-sheet>
    </div>
</template>