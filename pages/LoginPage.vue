<template>
    <v-btn class="bg-emerald-600 text-white" v-on:click="login"> Login </v-btn>
</template>
  
<script setup lang="ts">

const login = () => {
    const response_type = 'code';
    const client_id = 2001255947;

    const redirect_uri = 'https://blog.himawari.engineerseed.com/app/LoginCallBackPage'; //設定したコールバック関数をURLエンコードしたもの
    const state = '12345abcde';//一旦ここはテキトー
    const scope = 'profile%20openid';
    const nonce = '09876xyz';//一旦ここはテキトー

    window.location.href = 'https://access.line.me/oauth2/v2.1/authorize?response_type=' + response_type +
        '&client_id=' + client_id +
        '&redirect_uri=' + redirect_uri +
        '&state=' + state +
        '&scope=' + scope +
        '&nonce=' + nonce;
}

</script>
  