<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">トラブルシューティング</h2>

    <!-- Clear All Button -->
    <button @click="openClearConfirmation" class="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      すべてクリア
    </button>

    <div class="mb-8">
      <TroubleshootingItem
        v-for="(item, index) in displayedItems"
        :key="item.questionNumber"
        :item="item"
        @select-option="selectOption"
      />
      <!-- "Go back to previous question" button for the last displayed item -->
      <div v-if="displayedItems.length > 1" class="mt-4">
        <button @click="goBackToPreviousQuestion" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          1つ前の質問にもどる
        </button>
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

    <ClearConfirmationDialog
      :is-open="isClearConfirmationOpen"
      @close="closeClearConfirmation"
      @confirm="clearAll"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import TroubleshootingItem from '~/components/TroubleshootingItem.vue';
import ClearConfirmationDialog from '~/components/ClearConfirmationDialog.vue';

interface TroubleshootingOption {
  id: string;
  text: string;
  nextQuestion: number | null;
}

interface TroubleshootingItem {
  questionNumber: number;
  question: string;
  options: TroubleshootingOption[];
  selected: string | null;
}

const troubleshootingItems = ref<TroubleshootingItem[]>([
  {
    questionNumber: 1,
    question: 'ローカルサーバー(npm run dev、yarn devなど)の再起動・Dockerの再起動・ブラウザの更新・ファイル上書き保存して再度試しましたか？(そもそも許可されているか？すぐにそれが完了できるか？)',
    options: [
      { id: '1a', text: '試した', nextQuestion: 2 },
      { id: '1b', text: '試せる状況でない', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 2,
    question: 'エラーのログが出ているか？また、ログを出す方法は分かっているか？(ブラウザの検証ツール、VSCodeのターミナル、Dockerコンテナの中 など)',
    options: [
      { id: '2a', text: 'ログは出ている', nextQuestion: 3 },
      { id: '2b', text: 'ログが出ていない', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 3,
    question: 'そのログから・エラーが発生しているファイルの場所(できれば行数も)・エラーの内容の2つが分かるか？',
    options: [
      { id: '3a', text: '2つとも分かった', nextQuestion: 4 },
      { id: '3b', text: '分かっていない', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 4,
    question: 'エラーの内容をコピーし、検索エンジンでの検索およびAIへの質問を行い、それを試したか？(Google検索、ChatGPT など)',
    options: [
      { id: '4a', text: '検索・質問したうえで試した', nextQuestion: 5 },
      { id: '4b', text: 'これからする', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 5,
    question: 'コードのエラー部分だけ、既存プロジェクト内の似たような機能・公式ドキュメントのサンプル・生成AIでの出力等でのコピーで、1から作り直すことは可能か？かつそれを試したか？(現時点のコードの方向性が、要件の実現に対して、あまり好ましくない方法で行おうとしている可能性があるため)',
    options: [
      { id: '5a', text: 'エラー部分のみ作り直したかつ試した', nextQuestion: 6 },
      { id: '5b', text: '作り直す影響範囲が多くできない', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 6,
    question: 'issueや公式サポートフォーラムなどに質問を行い、それを試したか？(GitHub Issue、Stack Overflow など)',
    options: [
      { id: '6a', text: '質問したうえで試した', nextQuestion: 7 },
      { id: '6b', text: 'これからする', nextQuestion: 8 }
    ],
    selected: null
  },
  {
    questionNumber: 7,
    question: 'そもそも元の要件・設計が実現可能なものであるか見直したか？また、今やろうとしている条件に必ずしもこだわらなくてもよいのでは？(別のパッケージに変更が許されるのであればそちらを使ったほうが早い など)',
    options: [
      { id: '7a', text: '見直したが適切であり、別の方法は許されない', nextQuestion: 8 },
      { id: '7b', text: '見直した結果、別の方法が許された', nextQuestion: null }
    ],
    selected: null
  },
  {
    questionNumber: 8,
    question: 'ここまできたら、迷わずすぐに上司やチームメンバーに相談しましょう！！！(コードレビュー、ペアプログラミング など)',
    options: [
      { id: '8a', text: '相談した', nextQuestion: null },
      { id: '8b', text: 'これからする', nextQuestion: null }
    ],
    selected: null
  }
]);

const currentQuestionNumber = ref(1);

const displayedItems = computed(() => {
  return troubleshootingItems.value.filter(item => item.questionNumber <= currentQuestionNumber.value);
});

const selectOption = (questionNumber: number, optionId: string) => {
  const item = troubleshootingItems.value.find(item => item.questionNumber === questionNumber);
  if (item) {
    item.selected = optionId;
    const selectedOption = item.options.find(option => option.id === optionId);
    if (selectedOption && selectedOption.nextQuestion) {
      currentQuestionNumber.value = selectedOption.nextQuestion;
    } else {
      // 最後の質問に到達した場合の処理
      console.log('トラブルシューティングが完了しました');
    }
  }
};

const isClearConfirmationOpen = ref(false);

const openClearConfirmation = () => {
  isClearConfirmationOpen.value = true;
};

const closeClearConfirmation = () => {
  isClearConfirmationOpen.value = false;
};

const clearAll = () => {
  troubleshootingItems.value.forEach(item => {
    item.selected = null;
  });
  currentQuestionNumber.value = 1;
  closeClearConfirmation();
};

const goBackToPreviousQuestion = () => {
  if (currentQuestionNumber.value > 1) {
    const currentItem = troubleshootingItems.value.find(item => item.questionNumber === currentQuestionNumber.value);
    if (currentItem) {
      currentItem.selected = null;
    }
    currentQuestionNumber.value--;
    const previousItem = troubleshootingItems.value.find(item => item.questionNumber === currentQuestionNumber.value);
    if (previousItem) {
      previousItem.selected = null;
    }
  }
};
</script>