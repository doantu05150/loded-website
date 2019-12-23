<template>
  <div>
    <button
      :class="classes"
      class="text-default-button border border-solid border-gray-700 uppercase text-gray-800 hover:bg-gray-700 hover:text-white py-3 px-10"
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
