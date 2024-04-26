<script setup lang="ts">

import { defineEmits } from 'vue'
const emit = defineEmits(['navigate'])

const showGif = ref(true);

onMounted(() => {
  setTimeout(() => {
    showGif.value = false;
    emit('navigate', 'login');
  }, 3000);
});
</script>

<template>
    <div v-if="showGif" class="gif-showcase">
      <!-- Your GIF here -->
      <img src="@/assets/images/cbper-click.gif" alt="GIF Showcase" class="object-cover h-full w-full">
    </div>
</template>
