<template>
  <div>
    <div class="font-medium text-2xl border-b border-gray-900 mb-12 pb-6">
      Order Summary
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between text-sm mb-3">
        <div>Subtotal</div>
        <div>{{ bag[0].product.prices.unit }}{{ getSubTotal }}</div>
      </div>
      <div class="flex justify-between text-sm mb-3">
        <div>Shipping</div>
        <div>TBD</div>
      </div>
      <div class="flex justify-between text-sm mb-3">
        <div>Estimated Tax</div>
        <div>$0.00</div>
      </div>
      <div
        class="flex justify-between text-sm mb-3 mt-3 border-b border-gray-900 pb-4"
      >
        <div>Total</div>
        <div>{{ bag[0].product.prices.unit }}{{ getSubTotal }}</div>
      </div>
      <button
        @click="proceedToCheckout"
        class="bg-blue-500 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Payment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bag: {
      type: Array,
      required: true
    }
  },
  computed: {
    getSubTotal() {
      let subTotal = 0
      this.bag.forEach((bag) => {
        subTotal += bag.product.prices.current * bag.amount
      })
      return subTotal
    }
  },
  methods: {
    proceedToCheckout() {
      this.$router.push('/checkout')
    }
  }
}
</script>
