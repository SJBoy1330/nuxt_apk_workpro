<template>
  <div>
    <main class="h-100">
      <HeaderThemes />
        <div class="container mx-auto p-4">
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
