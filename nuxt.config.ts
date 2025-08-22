// https://nuxt.com/docs/api/configuration/nuxt-config
// File cấu hình chính của Nuxt.js - định nghĩa tất cả settings cho ứng dụng
export default defineNuxtConfig({
  // Ngày tương thích - đảm bảo Nuxt sử dụng các tính năng tương thích với ngày này
  compatibilityDate: "2025-07-15",
  
  // Bật Nuxt DevTools - công cụ debug và development
  devtools: { enabled: true },

  // Danh sách các module Nuxt sẽ sử dụng
  modules: [
    "@nuxt/ui",        // UI components và design system
    "@nuxt/test-utils", // Công cụ testing
    "@nuxt/image",     // Tối ưu hóa hình ảnh
    "@nuxt/scripts",   // Scripts và utilities
    "@nuxt/eslint",    // Linting và code quality
    "@nuxt/content",   // CMS cho nội dung Markdown
  ],
});
