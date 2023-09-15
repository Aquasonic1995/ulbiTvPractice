<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>

<script setup>
const props = defineProps({
modelValue:{
  type:[String,Number]
}
})
const updateInput = (event) =>{ }
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  border: 2px solid teal;
}
</style>