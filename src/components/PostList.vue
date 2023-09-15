
<template>
  <h3>Список постов</h3>
  <PostItem class="post" v-for="post in posts" :post="post"/>
</template>

<script setup>
import {productsStore} from "@/store/data";
import {ref} from "vue";
import PostItem from "@/components/PostItem.vue";

const state = productsStore()
const posts = ref(state.data.posts)
</script>
