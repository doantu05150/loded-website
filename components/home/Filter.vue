<template>
  <div>
    <div
      class="flex justify-center border-t border-b border-solid border-gray-200 py-6 sm:py-10 md:py-16 lg:py-24 mb-4 sm:mb-0 overflow-hidden"
    >
      <div v-for="(item, id) in categories" :key="`cat_${id}`" class="mx-1">
        <img
          :alt="item.name"
          src="~/assets/images/w-cat-jeans-dt.jpg"
          class="rounded-full"
        />
        <div class="text-center">
          <router-link
            to="#"
            class="uppercase font-bold underline text-xxxs sm:text-xs lg:text-base"
          >
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
