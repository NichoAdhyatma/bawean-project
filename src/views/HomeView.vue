<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import MainLayout from "../layout/MainLayout.vue"
</script>

<template>
  <MainLayout>
    <template #header>
      <h1>Bawean Island</h1>
    </template>
    <template #main>
      <TheWelcome />
    </template>
  </MainLayout>
</template>
