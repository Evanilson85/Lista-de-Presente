export const list = {
  state: () => ({
    nome: 'evanilson manoel 123',
    listCheck: [],
    allList: [
      {
        id: '6418ae298448c0f835295c52',
        index: 0,
        active: true,
        name: 'Bowers Blanchard',
        category: 'male',
      },
      {
        id: '6418ae2963672f5b27272fe4',
        index: 1,
        active: false,
        name: 'Sally Parker',
        category: 'female',
      },
      {
        id: '6418ae29a9345dbb53d81d4d',
        index: 2,
        active: false,
        name: 'Santos Riddle',
        category: 'male',
      },
      {
        id: '6418ae2930db6beda0c2b0e2',
        index: 3,
        active: false,
        name: 'Angela Navarro',
        category: 'female',
      },
      {
        id: '6418ae29a61624dcf13e50b5',
        index: 4,
        active: false,
        name: 'Wall Juarez',
        category: 'male',
      },
      {
        id: '6418ae29d872514eab66481e',
        index: 5,
        active: true,
        name: 'Patty Sparks',
        category: 'female',
      },
      {
        id: '6418ae29c48c3641ebd956de',
        index: 6,
        active: false,
        name: 'Bridget Wiggins',
        category: 'female',
      },
    ],
  }),
  mutations: {
    setListCheck(state: { listCheck: [] }, newValue: []) {
      state.listCheck = newValue
    },
  },
  actions: {
    confirmGift() {
      return 'ok'
    },
  },
  getters: {
    getListCheck(state: { listCheck: [] }) {
      return state.listCheck
    },
    getAllList(state: { allList: [] }) {
      return state.allList
    },
  },
}
