<template>
  <div class="mb-5 overflow-hidden">
    <div class="border-0 hover:border-1 border-gray-600">
      <div class="flex relative overflow-hidden mb-2 px-2">
        <router-link to="/p/cardigan-black" class="cursor-pointer">
          <img
            src="https://s7d5.scene7.com/is/image/UrbanOutfitters/53899456_011_b?$medium$&qlt=80&fit=constrain"
            class="h-auto max-w-full"
            alt="product item"
          />
        </router-link>
        <div class="hidden sm:flex flex-col px-4 absolute right-0 bottom-0">
          <div
            class="rounded-full border border-solid border-white-600 p-2 md:p-3 leading-zero hover:bg-red-400 mb-3 md:mb-5"
          >
            <unicon name="heart" fill="#fff" />
          </div>
          <div
            class="rounded-full border border-solid border-white-600 p-2 md:p-3 leading-zero hover:bg-red-400 mb-3 md:mb-5"
          >
            <unicon name="cart" fill="#fff" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center flex flex-col">
      <div class="font-bold text-red-700 text-xs md:text-base">
        New
        <div class="text-gray-700 font-sm text-xs md:text-base">
          Patterned dress
        </div>
      </div>
      <div class="text-xs md:text-base">119$</div>
      <div class="flex mx-auto mt-3">
        <div
          class="rounded-full w-4 h-4 md:w-6 md:h-6 mx-1 bg-red-200 border border-solid border-gray-600"
        />
        <div class="rounded-full w-4 h-4 md:w-6 md:h-6 mx-1 bg-blue-200" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productImgCards: [
        {
          src:
            'https://s7d5.scene7.com/is/image/UrbanOutfitters/53899456_011_b?$medium$&qlt=80&fit=constrain'
        },
        {
          src:
            'https://s7d5.scene7.com/is/image/UrbanOutfitters/53382388_011_b?$medium$&qlt=80&fit=constrain'
        }
      ]
    }
  }
}
</script>
