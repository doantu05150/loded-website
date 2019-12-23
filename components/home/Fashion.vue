<template>
  <div>
    <div class="mb-16">
      <d-title classes="text-center mt-16 mb-8">the party-season edit</d-title>
      <div class="flex">
        <div
          v-for="(item, id) in season"
          :key="`banner_id_${id}`"
          class="w-1/3 mx-1 text-center"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="h-auto max-w-full mb-3"
          />
          <router-link to="#" class="uppercase text-sm hover:text-gray-800"
            >shop now</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DTitle } from '~/components/common'

export default {
  components: {
    DTitle
  },
  data() {
    return {
      season: [
        {
          img:
            'https://www.express.com/content/dam/express/2019/projects/digital/web/home-landing/12-december/1220-digital1893-home-landing/-digital1893-hp/-dt/1220-HP-TERTIARY-W-FLANNEL-BKGD.jpg',
          name: 'sweater',
          link: ''
        },
        {
          img:
            'https://www.express.com/content/dam/express/2019/projects/digital/web/home-landing/12-december/1220-digital1893-home-landing/-digital1890-wlp/-dt/1220-WLP-TERTIARY-SWEATERS-BKGD.jpg',
          name: 'jumpsuits',
          link: ''
        },
        {
          img:
            'https://www.express.com/content/dam/express/2019/projects/digital/web/home-landing/12-december/1220-digital1893-home-landing/-digital1890-wlp/-dt/1220-WLP-TERTIARY-JUMPSUITS-BKGD.jpg',
          name: 'flannel shirt',
          link: ''
        }
      ]
    }
  }
}
</script>
