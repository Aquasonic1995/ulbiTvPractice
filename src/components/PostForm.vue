

<template>
  <div>
    <form>
      <input v-model="title" class="input" type="text" placeholder="Name">
      <input v-model="desc" class="input" type="text" placeholder="Description">
      <Button @click.prevent="createPost">CreatePost</Button>
    </form>
  </div>
</template>

<script setup>
import {productsStore} from "@/store/data";
import {ref} from "vue";
import Button from "@/components/UI/Button.vue";

const title= ref('')
const desc= ref('')
const state = productsStore()
const posts = ref(state.data.posts)
const createPost = () =>{
  posts.value.push({id:4,title:title.value, desc: desc.value})
  title.value=''
  desc.value=''
}
console.log(posts)
</script>