<template>
  <div class="post">
    <div class="content-wrapper">
    <div>{{ post.id }}</div>
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.desc }}</div>
    </div>
    <Button >Удалить</Button>
  </div>
</template>

<script setup>
import Button from "@/components/UI/Button.vue";

const props = defineProps({
  post: {
    required: true
  }
})

</script>

<style lang="scss" scoped>

</style>