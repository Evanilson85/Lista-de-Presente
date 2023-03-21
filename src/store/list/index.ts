import { api } from '@/service/api'
export const list = {
  state: () => ({
    nome: 'evanilson manoel 123',
    listCheck: [],
    token: '',
    user: {},
    allList: [],
    // allList: [
    //   {
    //     id: '6418ae298448c0f835295c52',
    //     index: 0,
    //     active: true,
    //     name: 'Bowers Blanchard',
    //     category: 'male',
    //   },
    //   {
    //     id: '6418ae2963672f5b27272fe4',
    //     index: 1,
    //     active: false,
    //     name: 'Sally Parker',
    //     category: 'female',
    //   },
    //   {
    //     id: '6418ae29a9345dbb53d81d4d',
    //     index: 2,
    //     active: false,
    //     name: 'Santos Riddle',
    //     category: 'male',
    //   },
    //   {
    //     id: '6418ae2930db6beda0c2b0e2',
    //     index: 3,
    //     active: false,
    //     name: 'Angela Navarro',
    //     category: 'female',
    //   },
    //   {
    //     id: '6418ae29a61624dcf13e50b5',
    //     index: 4,
    //     active: false,
    //     name: 'Wall Juarez',
    //     category: 'male',
    //   },
    //   {
    //     id: '6418ae29d872514eab66481e',
    //     index: 5,
    //     active: true,
    //     name: 'Patty Sparks',
    //     category: 'female',
    //   },
    //   {
    //     id: '6418ae29c48c3641ebd956de',
    //     index: 6,
    //     active: false,
    //     name: 'Bridget Wiggins',
    //     category: 'female',
    //   },
    // ],
  }),
  mutations: {
    setListCheck(state: { listCheck: [] }, newValue: []) {
      state.listCheck = newValue
    },
    setAllList(state: { allList: [] }, newValue: []) {
      state.allList = newValue
    },
    setToken(state: { token: string }, newValue: string) {
      return (state.token = newValue)
    },
    setUser(state: { user: string }, newValue: string) {
      return (state.user = newValue)
    },
  },
  actions: {
    login({ commit }: any, jsonLogin: any) {
      return new Promise<any>((resolve, reject) => {
        api
          .post('/login', jsonLogin)
          .then((res) => {
            const { data } = res
            const { token, user } = data
            commit('setToken', token)
            commit('setUser', user)
            localStorage.setItem('Token', token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    createGift({ getters }: any, data: any) {
      console.log(getters.getToken)
      return new Promise<any>((resolve, reject) => {
        api
          .post('/list', data, { headers: { Authorization: `bearer ${getters.getToken}` } })
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getList({ commit }: any) {
      return new Promise<any>((resolve, reject) => {
        api
          .get('/list')
          .then((res) => {
            const { data } = res
            commit('setAllList', data)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // confirmGift() {
    //   return 'ok'
    // },
  },
  getters: {
    getListCheck(state: { listCheck: [] }) {
      return state.listCheck
    },
    getAllList(state: { allList: [] }) {
      return state.allList
    },
    getToken(state: { token: string }) {
      return state.token
    },
    getUser(state: { user: Object }) {
      return state.user
    },
  },
}
