<template>
  <div>
    <div class="flex flex-col flex-1 py-3">
      <div class="t-header hidden sm:flex text-center font-medium">
        <div class="w-3/5 px-4 py-2 text-xs">Item</div>
        <div class="flex flex-1 px-4 py-2">
          <div class="w-1/4 text-xs">Item Price</div>
          <div class="w-1/3 text-xs">Quantity</div>
          <div class="w-1/4 text-xs">Total Price</div>
          <div class="w-1/6 text-xs">Remove</div>
        </div>
      </div>
      <div class="t-data flex flex-col sm:flex-row border">
        <div class="w-full sm:w-3/5 px-4 py-2 text-xs">
          <div class="px-4 py-2">
            <div class="flex">
              <img
                src="https://s7d5.scene7.com/is/image/UrbanOutfitters/43806710_010_b?$browse-lt$"
                alt=""
                class="h-auto w-16 sm:w-24 mr-5"
              />
              <div class="flex flex-col flex-1">
                <div class="text-xs sm:text-sm font-medium mb-1">
                  {{ product.name }}
                </div>
                <div class="text-xs sm:text-sm mb-1">
                  Color: {{ product.colors[0].name }}
                </div>
                <div class="text-xs sm:text-sm mb-1">
                  Size: {{ product.sizes[0].name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 px-4 py-2">
          <div class="w-1/4 text-xs border-r border-l">
            <div class="h-full text-center">
              {{ product.prices.unit }}{{ product.prices.current }}
            </div>
          </div>
          <div class="w-1/3 text-xs border-r">
            <div class="h-full text-center">
              <div class="flex items-center justify-center">
                <div @click="updateAmount('minus')">
                  <unicon name="minus" fill="#333" class="cursor-pointer" />
                </div>
                <input
                  :value="amount"
                  disabled
                  type="number"
                  min="1"
                  max="10"
                  class="border border-gray-500 bg-white text-center w-6 mx-1"
                />
                <div @click="updateAmount('plus')">
                  <unicon name="plus" fill="#333" class="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/4 text-xs border-r">
            <div class="h-full text-center">
              {{ product.prices.unit }}{{ subTotal }}
            </div>
          </div>
          <div class="w-1/6 text-xs">
            <div class="h-full text-center">
              <unicon
                @click="removeBag"
                name="trash"
                fill="#f56565"
                width="26"
                height="26"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    subTotal() {
      return this.product.prices.current * this.amount
    }
  },
  methods: {
    updateAmount(type) {
      switch (type) {
        case 'minus':
          if (this.amount > 1) {
            this.$store.dispatch('bag/updateAmountProductInBag', {
              index: this.index,
              amount: this.amount - 1
            })
          }
          break
        case 'plus':
          this.$store.dispatch('bag/updateAmountProductInBag', {
            index: this.index,
            amount: this.amount + 1
          })
          break
      }
    },
    removeBag() {
      this.$store.dispatch('bag/removeProductInBag', this.index)
    }
  }
}
</script>
