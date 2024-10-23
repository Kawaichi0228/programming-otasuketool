<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-body pt-14 flex flex-col">
    <header class="fixed top-0 left-0 right-0 bg-white text-white h-14 shadow-sm z-50">
      <div class="container mx-auto px-6 h-full flex items-center justify-between">
        <h1 class="flex items-center">
          <LinkLogo href="/" classProp="ml-2" color="#f7bb43" sub-color="#fff" />
        </h1>

        <!-- Desktop Menu -->
        <div class=" hidden md:flex gap-3">
          <button @click="openClearConfirmation"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200">
            すべてクリア
          </button>
          <button @click="openShareDialog"
            class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200">
            保存して共有
          </button>
        </div>

        <!-- Mobile Icons -->
        <div class="flex md:hidden gap-2">
          <button @click="openClearConfirmation"
            class="p-2 hover:bg-primary-600 rounded-lg transition-colors duration-200" aria-label="すべてクリア">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <button @click="openShareDialog" class="p-2 hover:bg-primary-600 rounded-lg transition-colors duration-200"
            aria-label="保存して共有">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="container mx-auto p-6 flex-grow">
      <NuxtPage />
    </main>

    <SiteFooter />

    <ClearConfirmationDialog :is-open="isClearConfirmationOpen" @close="closeClearConfirmation" @confirm="clearAll" />
    <ShareDialog :is-open="isShareDialogOpen" @close="closeShareDialog" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import LinkLogo from '~/components/layout/LinkLogo.vue';
import SiteFooter from '~/components/layout/SiteFooter.vue';
import ClearConfirmationDialog from '~/components/troubleshooting/ClearConfirmationDialog.vue';
import ShareDialog from '~/components/troubleshooting/ShareDialog.vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
    }
  ]
});

const store = useTroubleshootingStore();
const isClearConfirmationOpen = ref(false);
const isShareDialogOpen = ref(false);

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

const openShareDialog = () => {
  isShareDialogOpen.value = true;
};

const closeShareDialog = () => {
  isShareDialogOpen.value = false;
};
</script>