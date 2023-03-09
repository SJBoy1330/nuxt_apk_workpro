<template>
  <div>
    <main class="h-100">
      <SecondHeaderThemes />
      <div class="container mx-auto mt-4">
        <slot />
      </div>
      <FooterThemes />
    </main>
  </div>
</template>
  
<script setup>

</script>
  
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>