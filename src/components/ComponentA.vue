<template>
    <div>
        <h1>A 结点</h1>
        <button @click="() => changeColor()">改变color</button>
        <ComponentB />
    </div>
    
</template>

<script>

import Vue from 'vue'
import ComponentB from './ComponentB'

export default {
    name:"ComponentA",
    provide(){
        this.theme = Vue.observable({
            color:"yellow",
        })
        return{
            theme: this.theme
        }

    },
    methods:{
        changeColor(color){
            if (color) {
                this.theme.color = color;
            } else {
                this.theme.color = this.theme.color === "blue" ? "red" : "blue";
            }
        }
    },
    components:{
        ComponentB
    }
    
}
</script>

<style scoped>

</style>