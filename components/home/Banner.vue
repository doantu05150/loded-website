<template>
  <div class="overflow-hidden">
    <div class="relative pb-2/5 mt-2 sm:mt-6">
      <img
        class="absolute h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        alt="property.image.banner"
      />
    </div>
    <div class="text-center uppercase">
      <div
        class="font-section text-base sm:text-2xl md:text-3xl lg:text-4xl text-black-600 mt-3 sm:mt-12"
      >
        THE HOLIDAY CAMPAIGN: CHAPTER 4
      </div>
      <div class="font-section text-xxs sm:text-xs md:text-sm text-gray-800">
        SARAH BAKER'S ROMANCE NOVEL-INSPIRED SAGA CULMINATES IN A DECADENT
        FESTIVE CELEBRATION
      </div>
      <d-button classes="mt-3 mb-6 sm:mt-5 sm:mb-12">read the story</d-button>
    </div>
  </div>
</template>

<script>
import { DButton } from '~/components/common'

export default {
  components: {
    DButton
  }
}
</script>
