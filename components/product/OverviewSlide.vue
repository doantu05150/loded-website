<template>
  <div>
    <div class="w-full flex flex-col-reverse xs:flex-row mr-0 md:mr-2">
      <div class="hidden lg:flex flex-col xs:w-sx mr-3">
        <div v-for="i in 4" :key="i" class="mb-2 px-2">
          <img
            :class="indexSlide + 1 === i && `border-2 border-gray-900`"
            @click="$refs.myVueperSlides.goToSlide(i - 1)"
            src="https://mediastorage.soliver.com/is/image/soliver/1279521.99D5_front?$CRL2_Zoom_grey_l$"
            class="h-auto w-full"
            alt=""
          />
        </div>
      </div>
      <div class="w-full lg:w-wlg xl:w-wxl">
        <vueper-slides
          ref="myVueperSlides"
          @previous="logEvents($event)"
          @before-slide="logEvents($event)"
          @next="logEvents($event)"
          @slide="logEvents($event)"
          :slide-ratio="142 / 100"
          :breakpoints="breakpoints"
          :bullets="false"
          :arrows="false"
          :touchable="false"
          speed="2500"
        >
          <vueper-slide v-for="i in 4" :key="i">
            <template v-slot:content>
              <div>
                <img
                  src="https://mediastorage.soliver.com/is/image/soliver/1279521.99D5_front?$CRL2_Zoom_grey_l$"
                  class="h-auto w-full inline-block"
                  alt=""
                />
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewSlide',
  data() {
    return {
      breakpoints: {
        1024: {
          bullets: true
        },
        440: {
          bullets: false,
          arrows: true
        }
      },
      indexSlide: 0
    }
  },
  methods: {
    logEvents(params) {
      const { index } = params.currentSlide
      this.indexSlide = index
    },
    goToSlide(i) {
      this.indexSlide = i
    }
  }
}
</script>
