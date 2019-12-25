<template>
  <div class="bg-white w-full">
    <div class="py-1 bg-header-address">
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
    <div class="flex items-center w-main-wrapper mx-auto px-8 py-2">
      <div class="search-box flex-1">
        <div class="relative w-fit-content">
          <input
            type="text"
            class="relative border border-solid border-gray-700 rounded-full focus:outline-none py-2 pl-4 pr-16"
            placeholder="Search product on loded.com"
          />
          <div class="absolute h-full flex items-center right-0 top-0 pr-6">
            <font-awesome-icon
              :icon="['fas', 'search']"
              style="color: #909090; font-size: 1.3rem"
            />
          </div>
        </div>
      </div>
      <div class="uppercase text-5xl font-bold font-branch">loded</div>
      <div class="rh-box flex-1" />
    </div>
    <div class="relative navbar flex pt-2">
      <ul class="flex items-center mx-auto text-sm text-gray-800">
        <li
          v-for="(item, id) in listNavs"
          :key="`nav_${id}`"
          class="navl hover:underline px-3"
        >
          <router-link to="#" class="uppercase">{{ item.title }}</router-link>
          <d-expand-wrapper>
            <template v-slot:content>
              <d-sub-men />
            </template>
          </d-expand-wrapper>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DExpandWrapper from './HeaderExpand'
import { DSubMen } from './submenu'

export default {
  components: {
    DExpandWrapper,
    DSubMen
  },
  data() {
    return {
      listNavs: [
        {
          title: 'gifts'
        },
        {
          title: `women's faction`
        },
        {
          title: `man's faction`
        },
        {
          title: 'gifts'
        },
        {
          title: `women's faction`
        },
        {
          title: `man's faction`
        },
        {
          title: `sales`
        }
      ]
    }
  }
}
</script>
