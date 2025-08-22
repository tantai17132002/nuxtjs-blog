/** @type {import('tailwindcss').Config} */
// File cấu hình Tailwind CSS - định nghĩa cách Tailwind hoạt động trong dự án
export default {
  // Danh sách các file mà Tailwind sẽ quét để tìm các class được sử dụng
  // Chỉ những class được sử dụng mới được include vào bundle cuối cùng
  content: [
    "./components/**/*.{js,vue,ts}",  // Tất cả file trong thư mục components
    "./layouts/**/*.vue",             // Tất cả file layout
    "./pages/**/*.vue",               // Tất cả file page (nếu có thư mục pages)
    "./plugins/**/*.{js,ts}",         // Tất cả file plugin
    "./app.vue",                      // File app.vue chính
    "./app/**/*.vue",                 // Tất cả file Vue trong thư mục app
    "./content/**/*.md"               // Tất cả file Markdown trong content
  ],
  
  // Cấu hình theme - màu sắc, font, spacing, etc.
  theme: {
    extend: {}, // Mở rộng theme mặc định (hiện tại không có extension)
  },
  
  // Danh sách các plugin Tailwind CSS
  plugins: [
    require('@tailwindcss/typography'), // Plugin typography - tạo style đẹp cho nội dung text
  ],
}
