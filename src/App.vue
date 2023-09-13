
<template>
  <div>
    <form>
      <input class="input" type="text" placeholder="Name">
      <input class="input" type="text" placeholder="Description">
      <button @click="createPost">Create post</button>
    </form>
  </div>
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
const createPost = ()=>
console.log(posts)
</script>
