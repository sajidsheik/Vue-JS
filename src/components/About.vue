<template>
  <div class="about">
    <h1>This is an about page</h1>

    {{ msg }}

   
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="posts" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { usePostStore } from "../stores/posts";
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'


  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts();
const msg = "sajid";
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
