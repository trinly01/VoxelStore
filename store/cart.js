export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart (state, item) {
    state.cart.push(item)
  }
}

export const actions = {
  addToCart ({ commit }, item) {
    commit('increment', item)
  }
}
