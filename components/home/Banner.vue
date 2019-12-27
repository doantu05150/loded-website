<template>
  <div class="overflow-hidden">
    <img
      src="~/assets/images/photo-first.jpg"
      class="h-auto max-w-full mt-2 sm:mt-6"
      alt="image banner"
    />
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
