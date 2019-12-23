<template>
  <div>
    <div class="flex border-t border-b border-solid border-gray-200 py-24">
      <div v-for="(item, id) in categories" :key="`cat_${id}`" class="mx-1">
        <img
          :alt="item.name"
          src="~/assets/images/w-cat-jeans-dt.jpg"
          class="rounded-full"
        />
        <div class="text-center">
          <router-link to="#" class="uppercase font-bold underline">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        },
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        },
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        },
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        },
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        },
        {
          img: '~/assets/images/w-cat-jeans-dt.jpg',
          name: 'cat-jeans-dt',
          link: ''
        }
      ]
    }
  }
}
</script>
