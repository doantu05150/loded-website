<template>
  <div class="w-3/4 mx-auto">
    <div class="w-3/5">
      <d-overview />
    </div>
  </div>
</template>

<script>
import DOverview from '~/components/product/Overview'
export default {
  layout: 'main',
  components: {
    DOverview
  }
}
</script>
