<template>
  <div>
    <div class="text-xl uppercase pt-2">Shipping Address</div>
    <div class="border border-gray-600 p-6 my-2">
      <div class="text-base text-gray-900 font-medium">Payment method</div>
      <div class="flex my-4">
        <div
          @click="changeMethod('cod')"
          :class="
            methodPayment === 'cod'
              ? 'bg-blue-500 text-white'
              : 'border border-blue-500 text-blue-500'
          "
          class="button-radio mr-2"
        >
          <client-only>
            <unicon
              v-if="methodPayment === 'cod'"
              name="check-circle"
              fill="#fff"
              class="mr-4"
            />
          </client-only>
          COD
        </div>
        <div
          @click="changeMethod('online')"
          :class="
            methodPayment === 'online'
              ? 'bg-blue-500 text-white'
              : 'border border-blue-500 text-blue-500'
          "
          class="button-radio ml-2"
        >
          <client-only>
            <unicon
              v-if="methodPayment === 'online'"
              name="check-circle"
              fill="#fff"
              class="mr-4"
            />
          </client-only>
          Payment Online
        </div>
      </div>
      <div>
        <d-cod v-if="methodPayment === 'cod'" />
        <d-online v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Cod from './Cod'
import Online from './Online'
export default {
  components: {
    'd-cod': Cod,
    'd-online': Online
  },
  props: {
    methodPayment: {
      type: String,
      required: true
    }
  },
  methods: {
    changeMethod(value) {
      this.$emit('changeMethod', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
@css {
  .button-radio {
    @apply w-1/2 p-6 rounded font-medium text-xl cursor-pointer flex items-center
  }
}
</style>
