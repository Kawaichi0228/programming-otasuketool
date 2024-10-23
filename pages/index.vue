<template>
  <div>
    <TroubleshootingList />
    <OutputMenu />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from '#app';
import TroubleshootingList from '~/components/troubleshooting/TroubleshootingList.vue';
import OutputMenu from '~/components/navigation/OutputMenu.vue';
import { useTroubleshootingStore } from '~/stores/troubleshooting';

const route = useRoute();
const store = useTroubleshootingStore();

onMounted(() => {
  const stateParam = route.query.state;
  if (typeof stateParam === 'string') {
    store.restoreFromBase64(stateParam);
  }
});
</script>