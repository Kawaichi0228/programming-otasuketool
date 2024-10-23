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
            class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200 flex items-center gap-1">
            <font-awesome-icon :icon="['far', 'circle-xmark']" class="h-6 w-6 text-gray-600" />
            <span>
              すべてクリア
            </span>
          </button>
          <button @click="openShareDialog"
            class="font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200 border-primary border-2 bg-white text-primary flex items-center gap-1">
            <font-awesome-icon :icon="['fas', 'floppy-disk']" class="h-6 w-6 text-primary" />
            <span>
              保存して共有
            </span>
          </button>
        </div>

        <!-- Mobile Icons -->
        <div class="flex md:hidden gap-2">
          <button @click="openClearConfirmation" class="p-2 rounded-lg transition-colors duration-200"
            aria-label="すべてクリア">
            <font-awesome-icon :icon="['far', 'circle-xmark']" class="h-6 w-6 text-gray-600" />
          </button>

          <button @click="openShareDialog" class="p-2 rounded-lg transition-colors duration-200" aria-label="保存して共有">
            <font-awesome-icon :icon="['fas', 'floppy-disk']" class="h-6 w-6 text-gray-600" />
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