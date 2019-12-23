<template>
  <div>
    <d-header />
    <div class="max-w-main-wrapper mx-auto">
      <d-banner />
      <d-sales />
      <d-fashion />
      <d-filter />
      <d-best-seller />
      <d-footer />
    </div>
  </div>
</template>

<script>
import { DHeader, DFooter } from '~/components/common'
import {
  DBanner,
  DFashion,
  DFilter,
  DBestSeller,
  DSales
} from '~/components/home'

export default {
  components: {
    DHeader,
    DBanner,
    DFashion,
    DFilter,
    DBestSeller,
    DSales,
    DFooter
  }
}
</script>
