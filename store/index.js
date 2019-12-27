import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  menu: [
    {
      title: 'gifts'
    },
    {
      title: `women's faction`
    },
    {
      title: `man's faction`
    },
    {
      title: 'gifts'
    },
    {
      title: `women's faction`
    },
    {
      title: `man's faction`
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
