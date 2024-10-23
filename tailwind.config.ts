import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f7bb43",
          50: "#fff9eb",
          100: "#fef2d6",
          600: "#f7bb43",
        },
        secondary: {
          DEFAULT: "#43b3f7",
        },
        accent: {
          DEFAULT: "#B1BE2E",
        },
        error: {
          DEFAULT: "#FF9689",
        },
        cgray: {
          DEFAULT: "#4f4f4f",
        },
      },
      fontFamily: {
        body: [
          '"Noto Sans JP"',
          "Avenir",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Hiragino Sans"',
          "ヒラギノ角ゴシック",
          "メイリオ",
          "Meiryo",
          "YuGothic",
          '"Yu Gothic"',
          '"ＭＳ Ｐゴシック"',
          '"MS PGothic"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
