<template>
  <div class="w-full lg:w-3/4 mx-auto sm:pt-10">
    <div class="w-1/2">
      <d-bill-info />
    </div>
  </div>
</template>

<script>
import BillInfo from '~/components/checkout/BillInfo'

export default {
  layout: 'main',
  components: {
    'd-bill-info': BillInfo
  }
}
</script>
