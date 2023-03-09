<template>
    <div class="auth-screen" 
    style="background-image: url(&quot;assets/img/splash-screen.png&quot;);"></div>
</template>

<style scoped></style>

<script setup>
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "auth",
})
// const a = publicAssetsURL('css');
// console.log(a);
</script>
