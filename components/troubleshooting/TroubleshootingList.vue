<template>
  <div>
    <h2 class="text-3xl font-bold mb-8 text-gray-800">トラブルシューティング</h2>

    <div class="mb-8">
      <TroubleshootingItem
        v-for="item in displayedItems"
        :key="item.id"
        :item="item"
        @select-option="selectOption"
      />
      <BackButton 
        v-if="displayedItems.length > 1"
        @click="goBackToPreviousQuestion"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import TroubleshootingItem from './TroubleshootingItem.vue';
import BackButton from './BackButton.vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

const store = useTroubleshootingStore();
const { displayedItems } = storeToRefs(store);

const selectOption = (id: string | number, optionId: string) => {
  store.selectOption(id, optionId);
};

const goBackToPreviousQuestion = () => {
  store.goBackToPreviousQuestion();
};
</script>