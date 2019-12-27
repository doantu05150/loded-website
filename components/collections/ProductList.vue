<template>
  <div>
    <div class="flex flex-wrap overflow-hidden">
      <d-product-list-item v-for="i in 6" :key="i" class="w-1/4" />
    </div>
  </div>
</template>

<script>
import DProductListItem from './ProductListItem'

export default {
  components: {
    DProductListItem
  }
}
</script>
