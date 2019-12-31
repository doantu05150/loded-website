<template>
  <div>
    <vueper-slides
      ref="vueperslides1"
      @slide="
        $refs.vueperslides2 &&
          $refs.vueperslides2.goToSlide($event.currentSlide.index, {
            emit: false
          })
      "
      :slide-ratio="1 / 4"
      :bullets="false"
      class="mb-2"
    >
      <vueper-slide
        v-for="i in 8"
        :key="i"
        :title="i.toString()"
        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
        content="Navigation in sync"
      />
    </vueper-slides>

    <vueper-slides
      ref="vueperslides2"
      :slide-ratio="1 / 8"
      :dragging-distance="50"
      :arrows="false"
      @slide="
        $refs.vueperslides1 &&
          $refs.vueperslides1.goToSlide($event.currentSlide.index, {
            emit: false
          })
      "
      :visible-slides="3"
      fixed-height="100px"
    >
      <vueper-slide
        v-for="i in 8"
        :key="i"
        @click.native="
          $refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)
        "
      >
        <template v-slot:content>
          <div
            :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
            class="vueperslide__content-wrapper"
          >
            <div class="vueperslide__title">{{ i.toString() }}</div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
