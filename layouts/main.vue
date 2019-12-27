<template>
  <div>
    <d-drawer
      :show="showDrawer"
      @handleToggleDrawer="handleToggleDrawer"
      bg-color="#fff"
    >
      <template v-slot:drawer-content>
        <router-link to="/">
          <div
            class="uppercase text-center text-2xl font-bold font-branch text-gray-900 pb-2"
          >
            loded
          </div>
        </router-link>
        <div
          v-for="(item, i) in menu"
          :key="`nav_link${i}`"
          @click="handleToggleDrawer"
          class="py-2 px-3 whitespace-no-wrap border-t last:border-b border-gray-700"
        >
          <nuxt-link
            to="/collections"
            class="uppercase text-xs md:text-sm lg:text-base text-gray-900"
            >{{ item.title }}</nuxt-link
          >
        </div>
      </template>
    </d-drawer>
    <d-header @handleToggleDrawer="handleToggleDrawer" />
    <div class="max-w-main-wrapper mx-auto">
      <nuxt />
      <d-footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  },
  methods: {
    handleToggleDrawer() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>
