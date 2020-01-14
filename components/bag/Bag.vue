<template>
  <div class="flex flex-col md:flex-row my-8">
    <div class="w-full md:w-3/4 overflow-hidden flex">
      <d-bag-list />
    </div>
    <div class="mr-0 md:ml-2 flex-1">
      <d-order-summary />
    </div>
  </div>
</template>

<script>
import DBagProductList from './BagProductList'
import DOrderSummary from './OrderSummary'
export default {
  components: {
    'd-bag-list': DBagProductList,
    'd-order-summary': DOrderSummary
  }
}
</script>
