<template>
  <div>
    <div class="text-xl uppercase pt-2">Checkout sumary</div>
    <div class="border border-gray-600 p-6 my-2">
      <div class="border-b border-gray-400">
        <div v-for="(item, i) in bag" :key="i" class="flex my-4">
          <div
            class="relative w-20 h-20 rounded bg-white border border-gray-400"
          >
            <div class="w-full h-full relative">
              <img
                class="absolute top-0 left-0 right-0 bottom-0 max-h-full max-w-full m-auto"
                src="https://images.unsplash.com/photo-1554141220-83411835a60b?ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80"
                alt="product thumbnail"
              />
              <span
                class="text-xs font-medium absolute bg-gray-500 text-white px-2 whitespace-no-wrap rounded-full bag-amount"
                >{{ item.amount }}</span
              >
            </div>
          </div>
          <div class="mx-4 flex-1 opacity-75">
            <div class="font-medium three-dots-2-lines">
              {{ item.product.name }}
            </div>
            <div class="text-xs">XS</div>
          </div>
          <div class="w-16">${{ item.product.prices.current }}</div>
        </div>
      </div>
      <div class="flex py-4 border-b border-gray-400">
        <input
          type="text"
          placeholder="Code"
          class="w-full h-12 px-4 border border-gray-600 rounded-lg focus:outline-none mr-4"
        />
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent w-32"
        >
          Use
        </button>
      </div>
      <div class="py-4 border-b border-gray-400">
        <div class="flex justify-between my-1">
          <div>Subtotal:</div>
          <div>$549</div>
        </div>
        <div class="flex justify-between my-1">
          <div>Shipping cost:</div>
          <div>$12</div>
        </div>
      </div>
      <div class="flex justify-between text-xl font-medium my-1">
        <div>Total:</div>
        <div>$561</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      bag: 'bag/bag'
    })
  }
}
</script>
