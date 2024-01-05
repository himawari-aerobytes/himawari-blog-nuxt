<template>
  <v-container fluid>
    <v-layout align-center justify-center class="justify-center ">
      <v-flex xs12 sm8 md6>
        <div class="text-center">
          <v-card-title class=" grey lighten-2">
            404 - Not Found
          </v-card-title>
          <v-card-text>
            ご指定のページは存在しませんでした。
          </v-card-text>
          <v-card-actions>
            <v-btn to="/" color="primary">ホームに戻る</v-btn>
          </v-card-actions>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
/* ここに必要なスタイルを追加 */
</style>