export const state = () => ({
  cart: process.client ? (localStorage.getItem('cart') || []) : []
})

export const mutations = {
  addToCart (state, item) {
    state.cart.push(item)

    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}

export const actions = {
  addToCart ({ commit }, item) {
    commit('addToCart', item)
  }
}
