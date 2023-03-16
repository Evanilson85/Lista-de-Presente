export const list = {
  state: () => ({
    nome: 'evanilson manoel 123',
    listCheck: [],
  }),
  mutations: {
    setListCheck(state: { listCheck: [] }, newValue: []) {
      state.listCheck = newValue
    },
  },
  actions: {},
  getters: {
    getListCheck(state: { listCheck: [] }) {
      return state.listCheck
    },
  },
}
