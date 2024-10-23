// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@pinia/nuxt"],
  colorMode: {
    preference: "light",
  },
  app: {
    head: {
      title: "プログラミングのエラーおたすけツール！",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "description" },
        { name: "robots", content: "index, follow" },
        { property: "og:locale", content: "ja_JP" },
        {
          property: "og:title",
          content: "プログラミングのエラーおたすけツール！",
        },
        {
          property: "og:site_name",
          content: "プログラミングのエラーおたすけツール！",
        },
        { property: "og:description", content: "description" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@kawaichi0228" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "path/to/ogpImage" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon-48x48.png",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
});
