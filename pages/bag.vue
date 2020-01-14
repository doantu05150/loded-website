<template>
  <div class="w-full lg:w-3/4 mx-auto pt-10">
    <d-bag />
  </div>
</template>

<script>
import { DBag } from '~/components/bag'

export default {
  layout: 'main',
  components: {
    'd-bag': DBag
  }
}
</script>
