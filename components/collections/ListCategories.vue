<template>
  <div>
    <div class="flex flex-col">
      <router-link
        v-for="(item, id) in categories.women.categories"
        :key="`cat_${id}`"
        to="#"
        class="text-sm text-gray-800 py-1 hover:font-medium"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DListCategories',
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  }
}
</script>
