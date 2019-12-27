import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  menu: [
    {
      title: 'gifts',
      link: '#',
      submenu: [
        {
          title: 'Submenu 1',
          link: '#'
        },
        {
          title: 'Submenu 1',
          link: '#'
        }
      ]
    },
    {
      title: `women's faction`,
      link: '#',
      submenu: [
        {
          title: 'Submenu 1',
          link: '#'
        },
        {
          title: 'Submenu 1',
          link: '#'
        }
      ]
    },
    {
      title: `men's faction`
    },
    {
      title: 'gifts'
    },
    {
      title: `women's faction`
    },
    {
      title: `men's faction`,
      link: '#',
      submenu: [
        {
          title: 'Submenu 1',
          link: '#'
        },
        {
          title: 'Submenu 1',
          link: '#'
        }
      ]
    },
    {
      title: `sales`
    }
  ]
})

export const getters = {
  menu: (state) => state.menu
}

export const mutations = {}

export const actions = {}
