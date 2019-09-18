export const mutations = {
    addTodo (state, todo) {
        state.todos.push(todo)
    },
    editTodo (state, { todo, done = todo.done }) {
        todo.done = done
    }
}