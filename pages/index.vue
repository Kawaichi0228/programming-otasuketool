<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">トラブルシューティング</h2>
    
    <div class="mb-8">
      <div v-for="(item, index) in troubleshootingItems" :key="index" class="mb-6">
        <p class="font-medium mb-2">{{ item.question }}</p>
        <div class="flex space-x-4">
          <button
            v-for="option in item.options"
            :key="option"
            class="font-bold py-2 px-4 rounded"
            :class="[
              item.selected === option
                ? 'bg-orange-500 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            ]"
            @click="selectOption(index, option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>

    <h2 class="text-xl font-semibold mb-4">メインメニュー</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink to="/flowchart" class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
        問題解決手順フローチャート
      </NuxtLink>
      <NuxtLink to="/progress-report" class="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
        進捗報告文章作成
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const troubleshootingItems = ref([
  {
    question: '1. サーバーの再起動・ブラウザの更新・ファイル上書き保存して再度試しましたか？(そもそも許可されているか？すぐにそれが完了できるか？)',
    options: ['試した', '試せる状況でない'],
    selected: null
  },
  {
    question: '2. エラーのログが出ているか？また、ログを出す方法は分かっているか？(ブラウザの検証ツール、VSCodeのターミナル、Dockerコンテナの中 など)',
    options: ['ログは出ている', 'ログが出ていない'],
    selected: null
  },
  {
    question: '3. そのログから・エラーが発生しているファイルの場所(できれば行数も)・エラーの内容の2つが分かるか？',
    options: ['2つとも分かった', '分かっていない'],
    selected: null
  }
]);

const selectOption = (index, option) => {
  troubleshootingItems.value[index].selected = option;
};

watch(troubleshootingItems, () => {
  const flowchartInput = `graph TB
    A[開始] --> B{1. 再起動・更新・保存}
    B -->|${troubleshootingItems.value[0].selected || '未回答'}| C{2. エラーログ}
    C -->|${troubleshootingItems.value[1].selected || '未回答'}| D{3. エラー詳細}
    D -->|${troubleshootingItems.value[2].selected || '未回答'}| E[次のステップ]
  `;
  
  localStorage.setItem('flowchartInput', flowchartInput);
}, { deep: true });
</script>