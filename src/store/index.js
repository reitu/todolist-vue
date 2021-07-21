import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    add_todo(state, todo) {

      var duplicate = state.todos.some(function(e) {
        return e.name === todo;
      });

      if (!todo || duplicate) return
      
      state.todos.push({
        name: todo,
        done: false})
    },

    dlt_todo(state, todo) {
      var updatedTodo = state.todos.filter(function(item) {
        return !(item === todo)
      }); 
      state.todos = updatedTodo
    },

    dlt_all(state) {
      state.todos = []
    },
    
    done_todo(state, todo) {
      console.log('first', todo)
      todo.done = !todo.done//the opposite of what it was so that when its true, then it strikes it, else unDONE
      console.log('then', todo)
    }
  },
  actions: {
    addTodo({commit}, todo) {
      commit("add_todo", todo)
    },
    dltTodo({commit}, todo) {
      commit("dlt_todo", todo)
    },
    dltAll({commit}) {
      commit("dlt_all")
    },
    doneTodo({commit}, todo) {
      commit("done_todo", todo)
    },

  },
  modules: {
  },
  getters: {
    todos: (state) => state.todos
  }
})
