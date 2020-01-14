<template>
  <client-only>
    <div class="bg-white w-full z-10">
      <div class="hidden md:block py-1 bg-header-address">
        <div class="flex w-main-wrapper mx-auto">
          <div class="pl-10">
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              style="color: #909090"
              class="mr-1"
            />
            <span class="font-main text-sm">International version</span>
          </div>
          <div class="pl-10">
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              style="color: #909090"
              class="mr-1"
            />
            <span class="font-main text-sm">Customer Service</span>
          </div>
          <div class="pl-10">
            <font-awesome-icon
              :icon="['fas', 'map-marker-alt']"
              style="color: #909090"
              class="mr-1"
            />
            <span class="font-main text-sm">Boutiques</span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center w-main-wrapper mx-auto py-0 sm:py-2 px-0 sm:px-8"
      >
        <div
          class="search-box bg-white fixed z-40 sm:z-auto sm:relative shadow-md sm:shadow-none w-full text-xs lg:text-base flex flex-1 px-3 sm:px-0 py-3 sm:py-0"
        >
          <div class="sm:hidden flex items-center">
            <unicon
              @click="handleToggle"
              name="bars"
              fill="#333"
              width="22"
              height="22"
            />
          </div>
          <div class="flex-1 sm:flex-none">
            <div class="relative mx-auto w-fit-content">
              <input
                type="text"
                class="relative border border-solid border-gray-700 rounded-full focus:outline-none py-2 pl-4 pr-8 sm:pr-16"
                placeholder="Search product on loded.com"
              />
              <div
                class="absolute h-full flex items-center right-0 top-0 pr-2 sm:pr-6"
              >
                <unicon name="search" fill="#909090" width="21" height="21" />
              </div>
            </div>
          </div>
          <div class="relative flex items-center">
            <div
              class="relative cursor-pointer rounded-full border border-solid border-gray-700 p-1 lg:p-2 leading-zero mx-3"
            >
              <unicon name="heart" fill="#333" width="17" height="17" />
              <div
                class="absolute icon-top bg-red-500 font-bold text-white rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center"
              >
                3
              </div>
            </div>
            <div
              class="relative cursor-pointer rounded-full border border-solid border-gray-700 p-1 lg:p-2 leading-zero"
            >
              <unicon name="cart" fill="#333" width="17" height="17" />
              <div
                class="absolute icon-top bg-red-500 font-bold text-white rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center"
              >
                3
              </div>
            </div>
          </div>
        </div>
        <div class="block sm:hidden h-60" />
        <router-link to="/">
          <div
            class="uppercase text-2xl md:text-3xl lg:text-5xl font-bold font-branch pt-2 sm:pt-0"
          >
            <img src="~/static/logo-2.jpg" class="w-logo" alt="logo" />
          </div>
        </router-link>
        <div class="rh-box flex-1" />
      </div>
      <div class="hidden sm:flex relative navbar pt-2">
        <ul class="flex items-center mx-auto text-sm text-gray-800">
          <li
            v-for="(item, id) in menu"
            :key="`nav_${id}`"
            class="navl hover:underline px-3"
          >
            <router-link
              to="/collections"
              class="uppercase text-xs md:text-sm lg:text-base"
              >{{ item.title }}</router-link
            >
            <d-expand-wrapper>
              <template v-slot:content>
                <d-sub-men />
              </template>
            </d-expand-wrapper>
          </li>
        </ul>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import DExpandWrapper from './HeaderExpand'
import { DSubMen } from './submenu'

export default {
  components: {
    DExpandWrapper,
    DSubMen
  },
  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  },
  methods: {
    handleToggle() {
      this.$emit('handleToggleDrawer')
    }
  }
}
</script>
