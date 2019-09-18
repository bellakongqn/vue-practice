export default {
    addTodo ({ commit }, text) {
        commit('addTodo', {
          text,
          done: false
        })
    },
    toggleAll ({ state, commit }, done) {
        state.todos.forEach((todo) => {
          commit('toggleAll', { todo, done })
        })
    },
    toggleTodo ({ commit }, todo) {
        commit('toggleAll', { todo, done: !todo.done })
    },
    removeTodo({ commit }, todo){
        commit('removeTodo', todo)
    },
    editTodo ({ commit }, { todo, value }) {
        commit('editTodo', { todo, text: value })
    },
    clearCompleted({ state , commit }){
        state.todos.filter(todo => todo.done)
        .forEach(todo => {
            commit('removeTodo', todo)
        })
    }
}