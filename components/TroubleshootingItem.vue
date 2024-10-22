<template>
  <div class="mb-6">
    <div class="flex mb-2 gap-4">
      <div class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 text-white font-bold text-sm mb-2">
        {{ item.questionNumber }}
      </div>
    </div>
    <p class="mb-2 font-bold text-gray-600">{{ item.question }}</p>
    <div class="flex space-x-4">
      <button 
        v-for="option in item.options" 
        :key="option.id" 
        class="font-bold py-2 px-4 rounded" 
        :class="[
          item.selected === option.id
            ? 'bg-orange-500 text-white'
            : item.selected
              ? 'bg-gray-300 text-gray-500'
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        ]" 
        @click="$emit('select-option', item.questionNumber, option.id)" 
        :disabled="item.selected && item.selected !== option.id"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['item'])
defineEmits(['select-option'])
</script>