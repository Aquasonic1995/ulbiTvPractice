<template>
  <div>
    <form>
      <MyInput v-model="title" class="input" type="text" placeholder="Name"/>
      <MyInput v-model="desc" class="input" type="text" placeholder="Description"/>
      <MyButton @click.prevent="createPost">CreatePost</MyButton>
    </form>
  </div>
</template>

<script setup>
import {productsStore} from "@/store/data";
import {ref} from "vue";

import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

const title = ref('')
const desc = ref('')
const state = productsStore()
const posts = ref(state.data.posts)
const createPost = () => {
  posts.value.push({id: 4, title: title.value, desc: desc.value})
  title.value = ''
  desc.value = ''
}
</script>