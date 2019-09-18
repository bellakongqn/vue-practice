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
                <li 
                v-for="(todo, index) in todos"
                :key="index">{{todo}}</li>
            </ul>
        </section>
    </section>
    
</template>

<script>

import { mapActions } from 'vuex'
export default {

    computed:{
        todos () {
            return this.$store.state.todos
        },
        allChecked () {
            return this.todos.every(todo => todo.done)
        },

    },
    methods:{
        ...mapActions([
            'toggleAll'
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
    }
    
}
</script>


<style scoped>

</style>