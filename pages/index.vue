<template>
  <div>
    <d-header />
    <div class="max-w-main-wrapper mx-auto">
      <d-banner />
      <d-fashion />
      <d-filter />
      <d-best-seller />
    </div>
  </div>
</template>

<script>
import { DHeader } from '~/components/common'
import { DBanner, DFashion, DFilter, DBestSeller } from '~/components/home'

export default {
  components: {
    DHeader,
    DBanner,
    DFashion,
    DFilter,
    DBestSeller
  }
}
</script>
