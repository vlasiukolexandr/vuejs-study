import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 6,
    authors: [
      'J. K. Rowling',
      'J. R. R. Tolkien',
      'C. S. Lewis',
      'Charles Dickens'
    ],
    list: [
      {
        id: 1,
        isbn: 12082018,
        title:'Harry Potter',
        author: 'J. K. Rowling',
        description: 'Some description',
        date: new Date()
      },
      {
        id: 2,
        isbn: 11082019,
        title:'Lord of the Rings',
        author: 'J. R. R. Tolkien',
        description: 'Some description',
        date: new Date()
      },
      {
        id: 3,
        isbn: 11082020,
        title:'The Chronicles of Narnia',
        author: 'C. S. Lewis',
        description: 'Some description',
        date: new Date()
      },
      {
        id: 4,
        isbn: 11022021,
        title:'A Christmas Carol',
        author: 'Charles Dickens',
        description: 'Some description',
        date: new Date()
      }
    ]
  },
  getters: {
    getList: state => {
      return state.list.sort((a, b) => b.id - a.id)
    },
    getAuthors: state => {
      return state.authors
    }
  }
})

export default store
