<template>
  <div :class="classes" class="font-main text-4xl text-gray-900 uppercase">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
