<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">問題解決手順フローチャート</h2>
    <h3 class="text-lg font-semibold mb-2">フロントエンドコンポーネント構成</h3>
    <img src="/frontend-components.png" alt="フロントエンドコンポーネント構成" class="max-w-full h-auto rounded-lg shadow-md" />
    <div class="mb-4">
      <textarea v-model="flowchartInput" rows="10" class="w-full p-2 border rounded"
        placeholder="フローチャートの内容を入力してください"></textarea>
    </div>
    <button @click="generateFlowchart" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
      フローチャート生成
    </button>
    <div v-if="flowchartSvg" class="mt-4" v-html="flowchartSvg"></div>

    <!-- 静的な画像表示 -->
    <div class="mt-8"></div>
  </div>
</template>

<script lang="ts" setup>
import mermaid from 'mermaid';
import { onMounted, ref } from 'vue';

const flowchartInput = ref(`graph TB
  A[開始] --> B{1. 再起動・更新・保存}
  B -->|試した| C[2. ログの確認]
  B -->|試せる状況でない| Z[終了]
  C -->|ログは出ている| D[3. ログの内容確認]
  C -->|ログが出ていない| Z
  D -->|2つとも分かった| E[4. 検索・質問]
  D -->|分かっていない| Z
  E -->|検索・質問した| F[5. 作り直し]
  E -->|これからする| Z
  F -->|作り直しした| G[6. 完了]
  F -->|作り直す影響範囲が多く| Z
  G --> Z[終了]
  Z[終了]`);

const flowchartSvg = ref('');

onMounted(() => {
  mermaid.initialize({ startOnLoad: true });
  const savedInput = localStorage.getItem('flowchartInput');
  if (savedInput) {
    flowchartInput.value = savedInput;
  }
});

const generateFlowchart = async () => {
  try {
    const { svg } = await mermaid.render('flowchart', flowchartInput.value);
    flowchartSvg.value = svg;
  } catch (error) {
    console.error('フローチャートの生成に失敗しました:', error);
  }
};
</script>