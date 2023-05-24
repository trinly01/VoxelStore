export const state = () => ({
  cart: []
})

export const getters = {
  totalItems: (state) => {
    return state.cart.length
  }
}

export const mutations = {
  addToCart (state, item) {
    state.cart.push(item)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  initCart (state) {
    state.cart = JSON.parse(localStorage.getItem('cart')) || []
  },
  removeItem (state, id) {
    const i = state.cart.findIndex(item => item.id === id)
    state.cart.splice(i, 1)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}

export const actions = {
  addToCart ({ commit }, item) {
    commit('addToCart', item)
  },
  initCart ({ commit }) {
    commit('initCart')
  },
  removeItem ({ commit }, id) {
    commit('removeItem', id)
  }
}
