export const mutations = {
    addTodo (state, todo) {
        state.todos.push(todo)
    },
    toggleAll (state, { todo, done }) {
        todo.done = done
    }
}