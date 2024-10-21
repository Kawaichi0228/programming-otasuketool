<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">進捗報告文章作成</h2>
    <div class="mb-4">
      <label class="block mb-2">タスク名</label>
      <input v-model="taskName" type="text" class="w-full p-2 border rounded" placeholder="タスク名を入力">
    </div>
    <div class="mb-4">
      <label class="block mb-2">進捗状況 (%)</label>
      <input v-model="progress" type="number" min="0" max="100" class="w-full p-2 border rounded" placeholder="進捗率を入力">
    </div>
    <div class="mb-4">
      <label class="block mb-2">完了した作業</label>
      <textarea v-model="completedWork" rows="3" class="w-full p-2 border rounded" placeholder="完了した作業を入力"></textarea>
    </div>
    <div class="mb-4">
      <label class="block mb-2">次のステップ</label>
      <textarea v-model="nextSteps" rows="3" class="w-full p-2 border rounded" placeholder="次のステップを入力"></textarea>
    </div>
    <button @click="generateReport" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
      レポート生成
    </button>
    <div v-if="report" class="mt-4 p-4 bg-white border rounded">
      <h3 class="font-semibold mb-2">生成されたレポート:</h3>
      <pre class="whitespace-pre-wrap">{{ report }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const taskName = ref('')
const progress = ref(0)
const completedWork = ref('')
const nextSteps = ref('')
const report = ref('')

const generateReport = () => {
  report.value = `# ${taskName.value} 進捗報告

## 進捗状況
現在の進捗: ${progress.value}%

## 完了した作業
${completedWork.value}

## 次のステップ
${nextSteps.value}

---
報告日時: ${new Date().toLocaleString('ja-JP')}`
}
</script>