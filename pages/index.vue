<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">トラブルシューティング</h2>

    <div class="mb-8">
      <div v-for="(item, index) in troubleshootingItems" :key="index" class="mb-6">
        <div class="flex mb-2 gap-4">
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 text-white font-bold text-sm mb-2">
            {{ item.questionNumber }}
          </div>
        </div>
        <p class="mb-2 font-bold text-gray-600">{{ item.question }}</p>
        <div class="flex space-x-4">
          <button v-for="option in item.options" :key="option" class="font-bold py-2 px-4 rounded" :class="[
        item.selected === option
          ? 'bg-orange-500 text-white'
          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
      ]" @click="selectOption(index, option)">
            {{ option }}
          </button>
        </div>
        <div class="border-b border-gray-300 w-full mt-8"></div>
      </div>
    </div>

    <h2 class="text-xl font-semibold mb-4">出力メニュー</h2>
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
    questionNumber: 1,
    question: 'ローカルサーバー(npm run dev、yarn devなど)の再起動・Dockerの再起動・ブラウザの更新・ファイル上書き保存して再度試しましたか？(そもそも許可されているか？すぐにそれが完了できるか？)',
    options: ['試した', '試せる状況でない'],
    selected: null
  },
  {
    questionNumber: 2,
    question: 'エラーのログが出ているか？また、ログを出す方法は分かっているか？(ブラウザの検証ツール、VSCodeのターミナル、Dockerコンテナの中 など)',
    options: ['ログは出ている', 'ログが出ていない'],
    selected: null
  },
  {
    questionNumber: 3,
    question: 'そのログから・エラーが発生しているファイルの場所(できれば行数も)・エラーの内容の2つが分かるか？',
    options: ['2つとも分かった', '分かっていない'],
    selected: null
  },
  {
    questionNumber: 4,
    question: 'エラーの内容をコピーし、検索エンジンでの検索およびAIへの質問を行い、それを試したか？(Google検索、ChatGPT など)',
    options: ['検索・質問したうえで試した', 'これからする'],
    selected: null
  },
  {
    questionNumber: 5,
    question: 'コードのエラー部分だけ、既存プロジェクト内の似たような機能・公式ドキュメントのサンプル・生成AIでの出力等でのコピーで、1から作り直すことは可能か？かつそれを試したか？(現時点のコードの方向性が、要件の実現に対して、あまり好ましくない方法で行おうとしている可能性があるため)',
    options: ['エラー部分のみ作り直したかつ試した', '作り直す影響範囲が多くできない'],
    selected: null
  },
  {
    questionNumber: 6,
    question: 'issueや公式サポートフォーラムなどに質問を行い、それを試したか？(GitHub Issue、Stack Overflow など)',
    options: ['質問したうえで試した', 'これからする'],
    selected: null
  },
  {
    questionNumber: 7,
    question: 'そもそも元の要件・設計が実現可能なものであるか見直したか？また、今やろうとしている条件に必ずしもこだわらなくてもよいのでは？(別のパッケージに変更が許されるのであればそちらを使ったほうが早い など)',
    options: ['見直したが適切であり、別の方法は許されない', '見直した結果、別の方法が許された'],
    selected: null
  },
  {
    questionNumber: 8,
    question: 'ここまできたら、迷わずすぐに上司やチームメンバーに相談しましょう！！！(コードレビュー、ペアプログラミング など)',
    options: ['相談した', 'これからする'],
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
    D -->|${troubleshootingItems.value[2].selected || '未回答'}| E{4. 検索・質問}
    E -->|${troubleshootingItems.value[3].selected || '未回答'}| F{5. 作り直し}
    F -->|${troubleshootingItems.value[4].selected || '未回答'}| G{6. 質問}
    G -->|${troubleshootingItems.value[5].selected || '未回答'}| H{7. 要件・設計}
    H -->|${troubleshootingItems.value[6].selected || '未回答'}| I{8. 相談}
    I -->|${troubleshootingItems.value[7].selected || '未回答'}| J[終了]`;
  localStorage.setItem('flowchartInput', flowchartInput);
}, { deep: true });
</script>