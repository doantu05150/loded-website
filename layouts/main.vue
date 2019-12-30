<template>
  <div>
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
      showDrawer: false
    }
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>
