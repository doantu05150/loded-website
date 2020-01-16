<template>
  <div>
    <div class="text-xl uppercase pt-2">Customer Information</div>
    <div class="border border-gray-600 p-6 my-2">
      <div class="flex">
        <input
          type="text"
          placeholder="First name"
          class="w-1/2 h-10 px-4 my-2 mx-4 border border-gray-600 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          class="w-1/2 h-10 px-4 my-2 mx-4 border border-gray-600 rounded-lg focus:outline-none"
        />
      </div>
      <div class="flex">
        <input
          type="email"
          placeholder="Email"
          class="w-1/2 h-10 px-4 my-2 mx-4 border border-gray-600 rounded-lg focus:outline-none"
        />
        <input
          type="number"
          placeholder="Phone number"
          class="w-1/2 h-10 px-4 my-2 mx-4 border border-gray-600 rounded-lg focus:outline-none"
        />
      </div>
      <div class="my-2 mx-4 ">
        <input
          type="text"
          placeholder="Address"
          class="w-full h-10 px-4 border border-gray-600 rounded-lg focus:outline-none"
        />
      </div>
    </div>
    <div class="text-xl uppercase pt-2">Shipping Address</div>
    <div class="border border-gray-600 p-6 my-2">
      <div class="text-base text-gray-900 font-medium">Payment method</div>
      <div class="flex my-4">
        <div
          @click="
            () => {
              methodPayment = 'cod'
            }
          "
          :class="
            methodPayment === 'cod'
              ? 'bg-blue-500 text-white'
              : 'border border-blue-500 text-blue-500'
          "
          class="button-radio"
        >
          <unicon
            v-if="methodPayment === 'cod'"
            name="check-circle"
            fill="#fff"
            class="mr-4"
          />
          COD
        </div>
        <div
          @click="
            () => {
              methodPayment = 'online'
            }
          "
          :class="
            methodPayment === 'online'
              ? 'bg-blue-500 text-white'
              : 'border border-blue-500 text-blue-500'
          "
          class="button-radio"
        >
          <unicon
            v-if="methodPayment === 'online'"
            name="check-circle"
            fill="#fff"
            class="mr-4"
          />
          Payment Online
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodPayment: 'cod'
    }
  }
}
</script>

<style lang="stylus" scoped>
@css {
  .button-radio {
    @apply w-1/2 p-6 mx-2 rounded font-medium text-xl cursor-pointer flex items-center
  }
}
</style>
