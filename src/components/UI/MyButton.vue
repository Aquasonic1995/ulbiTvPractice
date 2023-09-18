<template>
  <button>
<slot></slot>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button{
  margin-top: 15px;
  margin-bottom: 15px;
  align-self: end;
  padding: 10px 15px;  border: 2px solid teal;
  color:teal;
  font-size: 20px;
  &:active{
    transform: translatey(1px);
  }
}
</style>