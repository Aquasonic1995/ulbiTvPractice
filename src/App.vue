<template>
  <h1>Posts Page</h1>
  <MyButton @click="openModal">Create Post</MyButton>
  <ModalWindow v-model:showModal="showModal"   >
    <PostForm/>
  </ModalWindow>

  <PostList/>

</template>
<script setup>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import {storeToRefs} from "pinia";
import {postsStore} from "@/store/data";
import MyButton from "@/components/UI/MyButton.vue";
const store = postsStore()
const {showModal} = storeToRefs(store)
const openModal = () => {
  showModal.value=true
}
</script>
