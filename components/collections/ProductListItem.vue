<template>
  <div class="mb-5 overflow-hidden">
    <router-link to="#" class="border-0 hover:border-1 border-gray-600">
      <div class="flex relative overflow-hidden mb-2 px-2">
        <img
          src="https://s7d5.scene7.com/is/image/UrbanOutfitters/53899456_011_b?$medium$&qlt=80&fit=constrain"
          class="h-auto max-w-full"
          alt="product item"
        />
        <div class="flex flex-col px-4 absolute right-0 bottom-0">
          <div
            class="rounded-full border border-solid border-white-600 p-3 leading-zero hover:bg-red-400 mb-5"
          >
            <unicon name="heart" fill="#fff" />
          </div>
          <div
            class="rounded-full border border-solid border-white-600 p-3 leading-zero hover:bg-red-400 mb-5"
          >
            <unicon name="cart" fill="#fff" />
          </div>
        </div>
      </div>
    </router-link>
    <div class="text-center flex flex-col">
      <div class="font-bold text-red-700 font-sm">
        New
        <div class="text-gray-700">Patterned dress</div>
      </div>
      <div>119$</div>
      <div class="flex mx-auto mt-3">
        <router-link
          to="#"
          class="rounded-full w-6 h-6 mx-2 bg-red-200 border border-solid border-gray-600"
        />
        <router-link to="#" class="rounded-full w-6 h-6 mx-2 bg-blue-200" />
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
