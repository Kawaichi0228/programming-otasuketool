<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">問題解決手順フローチャート</h2>
    <div class="mb-4">
      <textarea v-model="flowchartInput" rows="10" class="w-full p-2 border rounded" placeholder="フローチャートの内容を入力してください"></textarea>
    </div>
    <button @click="generateFlowchart" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
      フローチャート生成
    </button>
    <div v-if="flowchartSvg" class="mt-4" v-html="flowchartSvg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import mermaid from 'mermaid'

const flowchartInput = ref(`graph TB
  A[開始] --> B{1. 再起動・更新・保存}
  B -->|未回答| C{2. エラーログ}
  C -->|未回答| D{3. エラー詳細}
  D -->|未回答| E[次のステップ]`)

const flowchartSvg = ref('')

onMounted(() => {
  mermaid.initialize({ startOnLoad: true })
  const savedInput = localStorage.getItem('flowchartInput')
  if (savedInput) {
    flowchartInput.value = savedInput
  }
})

const generateFlowchart = async () => {
  try {
    const { svg } = await mermaid.render('flowchart', flowchartInput.value)
    flowchartSvg.value = svg
  } catch (error) {
    console.error('フローチャートの生成に失敗しました:', error)
  }
}
</script>