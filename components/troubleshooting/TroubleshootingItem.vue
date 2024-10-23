<template>
  <div class="mb-8 bg-white p-6 rounded-2xl shadow-sm">
    <div class="flex mb-4 gap-4">
      <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-bold text-lg">
        {{ item.id }}
      </div>
      <h3 class="text-xl font-bold text-gray-800 flex items-center">
        {{ item.title }}
      </h3>
    </div>
    <p class="mb-4 text-lg font-bold text-gray-700">{{ item.question }}</p>
    
    <!-- ヒントアコーディオン -->
    <div class="mb-6">
      <button 
        @click="isHintOpen = !isHintOpen"
        class="flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors duration-200"
      >
        <span>ヒントをみる</span>
        <span class="transform transition-transform" :class="{ 'rotate-180': isHintOpen }">
          ▼
        </span>
      </button>
      <div 
        v-if="isHintOpen"
        class="mt-4 pl-4 border-l-2 border-primary-100"
      >
        <ul class="list-disc list-inside space-y-3">
          <li 
            v-for="(hint, index) in item.hints" 
            :key="index"
            class="text-gray-600"
          >
            {{ hint }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap gap-4">
      <button 
        v-for="option in item.options" 
        :key="option.id" 
        class="font-bold py-3 px-6 rounded-xl transition-colors duration-200" 
        :class="[
          item.selected === option.id
            ? 'bg-primary text-white'
            : item.selected
              ? 'bg-gray-100 text-gray-400'
              : 'bg-primary-50 text-gray-700 hover:bg-primary-100'
        ]" 
        @click="$emit('select-option', item.id, option.id)" 
        :disabled="item.selected && item.selected !== option.id"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface TroubleshootingOption {
  id: string;
  text: string;
  nextQuestion: number | null;
}

interface TroubleshootingItem {
  id: string | number;
  title: string;
  question: string;
  options: TroubleshootingOption[];
  selected: string | null;
  hints: string[];
}

defineProps<{
  item: TroubleshootingItem;
}>();

defineEmits<{
  'select-option': [id: string | number, optionId: string];
}>();

const isHintOpen = ref(false);
</script>