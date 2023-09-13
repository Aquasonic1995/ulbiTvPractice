
<template>
  <div class="post" v-for="post in posts" >
    <div>{{post.id}}</div>
    <div ><strong>Название:</strong> {{post.title}}</div>
    <div><strong>Описание:</strong> {{post.desc}}</div>
  </div>
</template>

<script setup>
import {productsStore} from "@/store/data";
import {ref} from "vue";

const state = productsStore()
const posts = ref(state.data.posts)
</script>
