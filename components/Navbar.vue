<template>
  <!-- Header chính của trang web với hiệu ứng blur và border bottom -->
  <header class="border-b bg-white/80 backdrop-blur">
    <!-- Container chứa navigation với responsive design -->
    <nav
      class="container mx-auto max-w-3xl flex items-center justify-between px-4 py-3"
    >
      <!-- Logo/Brand name - link về trang chủ -->
      <NuxtLink to="/" class="font-semibold text-lg">Nuxt Blog</NuxtLink>

      <!-- Menu navigation bên phải -->
      <div class="flex items-center gap-4">
        <!-- Link trang chủ -->
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <!-- Link trang blog -->
        <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
        <!-- Có thể thêm About sau -->
      </div>
    </nav>
  </header>
</template>
