<template>
  <footer class="bg-white border-t">
    <div class="container mx-auto px-6 py-8">
      <nav class="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 mb-6">
        <NuxtLink to="/privacy" class="text-gray-600 hover:text-primary transition-colors duration-200">
          プライバシーポリシー
        </NuxtLink>
        <NuxtLink to="/disclaimer" class="text-gray-600 hover:text-primary transition-colors duration-200">
          免責事項
        </NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-primary transition-colors duration-200">
          お問い合わせ
        </NuxtLink>
        <a 
          href="https://kawaichiblog.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-gray-600 hover:text-primary transition-colors duration-200"
        >
          ブログ
        </a>
        <a 
          href="https://kawaichi0228.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-gray-600 hover:text-primary transition-colors duration-200"
        >
          運営者
        </a>
      </nav>
      <p class="text-center text-gray-500 text-sm">
        © Kawaichi All rights reserved.
      </p>
    </div>
  </footer>
</template>