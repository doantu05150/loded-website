<template>
  <div>
    <div class="w-full lg:w-3/4 mx-auto pt-10">
      <div class="flex row mb-2 px-2">
        <div class="w-0 sm:w-1/4 md:w-1/6 overflow-hidden" />
        <div class="flex-1 text-xs md:text-sm">
          <span class="font-bold">Women's clothing: </span>8199 results
        </div>
      </div>
      <div class="flex row">
        <div class="w-0 sm:w-1/4 md:w-1/6 overflow-hidden">
          <d-list-categories />
        </div>
        <div class="flex-1">
          <d-product-list class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DProductList from './ProductList'
import DListCategories from './ListCategories'

export default {
  components: {
    DProductList,
    DListCategories
  }
}
</script>
