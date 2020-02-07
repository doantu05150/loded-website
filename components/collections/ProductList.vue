<template>
  <div v-lazy-container="{ selector: 'img' }">
    <div class="flex flex-wrap overflow-hidden">
      <client-only>
        <d-product-list-item
          v-for="(item, i) in products"
          :key="i"
          @addBag="addBag(item)"
          class="w-1/2 sm:w-1/3 lg:w-1/4"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import DProductListItem from './ProductListItem'

export default {
  components: {
    DProductListItem
  },
  data() {
    return {
      products: [
        {
          code: 'Mlaxh2va2',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va4',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        },
        {
          code: 'Mlaxh2va3',
          name: 'Candigan All Black',
          title: 'Chunky knit cardigan with fine details',
          prices: {
            original: 95.0,
            current: 59.0,
            unit: '$'
          },
          discount: 20,
          colors: [
            {
              image:
                'https://images.urbanoutfitters.com/is/image/UrbanOutfitters/53382388_011_s',
              name: 'Ivory'
            }
          ],
          sizes: [
            {
              name: 'XS',
              remainingAmount: 10
            }
          ]
        }
      ]
    }
  },
  methods: {
    addBag(item) {
      this.$store.dispatch('bag/addProductToBag', {
        product: item,
        amount: 1
      })
    }
  }
}
</script>
