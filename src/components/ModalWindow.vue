<template>
  <div class="dialog" v-if="showModal"  @click.stop="closeModal">
    <div @click.stop class="dialog-content">
      <slot>
      </slot>
    </div>

  </div>
</template>

<script setup>

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:showModal'])
const closeModal=()=>{
  emit("update:showModal", false)
}
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
background: rgba(0, 0, 0, 0.5);position: fixed;
  display: flex;
}
.dialog-content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 500px;
  padding: 20px;
}
</style>