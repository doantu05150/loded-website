<template>
  <div class="w-3/5 mx-auto">
    <div class="flex flex-row justify-around">
      <div v-for="(item, i) in men" :key="i" class="text-left mx-4">
        <div class="text-gray-800 font-bold text-lg pt-4">
          {{ item.title }}
        </div>
        <ul class="py-3">
          <li v-for="(it, id) in item.list" :key="`sub_${id}`" class="mb-2">
            <a href="#" class="text-gray-700 hover:text-gray-500">{{
              it.title
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      men: [
        {
          title: 'New Arrival',
          list: [
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            }
          ]
        },
        {
          title: 'New Arrival',
          list: [
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            }
          ]
        },
        {
          title: 'New Arrival',
          list: [
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            }
          ]
        },
        {
          title: 'New Arrival',
          list: [
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            },
            {
              title: 'Jacket',
              link: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>
