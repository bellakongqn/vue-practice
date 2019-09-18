export const mutations = {
    addTodo (state, todo) {
        state.todos.push(todo)
    },
    toggleAll (state, { todo, done }) {
        todo.done = done
    },
    removeTodo(state, todo){
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTodo(state, { todo , text}){
        todo.text = text
    }
}