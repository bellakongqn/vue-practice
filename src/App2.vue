<template>
    <section>
       <header>
           <h1>Todos</h1>
           <input
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            @keyup.enter="addTodo">
            <!-- 绑定enter事件 -->
       </header>
       <section  v-show="todos.length">
            <input
                type="checkbox"
                :checked="allChecked"
                @change="toggleAll(!allChecked)">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <TodoItem v-for="(todo, index) in filteredTodos"
                    :key="index"
                    :todo="todo" />
            </ul>
        </section>
        <footer>
            <span class="todo-count">
                <strong>{{ remaining }} item left</strong>
            </span>
            <ul class="filters">
                <li v-for="(val, key) in filters" :key="key">
                <a :href="'#/' + key"
                    @click="visibility = key">{{ key }}</a>
                </li>
            </ul>
            <button v-show="todos.length"  @click="clearCompleted">clear</button>
        </footer>
    </section>
    
</template>

<script>

import { mapActions } from 'vuex'
import TodoItem from './TodoItem'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {

    data () {
        return {
        visibility: 'all',
        filters: filters
        }
    },

    computed:{
        todos () {
            return this.$store.state.todos
        },
        allChecked () {
            return this.todos.every(todo => todo.done)
        },
        remaining () {
            return this.todos.filter(todo => !todo.done).length
        },
        filteredTodos () {
            switch(this.visibility){
                case 'all' :
                    return this.todos
                case 'active':
                    return this.todos.filter(todo => !todo.done)
                case 'completed' :
                    return this.todos.filter(todo => todo.done)
            }
        },

    },
    methods:{
        ...mapActions([
            'toggleAll',
            'clearCompleted'
        ]),
        addTodo (e) {
            const text = e.target.value
            if (text.trim()) {
                this.$store.dispatch('addTodo', text)
            }
            e.target.value = ''
        },
    },
    components:{
        TodoItem
    }
    
}
</script>


<style scoped>

</style>