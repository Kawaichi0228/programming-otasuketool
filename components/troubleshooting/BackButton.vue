<template>
  <div class="mt-6">
    <button 
      @click="$emit('click')" 
      class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200"
    >
      1つ前の質問にもどる
    </button>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>