<template>
    <div>
        {{count}}
        {{oddNumber}}
         <button @click="add">添加</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    computed:{
        ...mapState({
            count:state=>state.count.count
        }),
        ...mapGetters(
            {oddNumber:'count/oddNumber'}
        )
    },
    methods:{
        // 同步
        ...mapMutations({
            add:'count/add'
        }),
        // add(){
        //     this.$store.commit('count/add')
        // }
        // ...mapMutations(['count/add']) 映射为同名

        // 异步操作
        // add(){
        //     this.$store.dispatch('count/add')
        // },
        // ...mapActions(
        //     {add:'count/add'}
        // )
    }
    
}
</script>