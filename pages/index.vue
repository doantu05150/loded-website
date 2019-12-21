<template>
  <div>
    <d-header />
    <div class="w-main-wrapper mx-auto">
      <d-banner />
    </div>
  </div>
</template>

<script>
import DHeader from '~/components/common/Header'
import DBanner from '~/components/home/Banner'

export default {
  components: {
    DHeader,
    DBanner
  }
}
</script>
