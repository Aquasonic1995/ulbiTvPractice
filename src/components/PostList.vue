<template>
  <div  v-if="data.posts.length > 0">
  <h3 style="margin-bottom: 15px;">List of posts</h3>
  <PostItem
    class="post"
    v-for="post in data.posts"
    :post="post"
    :key="post.id"
    @remove="store.deletePost(post)"

  />
    </div>
  <h4 v-else style="color: red; font-size: 30px; margin-top: 30px; ">There is no posts</h4>
</template>

<script setup>
import { postsStore } from "@/store/data";
import PostItem from "@/components/PostItem.vue";
import { storeToRefs } from "pinia";

const store = postsStore();
const { data } = storeToRefs(store);
</script>