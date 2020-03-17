<template>
  <div class="layout--main">
    <div
      v-if="loading"
      class="h-screen w-full flex justify-center items-center"
    >
      <div class="lds-ripple">
        <div />
        <div />
      </div>
    </div>
    <div v-else>
      <d-drawer />
      <div class="content-area-reduced">
        <div class="content-overlay" />
        <div class="mx-auto px-2 md:px-4 relative">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DDrawer } from '@/components/admin/common'

export default {
  layout: 'admin',
  components: {
    'd-drawer': DDrawer
  },
  data() {
    return {
      showDrawer: false,
      loading: true
    }
  },
  created() {
    this.loading = true
  },
  mounted() {
    this.loading = false
  }
}
</script>

<style scoped>
@import '@/static/css/ripple-indicator.css';
@css {
  .layout--main {
    @apply h-full min-h-full;
  }
}
</style>
