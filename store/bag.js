import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const state = () => ({
  bag: []
})

export const getters = {
  bag: (state) => state.bag
}

export const mutations = {
  ADD_PRODUCT_TO_BAG: (state, payload) => {
    const { amount, product } = payload
    const ProductData = {
      amount,
      product
    }
    // check for is the same product
    // if true increase amount
    // if false create a new bag
    const bagClone = state.bag
    const bagFoundIndex = _.findIndex(bagClone, (bag) => {
      return (
        bag.product.code === product.code &&
        bag.product.sizes[0].name === product.sizes[0].name
      )
    })
    if (bagFoundIndex >= 0) {
      bagClone[bagFoundIndex].amount = bagClone[bagFoundIndex].amount + amount
    } else {
      bagClone.push(ProductData)
    }
    state.bag = bagClone
  },
  REMOVE_PRODUCT_IN_BAG: (state, index) => {
    const bagClone = state.bag
    bagClone.splice(index, 1)
    state.bag = bagClone
  },
  UPDATE_AMOUNT_PRODUCT_IN_BAG: (state, payload) => {
    const { index, amount } = payload
    const bagClone = state.bag
    bagClone[index].amount = amount
    state.bag = bagClone
  },
  UPDATE_SIZE_PRODUCT_IN_BAG: (state, size, index) => {
    const bagClone = state.bag
    bagClone[index].sizes[0].name = size.name
    state.bag = bagClone
  }
}

export const actions = {
  addProductToBag: ({ commit }, payload) => {
    commit('ADD_PRODUCT_TO_BAG', payload)
  },
  removeProductInBag: ({ commit }, index) => {
    commit('REMOVE_PRODUCT_IN_BAG', index)
  },
  updateAmountProductInBag: ({ commit }, payload) => {
    commit('UPDATE_AMOUNT_PRODUCT_IN_BAG', payload)
  }
}
