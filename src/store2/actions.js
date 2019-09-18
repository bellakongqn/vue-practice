export default {
    addTodo ({ commit }, text) {
        commit('addTodo', {
          text,
          done: false
        })
    },
    toggleAll ({ state, commit }, done) {
        state.todos.forEach((todo) => {
          commit('editTodo', { todo, done })
        })
    },
}