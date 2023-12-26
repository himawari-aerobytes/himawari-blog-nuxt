<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-card-title class="error-page">
                        <h2>認証失敗</h2>
                    </v-card-title>
                    <v-card-text>
                        <p>申し訳ありません、認証に失敗しました。</p>
                        <!-- 他のコンテンツやリンクを追加することができます -->
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
  

<style>
.error-page {
    background-color: red;
    color: white;
    text-align: center;
}
</style>