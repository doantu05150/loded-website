<template>
  <div class="flex flex-col lg:flex-row sm:my-8">
    <div class="w-full lg:w-3/4 overflow-hidden flex">
      <div class="w-full">
        <div
          class="py-4 mb-4 border-b border-gray-400 text-base sm:text-xl uppercase"
        >
          Shopping Bag
        </div>
        <d-bag-product v-for="i in 3" :key="i" />
      </div>
    </div>
    <div class="mr-0 md:ml-2 flex-1">
      <d-order-summary />
    </div>
  </div>
</template>

<script>
import DBagProduct from './BagProduct'
import DOrderSummary from './OrderSummary'
export default {
  components: {
    'd-order-summary': DOrderSummary,
    'd-bag-product': DBagProduct
  }
}
</script>
