<template>
  <div
    :class="classes"
    class="font-main text-base sm:text-xl md:text-2xl lg:text-4xl text-gray-900 uppercase"
  >
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
