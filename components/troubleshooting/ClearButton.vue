<template>
  <button 
    @click="$emit('click')" 
    class="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
  >
    すべてクリア
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>