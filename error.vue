<template>
    <div class="error-page">
        <h1 class="error-title">{{ errorCode }}</h1>
        <p class="error-message">{{ errorMessage }}</p>
        <router-link to="/" class="error-link">ホームに戻る</router-link>
        <footer class="footer">
    <p>Copyright &copy HimawariProject 2024</p>
  </footer>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            errorCode: 404,
            errorMessage: "お探しのページは見つかりませんでした。",
        };
    },
    created() {
        // You can customize the error message based on the error code here
        if (this.errorCode === 404) {
            this.errorMessage = "お探しのページは見つかりませんでした。";
        } else if (this.errorCode === 500) {
            this.errorMessage = "サーバーエラーが発生しました。";
        } else {
            this.errorMessage = "エラーが発生しました。";
        }
    },
};
</script>

<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #f44336;
    font-family: Arial, sans-serif;
}

.error-title {
    font-size: 6rem;
    margin-bottom: 1rem;
}

.error-message {
    font-size: 2rem;
    margin-bottom: 2rem;
    color:black;
}

.error-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 20px;
    transition: background-color 0.3s ease;
}

.error-link:hover {
    background-color: #1559a2;
    color: #fff;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}
</style>
