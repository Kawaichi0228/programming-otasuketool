<template>
  <div class="mt-4">
    <button 
      @click="$emit('click')" 
      class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
    >
      1つ前の質問にもどる
    </button>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>