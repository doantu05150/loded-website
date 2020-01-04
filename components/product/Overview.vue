<template>
  <div class="flex flex-col md:flex-row my-8">
    <div class="w-full md:w-3/5 overflow-hidden">
      <d-overview-slide />
    </div>
    <div class="mr-0 md:ml-2 flex-1">
      <d-overview-info />
    </div>
  </div>
</template>

<script>
import OverviewInfo from './OverviewInfo'
import OverviewSlide from './OverviewSlide'
export default {
  components: {
    'd-overview-info': OverviewInfo,
    'd-overview-slide': OverviewSlide
  }
}
</script>
