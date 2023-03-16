<template>
  <div>
    <main class="h-100">
      <MainHeaderThemes />
      <div class="container mx-auto">
        <slot />
      </div>
      <FooterThemes />
    </main>
  </div>
</template>
  
<script setup>
console.log('ok');
</script>
  
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>