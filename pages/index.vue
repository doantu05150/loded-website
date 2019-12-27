<template>
  <div>
    <d-banner />
    <d-sales />
    <d-fashion />
    <d-filter />
    <d-best-seller />
  </div>
</template>

<script>
import {
  DBanner,
  DFashion,
  DFilter,
  DBestSeller,
  DSales
} from '~/components/home'

export default {
  layout: 'main',
  components: {
    DBanner,
    DFashion,
    DFilter,
    DBestSeller,
    DSales
  }
}
</script>
