<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">お問い合わせ</h1>

    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
          お名前
        </label>
        <input type="text" id="name" name="name"
          class="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3" />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          メールアドレス
        </label>
        <input type="email" id="email" name="email"
          class="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3" />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
          お問い合わせ内容
        </label>
        <textarea id="message" name="message" rows="4"
          class="w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3"></textarea>
      </div>

      <div>
        <button type="submit"
          class="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200">
          送信する
        </button>
      </div>
    </form>

    <div class="mt-8 p-6 bg-primary-50 rounded-xl">
      <h2 class="text-xl font-bold mb-4">お問い合わせの前に</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>返信までに数日かかる場合があります</li>
        <li>内容によっては返信できない場合があります</li>
        <li>技術的な質問は、可能な限り具体的にご記載ください</li>
      </ul>
    </div>
  </div>
</template>