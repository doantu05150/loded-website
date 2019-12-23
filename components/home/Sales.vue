<template>
  <div>
    <div class="mb-16">
      <div class="flex">
        <div
          v-for="(item, id) in season"
          :key="`banner_id_${id}`"
          class="w-1/2"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="h-auto max-w-full mb-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      season: [
        {
          img:
            'https://www.express.com/content/dam/express/2019/projects/digital/web/home-landing/12-december/1220-digital1893-home-landing/-digital1893-hp/-dt/1220-HP-SECONDARY-LEGGINGS-BKGD.jpg',
          name: 'sweater',
          link: ''
        },
        {
          img:
            'https://www.express.com/content/dam/express/2019/projects/digital/web/home-landing/12-december/1220-digital1893-home-landing/-digital1893-hp/-dt/1220-HP-SECONDARY-LEGGINGS-BKGD.jpg',
          name: 'jumpsuits',
          link: ''
        }
      ]
    }
  }
}
</script>
