<template>
  <div>
    <div
      v-if="loading"
      class="h-screen w-full flex justify-center items-center"
    >
      <div class="lds-heart"><div></div></div>
    </div>
    <div v-else>
      <d-drawer
        :showDrawer="showDrawer"
        @handleToggleDrawer="handleToggleDrawer"
      />
      <d-header @handleToggleDrawer="handleToggleDrawer" />
      <div class="max-w-main-wrapper mx-auto px-2 md:px-4">
        <nuxt />
        <d-footer />
      </div>
    </div>
  </div>
</template>

<script>
import { DHeader, DFooter, DDrawer } from '~/components/common'

export default {
  layout: 'main',
  components: {
    DHeader,
    DFooter,
    DDrawer
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
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>

<style scoped>
@import '@/static/css/heart-indicator.css';
</style>
