import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  categories: {
    women: {
      title: `All Women's`,
      categories: [
        {
          title: 'New',
          link: '#'
        },
        {
          title: 'Dresses + Rompers',
          link: '#'
        },
        {
          title: 'Tops',
          link: '#'
        },
        {
          title: 'Coats + Jackets',
          link: '#'
        },
        {
          title: 'Denim',
          link: '#'
        },
        {
          title: 'New',
          link: '#'
        },
        {
          title: 'Bottoms',
          link: '#'
        },
        {
          title: 'Vintages',
          link: '#'
        },
        {
          title: 'Shoes',
          link: '#'
        },
        {
          title: 'Sales',
          link: '#'
        },
        {
          title: 'Accessories',
          link: '#'
        },
        {
          title: 'Beauty',
          link: '#'
        }
      ]
    }
  }
})

export const getters = {
  categories: (state) => state.categories
}

export const mutations = {}

export const actions = {}
