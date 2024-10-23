<template>
  <button 
    @click="$emit('click')" 
    class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
  >
    すべてクリア
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>