<template>
  <div>
    <div class="text-xl uppercase pt-2">Customer Information</div>
    <div class="border border-gray-600 p-6 my-2">
      <div class="flex">
        <input
          type="text"
          placeholder="First name"
          class="w-1/2 h-12 px-4 my-2 mx-4 input focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last name"
          class="w-1/2 h-12 px-4 my-2 mx-4 input focus:outline-none"
        />
      </div>
      <div class="flex">
        <input
          type="email"
          placeholder="Email"
          class="w-1/2 h-12 px-4 my-2 mx-4 input focus:outline-none"
        />
        <input
          type="number"
          placeholder="Phone number"
          class="w-1/2 h-12 px-4 my-2 mx-4 input focus:outline-none"
        />
      </div>
      <div class="my-2 mx-4 ">
        <input
          type="text"
          placeholder="Address"
          class="w-full h-12 px-4 input focus:outline-none"
        />
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@css {
  .input {
    @apply border border-gray-600 rounded-lg
  }
}
</style>
