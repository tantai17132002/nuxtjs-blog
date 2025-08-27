<script setup lang="ts">
// Định nghĩa kiểu dữ liệu cho một bài post
interface Post {
  _path: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

// Nhận props post từ component cha với validation
const props = defineProps<{ 
  post: Post;
  isLoading?: boolean;
}>();

// Computed property để format ngày tháng theo định dạng Việt Nam
const dateStr = computed(() => {
  if (!props.post?.date) return "";
  try {
    const d = new Date(props.post.date);
    // format dd/mm/yyyy (VN)
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return "";
  }
});

// Computed để tạo aria-label cho accessibility
const ariaLabel = computed(() => {
  return `Read more about ${props.post?.title || 'this post'}`;
});
</script>

<template>
  <!-- Card hiển thị thông tin bài post với hiệu ứng hover -->
  <NuxtLink
    :to="post?._path || '#'"
    :class="[
      'block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md',
      { 'opacity-50 cursor-not-allowed': isLoading }
    ]"
    :aria-label="ariaLabel"
    :aria-disabled="isLoading"
  >
    <!-- Loading state -->
    <div v-if="isLoading" class="animate-pulse">
      <div class="h-6 bg-gray-200 rounded mb-2"></div>
      <div class="h-4 bg-gray-200 rounded mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>

    <!-- Content when not loading -->
    <template v-else>
      <!-- Tiêu đề bài post với fallback -->
      <h3 class="text-xl font-semibold">
        {{ post?.title || "Untitled" }}
      </h3>

      <!-- Mô tả bài post (giới hạn 2 dòng) -->
      <p v-if="post?.description" class="mt-2 text-gray-600 line-clamp-2">
        {{ post.description }}
      </p>

      <!-- Footer card chứa ngày tháng và tags -->
      <div class="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <!-- Hiển thị ngày tháng nếu có -->
        <span v-if="dateStr">{{ dateStr }}</span>

        <!-- Hiển thị tags nếu có -->
        <template v-if="post?.tags?.length">
          <span aria-hidden="true">•</span>
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full border px-2 py-0.5"
            :aria-label="`Tag: ${tag}`"
          >
            #{{ tag }}
          </span>
        </template>
      </div>
    </template>
  </NuxtLink>
</template>

<style scoped>
/* CSS để giới hạn mô tả chỉ hiển thị 2 dòng */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
