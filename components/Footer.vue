<script setup lang="ts">
// Lấy năm hiện tại để hiển thị trong copyright
const year = new Date().getFullYear()
</script>

<template>
  <!-- Footer chính của trang web với border top và background semi-transparent -->
  <footer class="mt-auto border-t bg-white/80">
    <!-- Container chứa nội dung footer với responsive design -->
    <div class="container mx-auto max-w-3xl px-4 py-6 text-sm text-gray-500">
      <!-- Copyright text với năm hiện tại được tự động cập nhật -->
      © {{ year }} Nuxt Blog. All rights reserved.
    </div>
  </footer>
</template>
