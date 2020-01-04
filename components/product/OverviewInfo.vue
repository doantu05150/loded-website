<template>
  <div>
    <div class="flex flex-col">
      <div
        class="font-main text-sm sm:text-base md:text-xl lg:text-2xl text-gray-900 uppercase mb-1 mt-4 md:mt-0"
      >
        {{ product.name }}
      </div>
      <div class="font-brandh text-xxs sm:text-xs mb-3">
        {{ product.title }}
      </div>
      <div class="flex flex-row items-center">
        <span
          class="font-main font-semibold text-sm md:text-base line-through mr-4"
          >{{ product.prices.original }}</span
        >
        <span
          class="font-main font-semibold text-sm md:text-base text-red-700 mr-4"
          >{{ product.prices.current }} $</span
        >
        <div class="text-xs border border-gray-600 rounded-sm px-1">
          {{ product.discount }}%
        </div>
      </div>
      <div class="mt-6 mb-3">
        <div class="mb-2">
          <span class="font-medium">Color:</span>
          {{ product.colors[currentColor].name }}
        </div>
        <ul class="flex">
          <li
            v-for="(item, id) in product.colors"
            :key="`color_${id}`"
            @click="changeColor(id)"
            class="mr-3 mb-3"
          >
            <a
              ><img
                :src="item.image"
                :alt="item.name"
                :class="id === currentColor ? 'border-2 border-gray-500' : ''"
                class="w-8 h-8 rounded-full overflow-hidden p-px"
            /></a>
          </li>
        </ul>
      </div>
      <div class="mt-6 mb-3">
        <div class="mb-2">
          <span class="font-medium">Size:</span>
        </div>
        <ul class="flex">
          <li
            v-for="(item, id) in product.sizes"
            :key="`size_${id}`"
            @click="changeSize(id)"
            class="mr-3 mb-3 p-2 border border-gray-700"
          >
            <div>{{ item.name }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewInfo',
  data() {
    return {
      currentColor: 0,
      currentSize: 0,
      product: {
        name: 'Candigan All Black',
        title: 'Chunky knit cardigan with fine details',
        prices: {
          original: 95,
          current: 59,
          unit: '$'
        },
        discount: 20,
        colors: [
          {
            image:
              'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
            name: 'Ivory'
          },
          {
            image:
              'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_050_s',
            name: 'Purple'
          },
          {
            image:
              'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_061_s',
            name: 'Maroon'
          }
        ],
        sizes: [
          {
            name: 'XS',
            remainingAmount: 10
          },
          {
            name: 'S',
            remainingAmount: 10
          },
          {
            name: 'M',
            remainingAmount: 0
          }
        ]
      }
    }
  },
  methods: {
    changeColor(id) {
      this.currentColor = id
    },
    changeSize(id) {
      this.currentSize = id
    }
  }
}
</script>
