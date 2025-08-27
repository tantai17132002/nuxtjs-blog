<template>
  <!-- Layout mặc định cho toàn bộ ứng dụng -->
  <!-- min-h-screen: đảm bảo layout có chiều cao tối thiểu bằng màn hình -->
  <!-- flex flex-col: sử dụng flexbox với direction column (dọc) -->
  <!-- bg-gray-50: background màu xám nhạt -->
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Component Navigation bar - hiển thị menu điều hướng -->
    <Navbar />

    <!-- Phần nội dung chính của trang -->
    <!-- container: giới hạn chiều rộng tối đa -->
    <!-- mx-auto: căn giữa theo chiều ngang -->
    <!-- max-w-3xl: chiều rộng tối đa 48rem (768px) -->
    <!-- w-full: chiều rộng 100% -->
    <!-- px-4: padding left/right 1rem -->
    <!-- py-8: padding top/bottom 2rem -->
    <main class="container mx-auto max-w-3xl w-full px-4 py-8">
      <!-- Slot để render nội dung của từng trang -->
      <!-- Nội dung từ page.vue hoặc [slug].vue sẽ được render ở đây -->
      <slot />
    </main>

    <!-- Component Footer - hiển thị thông tin cuối trang -->
    <Footer />
  </div>
</template>
