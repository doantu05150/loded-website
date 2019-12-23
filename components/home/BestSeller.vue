<template>
  <div>
    <div class="mb-16">
      <d-title classes="text-center mt-16 mb-8">bestseller</d-title>
      <div class="w-3/4 mx-auto border-b border-solid border-gray-400">
        <vueper-slides
          :visible-slides="4"
          :slide-ratio="39 / 100"
          :bullets="false"
          slide-multiple
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
  }
}
</script>
