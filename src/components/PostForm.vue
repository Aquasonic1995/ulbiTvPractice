<template>
  <div>
    <form>
      <h3>Create Post</h3>
      <MyInput v-model="title" class="input" type="text" placeholder="Name"/>
      <MyInput v-model="desc" class="input" type="text" placeholder="Description"/>
      <MyButton @click.prevent="createPost">CreatePost</MyButton>
    </form>
  </div>
</template>

<script setup>
import {postsStore} from "@/store/data";
import {ref} from "vue";

import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {storeToRefs} from "pinia";

const title = ref('')
const desc = ref('')
const store = postsStore()
const { showModal} =  storeToRefs(store)
const createPost = () => {
  store.addPost({id:4,desc:desc.value, title:title.value})
  showModal.value=false
  title.value = ''
  desc.value = ''
}
</script>