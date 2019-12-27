<template>
  <div>
    <div class="mb-2 sm:mb-4 md:mb-10 lg:mb-16 overflow-hidden">
      <d-title
        classes="text-center mt-0 sm:mt-4 md:mt-8 lg:mt-16 mb-2 sm:4 lg:mb-8"
        >bestseller</d-title
      >
      <div class="w-3/4 mx-auto border-b border-solid border-gray-400">
        <vueper-slides
          :visible-slides="4"
          :slide-ratio="41 / 100"
          :bullets="false"
          :breakpoints="breakpoints"
          slide-multiple
          autoplay
          class="no-shadow"
        >
          <vueper-slide v-for="i in 6" :key="i">
            <template v-slot:content>
              <div
                class="mx-2 flex flex-col justify-center text-center h-fill-available"
              >
                <img
                  src="https://mediastorage.soliver.com/is/image/soliver/1278959.99Q0_front?$CONTENT_COMMA_SLIDER-XL$"
                  class="h-auto max-w-full hover:scale-110 mb-2"
                  alt=""
                />
                <div class="text-base text-gray-900">Knit dress</div>
                <div class="flex justify-center items-center">
                  <div
                    :class="true && 'line-through text-sm'"
                    class="font-bold text-black"
                  >
                    99$
                  </div>
                  <div class="ml-4 font-bold text-red-600">69$</div>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
import { DTitle } from '~/components/common'

export default {
  components: {
    DTitle
  },
  data() {
    return {
      breakpoints: {
        1024: {
          visibleSlides: 3,
          slideRatio: 57 / 100,
          arrows: false,
          bullets: false
        },
        640: {
          visibleSlides: 2,
          slideRatio: 13 / 20,
          arrows: false,
          bullets: false
        },
        400: {
          visibleSlides: 1,
          slideRatio: 8 / 5,
          arrows: false,
          bullets: false
        }
      }
    }
  }
}
</script>
