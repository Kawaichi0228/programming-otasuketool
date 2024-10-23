<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">トラブルシューティング</h2>

    <div class="flex gap-4 mb-4">
      <ClearButton @click="openClearConfirmation" />
      <button 
        @click="openShareDialog"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        保存して共有
      </button>
    </div>

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

    <ShareDialog
      :is-open="isShareDialogOpen"
      @close="closeShareDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TroubleshootingItem from './TroubleshootingItem.vue';
import ClearConfirmationDialog from './ClearConfirmationDialog.vue';
import ShareDialog from './ShareDialog.vue';
import ClearButton from './ClearButton.vue';
import BackButton from './BackButton.vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

const store = useTroubleshootingStore();
const { displayedItems } = storeToRefs(store);
const isClearConfirmationOpen = ref(false);
const isShareDialogOpen = ref(false);

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

const openShareDialog = () => {
  isShareDialogOpen.value = true;
};

const closeShareDialog = () => {
  isShareDialogOpen.value = false;
};
</script>