<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">出力メニュー</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path" 
        class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
      >
        {{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuItems = [
  {
    path: '/flowchart',
    text: '問題解決手順フローチャート'
  },
  {
    path: '/progress-report',
    text: '進捗報告文章作成'
  }
];
</script>