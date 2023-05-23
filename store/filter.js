export const state = () => ({
  tab: 'all'
})

export const mutations = {
  setTab (state, tab) {
    state.tab = tab
  }
}

export const actions = {
  setTab ({ commit }, tab) {
    commit('setTab', tab)
  }
}
