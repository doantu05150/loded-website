<template>
  <div>
    <button
      :class="classes"
      class="text-xxs sm:text-default-button border border-solid border-gray-700 uppercase text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 sm:py-3 sm:px-10"
    >
      <slot></slot>
    </button>
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
