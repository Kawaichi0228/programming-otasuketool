import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f7bb43',
          50: '#fff9eb',
          100: '#fef2d6',
          200: '#fce3ad',
          300: '#f9d17a',
          400: '#f7bb43',
          500: '#f5a416',
          600: '#db850e',
          700: '#b6650f',
          800: '#924f14',
          900: '#774114',
          950: '#432107'
        },
        secondary: {
          DEFAULT: '#43b3f7',
          50: '#ebf7ff',
          100: '#d6effe',
          200: '#addffe',
          300: '#7ac9f9',
          400: '#43b3f7',
          500: '#1698f5',
          600: '#0e7adb',
          700: '#0f5fb6',
          800: '#144b92',
          900: '#143d77',
          950: '#072143'
        },
        accent: {
          DEFAULT: '#f743bb',
          50: '#ffedf8',
          100: '#ffdaf1',
          200: '#ffb5e3',
          300: '#ff85d1',
          400: '#f743bb',
          500: '#f516a4',
          600: '#db0e89',
          700: '#b60f6f',
          800: '#921459',
          900: '#771449',
          950: '#430726'
        }
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
} satisfies Config