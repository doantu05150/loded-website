<template>
  <div class="w-full lg:w-3/4 mx-auto sm:pt-10 flex">
    <div class="w-1/2 mx-2">
      <d-bill-info />
    </div>
    <div class="w-1/2 mx-2">
      <d-checkout-sumary />
    </div>
  </div>
</template>

<script>
import BillInfo from '~/components/checkout/BillInfo'
import CheckoutSumary from '~/components/checkout/CheckoutSumary'

export default {
  layout: 'main',
  components: {
    'd-bill-info': BillInfo,
    'd-checkout-sumary': CheckoutSumary
  }
}
</script>
