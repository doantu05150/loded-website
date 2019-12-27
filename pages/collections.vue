<template>
  <div>
    <div class="max-w-main-wrapper mx-auto pt-10">
      <div class="flex row">
        <div class="w-1/4 bg-gray-500"></div>
        <div class="flex-1">
          <d-product-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DProductList } from '~/components/collections'

export default {
  layout: 'main',
  components: {
    DProductList
  }
}
</script>
