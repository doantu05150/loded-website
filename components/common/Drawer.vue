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
            class="uppercase text-center text-2xl font-bold font-branch text-gray-900 pb-2 text-main"
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
          <div class="flex items-center">
            <nuxt-link
              to="/collections"
              class="uppercase flex-1 text-xs md:text-sm lg:text-base text-gray-900"
              >{{ item.title }}</nuxt-link
            >
            <client-only>
              <unicon
                v-if="item.submenu && item.submenu.length"
                @click="expandSubmenu(i)"
                :name="`plus`"
                fill="#333"
                width="16"
                height="16"
              />
            </client-only>
          </div>
          <div
            :style="{
              maxHeight:
                item.submenu && item.submenu.length && expandMenuNumber === i
                  ? getSubDch
                  : '0'
            }"
            class="uni-subc pl-3 transition-drawer-content overflow-hidden"
          >
            <div
              v-for="(sc, j) in item.submenu"
              :key="`submenu${j}`"
              class="text-black font-light text-sm sm:text-base py-1"
            >
              {{ sc.title }}
            </div>
          </div>
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
  data() {
    return {
      expandMenuNumber: null
    }
  },
  computed: {
    ...mapGetters({
      menu: 'menu'
    }),
    getSubDch() {
      const subs = this.$el.getElementsByClassName('uni-subc')
      return subs[this.expandMenuNumber].scrollHeight + 'px'
    }
  },
  methods: {
    handleToggleDrawer() {
      this.$emit('handleToggleDrawer')
    },
    expandSubmenu(id) {
      if (this.expandMenuNumber === id) {
        this.expandMenuNumber = null
      } else {
        this.expandMenuNumber = id
      }
    }
  }
}
</script>
