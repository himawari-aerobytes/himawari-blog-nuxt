<template>
    <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
        <v-icon class="mb-5" color="#CB4829" icon="mdi-alert-box" size="112"></v-icon>

        <h2 class="text-h5 mb-6">送信に失敗しました</h2>

        <p class="mb-4 text-medium-emphasis text-body-2">
            このエラーが何度も発生する場合は、X(Twitter)にてご連絡ください
        </p>

        <v-divider class="mb-4"></v-divider>

        <div class="text-end">
            <v-btn class="text-white" color="#CB4829" rounded variant="flat" width="90">
                <router-link to="/">戻る</router-link>

            </v-btn>
        </div>
    </v-sheet>
</template>