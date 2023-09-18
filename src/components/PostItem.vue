<template>
  <div class="post">
    <div class="content-wrapper">
    <div>{{ post.id }}</div>
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.desc }}</div>
    </div>
    <MyButton @click="deletePost">Удалить</MyButton>
  </div>
</template>

<script setup>
import MyButton from "@/components/UI/MyButton.vue";

const props = defineProps({
  post: {
    required: true
  }
})
const emit = defineEmits(['remove'])

const deletePost = (post)=> {
  emit("remove", post)
}

</script>

<style lang="scss" scoped>

</style>