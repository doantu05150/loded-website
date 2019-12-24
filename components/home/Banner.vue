<template>
  <div>
    <img
      src="~/assets/images/photo-first.jpg"
      class="h-auto max-w-full mt-6"
      alt="image banner"
    />
    <div class="text-center uppercase">
      <div class="font-section text-4xl text-black-600 mt-12">
        THE HOLIDAY CAMPAIGN: CHAPTER 4
      </div>
      <div class="font-section text-xs text-gray-800">
        SARAH BAKER'S ROMANCE NOVEL-INSPIRED SAGA CULMINATES IN A DECADENT
        FESTIVE CELEBRATION
      </div>
      <d-button classes="mt-5 mb-12">read the story</d-button>
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
