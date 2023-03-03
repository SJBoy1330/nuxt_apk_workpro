<template>
  <div>
    <HeaderThemes />
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <FooterThemes />
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
