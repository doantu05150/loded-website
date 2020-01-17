<template>
  <div>
    <d-customer-info />
    <d-shipping-address
      :methodPayment="methodPayment"
      @changeMethod="changeMethod"
    />
  </div>
</template>

<script>
import CustomerInfo from './CustomerInfo'
import ShippingAddress from './ShippingAddress'

export default {
  components: {
    'd-customer-info': CustomerInfo,
    'd-shipping-address': ShippingAddress
  },
  data() {
    return {
      methodPayment: 'cod',
      provices: [
        {
          title: 'Thái Bình'
        },
        {
          title: 'Gia Lai'
        }
      ]
    }
  },
  methods: {
    changeMethod(value) {
      this.methodPayment = value
    }
  }
}
</script>
