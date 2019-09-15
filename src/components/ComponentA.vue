<template>
    <div>
        <h1>A 结点</h1>
        <button @click="() => changeColor()">改变color</button>
        <ComponentB />
    </div>
    
</template>

<script>

import ComponentB from './ComponentB'
export default {
    name:"ComponentA",
    provide(){
        return{
            theme: this
        }

    },
    data:function(){
        return{
            color: "blue"
        }

    },
    methods:{
        changeColor(color){
            if (color) {
                this.color = color;
            } else {
                this.color = this.color === "blue" ? "red" : "blue";
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