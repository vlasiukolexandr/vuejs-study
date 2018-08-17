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
    list: library,
    search: ''
  },
  getters: {
    getList: state => state.list.sort((a, b) => b.id - a.id),
    getAuthors: state => state.authors,
    getFilteredList: state => state.list
          .filter(i => (~i.title.toLowerCase().indexOf(state.search.toLowerCase())))
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
    },
    search(state, item) {
      state.search = item
    },
    findItem(state, item) {
      return state.list.find(i => i.id == item)
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
    },
    search ({commit, state}, item) {
      commit('search', item)
    },
    findItem ({commit, state}, item) {
      commit('findItem', item)
    }
  }
})

export default store
