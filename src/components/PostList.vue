
<template>
  <h3>Список постов</h3>
  <PostItem class="post" v-for="post in posts.data" :post="post" :key="post.id"/>
</template>

<script setup>
import {productsStore} from "@/store/data";
import {ref} from "vue";
import PostItem from "@/components/PostItem.vue";
import {storeToRefs} from "pinia";

const store = productsStore()
const { data} = storeToRefs((store))

</script>
