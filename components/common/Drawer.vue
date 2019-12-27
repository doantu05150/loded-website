<template>
  <div>
    <d-drawer-wrapper
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
          class="py-2 px-3 flex items-center whitespace-no-wrap border-t last:border-b border-gray-700"
        >
          <nuxt-link
            to="/collections"
            class="uppercase flex-1 text-xs md:text-sm lg:text-base text-gray-900"
            >{{ item.title }}</nuxt-link
          >
          <unicon name="plus" fill="#333" width="16" height="16" />
        </div>
      </template>
    </d-drawer-wrapper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DDrawerWrapper from './DrawerWrapper'

export default {
  components: {
    DDrawerWrapper
  },
  props: {
    showDrawer: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  },
  methods: {
    handleToggleDrawer() {
      this.$emit('handleToggleDrawer')
    }
  }
}
</script>
