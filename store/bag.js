import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  bag: []
})

export const getters = {
  bag: (state) => state.bag
}

export const mutations = {
  ADD_PRODUCT_TO_BAG: (state, product) => {
    state.bag = state.bag.push(product)
  },
  REMOVE_PRODUCT_IN_BAG: (state, index) => {
    state.bag = state.bag.splice(index, 1)
  },
  UPDATE_PRODUCT_IN_BAG: (state, product, index) => {
    const bagClone = state.bag
    bagClone[index] = product
    state.bag = bagClone
  }
}

export const actions = {
  addProductToBag: ({ commit }, product) => {
    commit('ADD_PRODUCT_TO_BAG', product)
  },
  removeProductInBag: ({ commit }, index) => {
    commit('REMOVE_PRODUCT_IN_BAG', index)
  },
  updateProductInBag: ({ commit }, product, index) => {
    commit('UPDATE_PRODUCT_IN_BAG', product, index)
  }
}
