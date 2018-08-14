import Vue from 'vue'
import Vuex from 'vuex'

import {library} from './../data/library.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: library.length,
    authors: [
      'J. K. Rowling',
      'J. R. R. Tolkien',
      'C. S. Lewis',
      'Charles Dickens',
      'Jules Verne'
    ],
    list: library
  },
  getters: {
    getList: state => state.list.sort((a, b) => b.id - a.id),
    getAuthors: state => state.authors
  },
  mutations: {
    delete (state, id) {
      state.list = state.list.filter(i => i.id !== id)
    },
    edit (state, item) {
      state.list = state.list.map(i => {
        if (i.id == item.id)
          return {
            ...i,
            ...item
          }

        return i
      })
    },
    add (state, item) {
      state.list.push({ ...item, id: ++state.count, date: new Date()})
    }
  },
  actions: {
    delete ({ commit, state}, id) {
      commit('delete', id)
    },
    edit ({ commit, state}, item) {
      commit('edit', item)
    },
    add ({ commit, state}, item) {
      commit('add', item)
    }
  }
})

export default store
