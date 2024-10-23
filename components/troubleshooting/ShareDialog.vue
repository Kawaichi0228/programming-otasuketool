<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-2xl font-bold leading-6 text-gray-900 mb-4">
                保存して共有
              </DialogTitle>
              <div class="mt-2">
                <p class="text-base text-gray-600 mb-6">
                  現在の状態を保存したURLを発行しました。
                  <br />
                  (途中から再開または共有する場合は、以下のURLをコピーしてください)
                </p>
                <div class="flex items-center gap-3">
                  <input type="text" readonly :value="shareUrl"
                    class="flex-1 p-3 border rounded-xl text-base text-gray-600 bg-gray-100" />
                  <button @click="handleCopy"
                    class="inline-flex items-center justify-center p-3 text-gray-600 hover:text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-xl transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="mt-8 flex justify-end">
                <button type="button"
                  class="inline-flex justify-center rounded-xl border border-transparent px-6 py-3 text-base font-medium text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-colors duration-200 bg-gray-100 hover:bg-gray-200"
                  @click="$emit('close')">
                  閉じる
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { computed } from 'vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  close: [];
}>();

const store = useTroubleshootingStore();
const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
const shareUrl = computed(() => `${baseUrl}?state=${store.serializedState}`);

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value);
    alert('コピーしました');
  } catch (err) {
    console.error('Failed to copy:', err);
    alert('コピーに失敗しました');
  }
};
</script>