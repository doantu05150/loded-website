<template>
  <div>
    <div class="group inline-block relative w-full mb-4">
      <button
        class="border border-gray-500 text-gray-700 py-3 px-4 rounded inline-flex items-center text-left w-full z-10"
      >
        <span class="mr-1 flex-1">{{ value ? value : title }}</span>
        <unicon name="angle-down" fill="#333" />
      </button>
      <div
        class="absolute hidden group-hover:dropdown pt-1 bg-white w-full z-20"
      >
        <ul class="text-gray-700 border border-gray-500 rounded w-full">
          <li v-for="(item, i) in data" :key="i">
            <a
              @click="changeValue(item.title)"
              class="hover:bg-blue-500 hover:text-white px-2 w-full block whitespace-no-wrap"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Dropdown'
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    changeValue(value) {
      this.value = value
      this.$emit('changeValue', value)
    }
  }
}
</script>
