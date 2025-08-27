<template>
  <!-- Layout chuyên dụng cho các trang blog post -->
  <!-- min-h-screen: đảm bảo layout có chiều cao tối thiểu bằng màn hình -->
  <!-- flex flex-col: sử dụng flexbox với direction column (dọc) -->
  <!-- bg-white: background màu trắng (khác với default layout) -->
  <div class="min-h-screen flex flex-col bg-white">
    
    <!-- Component Navigation bar - hiển thị menu điều hướng -->
    <Navbar />
    
    <!-- Phần nội dung chính của trang blog -->
    <!-- container: giới hạn chiều rộng tối đa -->
    <!-- mx-auto: căn giữa theo chiều ngang -->
    <!-- max-w-3xl: chiều rộng tối đa 48rem (768px) -->
    <!-- w-full: chiều rộng 100% -->
    <!-- px-4: padding left/right 1rem -->
    <!-- py-8: padding top/bottom 2rem -->
    <main class="container mx-auto max-w-3xl w-full px-4 py-8">
      
      <!-- Article container cho nội dung blog -->
      <!-- prose prose-lg: áp dụng typography styles cho nội dung text -->
      <!-- prose-lg: kích thước text lớn hơn cho dễ đọc -->
      <!-- max-w-none: không giới hạn chiều rộng tối đa (để prose hoạt động tốt) -->
      <article class="prose prose-lg max-w-none">
        <!-- Slot để render nội dung của blog post -->
        <!-- Nội dung Markdown từ [slug].vue sẽ được render ở đây -->
        <slot />
      </article>
    </main>
    
    <!-- Component Footer - hiển thị thông tin cuối trang -->
    <Footer />
  </div>
</template>
  