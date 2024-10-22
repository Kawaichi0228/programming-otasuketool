<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">トラブルシューティング</h2>

    <ClearButton @click="openClearConfirmation" />

    <div class="mb-8">
      <TroubleshootingItem
        v-for="item in displayedItems"
        :key="item.questionNumber"
        :item="item"
        @select-option="selectOption"
      />
      <BackButton 
        v-if="displayedItems.length > 1"
        @click="goBackToPreviousQuestion"
      />
    </div>

    <ClearConfirmationDialog
      :is-open="isClearConfirmationOpen"
      @close="closeClearConfirmation"
      @confirm="clearAll"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TroubleshootingItem from './TroubleshootingItem.vue';
import ClearConfirmationDialog from './ClearConfirmationDialog.vue';
import ClearButton from './ClearButton.vue';
import BackButton from './BackButton.vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

const store = useTroubleshootingStore();
const { displayedItems } = storeToRefs(store);
const isClearConfirmationOpen = ref(false);

const selectOption = (questionNumber: number, optionId: string) => {
  store.selectOption(questionNumber, optionId);
};

const openClearConfirmation = () => {
  isClearConfirmationOpen.value = true;
};

const closeClearConfirmation = () => {
  isClearConfirmationOpen.value = false;
};

const clearAll = () => {
  store.clearAll();
  closeClearConfirmation();
};

const goBackToPreviousQuestion = () => {
  store.goBackToPreviousQuestion();
};
</script>