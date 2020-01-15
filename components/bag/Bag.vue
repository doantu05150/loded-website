<template>
  <div class="flex flex-col lg:flex-row sm:my-8">
    <div class="w-full lg:w-3/4 overflow-hidden flex">
      <div class="w-full">
        <div
          class="py-4 mb-4 border-b border-gray-400 text-base sm:text-xl uppercase"
        >
          Shopping Bag
        </div>
        <div v-if="bag.length">
          <d-bag-product
            v-for="(item, i) in bag"
            :key="i"
            :product="item.product"
            :amount="item.amount"
            :index="i"
          />
        </div>
        <div v-else>
          You do not have any product in the bag<br />
          <nuxt-link class="text-blue-600" to="/collections"
            >Continue to shopping</nuxt-link
          >
        </div>
      </div>
    </div>
    <div v-if="bag.length" class="mr-0 md:ml-2 flex-1">
      <d-order-summary :bag="bag" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DBagProduct from './BagProduct'
import DOrderSummary from './OrderSummary'
export default {
  components: {
    'd-order-summary': DOrderSummary,
    'd-bag-product': DBagProduct
  },
  computed: {
    ...mapGetters({
      bag: 'bag/bag'
    })
  }
}
</script>
