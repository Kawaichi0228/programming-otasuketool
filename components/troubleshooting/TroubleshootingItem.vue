<template>
  <div class="mb-6">
    <div class="flex mb-2 gap-4">
      <div class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 text-white font-bold text-sm mb-2">
        {{ item.questionNumber }}
      </div>
    </div>
    <p class="mb-2 font-bold text-gray-600">{{ item.question }}</p>
    
    <!-- ヒントアコーディオン -->
    <div class="mb-4">
      <button 
        @click="isHintOpen = !isHintOpen"
        class="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
      >
        <span>ヒントをみる</span>
        <span class="transform transition-transform" :class="{ 'rotate-180': isHintOpen }">
          ▼
        </span>
      </button>
      <div 
        v-if="isHintOpen"
        class="mt-2 pl-4 border-l-2 border-orange-200"
      >
        <ul class="list-disc list-inside space-y-2">
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
import { ref } from 'vue';

interface TroubleshootingOption {
  id: string;
  text: string;
  nextQuestion: number | null;
}

interface TroubleshootingItem {
  questionNumber: number;
  question: string;
  options: TroubleshootingOption[];
  selected: string | null;
  hints: string[];
}

defineProps<{
  item: TroubleshootingItem;
}>();

defineEmits<{
  'select-option': [questionNumber: number, optionId: string];
}>();

const isHintOpen = ref(false);
</script>