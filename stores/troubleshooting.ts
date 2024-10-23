import { defineStore } from 'pinia';

interface TroubleshootingOption {
  id: string;
  text: string;
  nextQuestion: number | null;
}

interface TroubleshootingItem {
  id: string | number;
  title: string;
  question: string;
  options: TroubleshootingOption[];
  selected: string | null;
  hints: string[];
}

export const useTroubleshootingStore = defineStore('troubleshooting', {
  state: () => ({
    currentQuestionNumber: 1,
    troubleshootingItems: [
      {
        id: 1,
        title: '基本的な再起動確認',
        question: 'ローカルサーバー(npm run dev、yarn devなど)の再起動・Dockerの再起動・ブラウザの更新・ファイル上書き保存して再度試しましたか？(そもそも許可されているか？すぐにそれが完了できるか？)',
        options: [
          { id: '1a', text: '試した', nextQuestion: 2 },
          { id: '1b', text: '試せる状況でない', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          'ターミナルで Ctrl+C を押してサーバーを停止し、再度起動コマンドを実行',
          'ブラウザで Ctrl+Shift+R でキャッシュクリア付きの更新',
          'Docker Desktopからコンテナの再起動も試してみる'
        ]
      },
      {
        id: 2,
        title: 'エラーログの確認',
        question: 'エラーのログが出ているか？また、ログを出す方法は分かっているか？(ブラウザの検証ツール、VSCodeのターミナル、Dockerコンテナの中 など)',
        options: [
          { id: '2a', text: 'ログは出ている', nextQuestion: 3 },
          { id: '2b', text: 'ログが出ていない', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          'ブラウザの開発者ツール(F12)のConsoleタブを確認',
          'VSCodeのターミナルの出力を確認',
          'docker logs [コンテナ名] でログを確認'
        ]
      },
      {
        id: "2-1",
        title: 'エラー内容の特定',
        question: 'そのログから・エラーが発生しているファイルの場所(できれば行数も)・エラーの内容の2つが分かるか？',
        options: [
          { id: '3a', text: '2つとも分かった', nextQuestion: 4 },
          { id: '3b', text: '分かっていない', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          'スタックトレースの一番上の行に注目',
          'at で始まる行にファイルパスと行数が記載されている',
          'エラーメッセージの最初の行に具体的な問題が書かれていることが多い'
        ]
      },
      {
        id: 4,
        title: '検索とAI活用',
        question: 'エラーの内容をコピーし、検索エンジンでの検索およびAIへの質問を行い、それを試したか？(Google検索、ChatGPT など)',
        options: [
          { id: '4a', text: '検索・質問したうえで試した', nextQuestion: 5 },
          { id: '4b', text: 'これからする', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          'エラーメッセージをそのままコピーして検索',
          'フレームワーク名やライブラリ名を検索キーワードに追加',
          'Stack Overflowの回答を参考にする'
        ]
      },
      {
        id: "4-1",
        title: 'コードの再実装',
        question: 'コードのエラー部分だけ、既存プロジェクト内の似たような機能・公式ドキュメントのサンプル・生成AIでの出力等でのコピーで、1から作り直すことは可能か？かつそれを試したか？(現時点のコードの方向性が、要件の実現に対して、あまり好ましくない方法で行おうとしている可能性があるため)',
        options: [
          { id: '5a', text: 'エラー部分のみ作り直したかつ試した', nextQuestion: 6 },
          { id: '5b', text: '作り直す影響範囲が多くできない', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          '公式ドキュメントのサンプルコードを参考にする',
          '同じプロジェクト内の類似機能の実装を確認',
          'ChatGPTに最小限の実装例を質問する'
        ]
      },
      {
        id: 6,
        title: 'コミュニティ活用',
        question: 'issueや公式サポートフォーラムなどに質問を行い、それを試したか？(GitHub Issue、Stack Overflow など)',
        options: [
          { id: '6a', text: '質問したうえで試した', nextQuestion: 7 },
          { id: '6b', text: 'これからする', nextQuestion: 8 }
        ],
        selected: null,
        hints: [
          'GitHubのIssuesタブで類似の問題を検索',
          'Stack Overflowで関連するキーワードで検索',
          '公式のDiscordやSlackがあれば質問してみる'
        ]
      },
      {
        id: "6-1",
        title: '要件の見直し',
        question: 'そもそも元の要件・設計が実現可能なものであるか見直したか？また、今やろうとしている条件に必ずしもこだわらなくてもよいのでは？(別のパッケージに変更が許されるのであればそちらを使ったほうが早い など)',
        options: [
          { id: '7a', text: '見直したが適切であり、別の方法は許されない', nextQuestion: 8 },
          { id: '7b', text: '見直した結果、別の方法が許された', nextQuestion: null }
        ],
        selected: null,
        hints: [
          '要件のMust/Shouldを確認し直す',
          '代替となるライブラリや実装方法を検討',
          'チームメンバーと要件の解釈を確認'
        ]
      },
      {
        id: 8,
        title: '上司への相談',
        question: 'ここまできたら、迷わずすぐに上司やチームメンバーに相談しましょう！！！(コードレビュー、ペアプログラミング など)',
        options: [
          { id: '8a', text: '相談した', nextQuestion: null },
          { id: '8b', text: 'これからする', nextQuestion: null }
        ],
        selected: null,
        hints: [
          'ここまでの試行錯誤の過程を簡潔に説明できるようにまとめる',
          'コードレビューを依頼する',
          'ペアプログラミングを提案する'
        ]
      }
    ] as TroubleshootingItem[]
  }),
  getters: {
    displayedItems: (state) => {
      return state.troubleshootingItems.filter(item => Number(item.id) <= state.currentQuestionNumber);
    },
    serializedState: (state) => {
      const stateToSave = {
        currentQuestionNumber: state.currentQuestionNumber,
        selections: state.troubleshootingItems.map(item => ({
          id: item.id,
          selected: item.selected
        }))
      };
      return btoa(JSON.stringify(stateToSave));
    }
  },
  actions: {
    selectOption(id: string | number, optionId: string) {
      const item = this.troubleshootingItems.find(item => item.id === id);
      if (item) {
        item.selected = optionId;
        const selectedOption = item.options.find(option => option.id === optionId);
        if (selectedOption && selectedOption.nextQuestion) {
          this.currentQuestionNumber = selectedOption.nextQuestion;
        }
      }
    },
    clearAll() {
      this.troubleshootingItems.forEach(item => {
        item.selected = null;
      });
      this.currentQuestionNumber = 1;
    },
    goBackToPreviousQuestion() {
      if (this.currentQuestionNumber > 1) {
        const currentItem = this.troubleshootingItems.find(item => Number(item.id) === this.currentQuestionNumber);
        if (currentItem) {
          currentItem.selected = null;
        }
        this.currentQuestionNumber--;
        const previousItem = this.troubleshootingItems.find(item => Number(item.id) === this.currentQuestionNumber);
        if (previousItem) {
          previousItem.selected = null;
        }
      }
    },
    restoreFromBase64(base64State: string) {
      try {
        const stateData = JSON.parse(atob(base64State));
        this.currentQuestionNumber = stateData.currentQuestionNumber;
        stateData.selections.forEach((selection: { id: string | number; selected: string | null }) => {
          const item = this.troubleshootingItems.find(item => item.id === selection.id);
          if (item) {
            item.selected = selection.selected;
          }
        });
      } catch (error) {
        console.error('Failed to restore state:', error);
      }
    }
  }
});