<template>
  <!-- Container chính của ứng dụng -->
  <div>
    <!-- Header của trang web -->
    <header class="p-4 bg-gray-100">
      <!-- Link điều hướng về trang chủ -->
      <NuxtLink to="/">Trang chủ</NuxtLink>
    </header>
    
    <!-- Component hiển thị nội dung trang hiện tại -->
    <!-- NuxtPage sẽ render nội dung của page.vue hoặc [slug].vue tùy theo route -->
    <NuxtPage />
  </div>
</template>
