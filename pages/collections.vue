<template>
  <div>
    <d-header />
    <div class="max-w-main-wrapper mx-auto pt-10">
      <div class="flex row">
        <div class="w-1/4 bg-gray-500"></div>
        <div class="flex-1">
          <d-product-list />
        </div>
      </div>
      <d-footer />
    </div>
  </div>
</template>

<script>
import { DHeader, DFooter } from '~/components/common'
import { DProductList } from '~/components/collections'

export default {
  components: {
    DHeader,
    DFooter,
    DProductList
  }
}
</script>
