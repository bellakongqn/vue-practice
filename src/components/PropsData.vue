<template>
 <div>
  <span>props.person:{{person}}</span>
  <span>props.title:{{title}}</span>
  <span>data.a:{{a}}</span>
  <button @click="changeB">change b</button>
 </div>
</template>

<script>
export default {
    name:'PropsData',
    props:{
        person:Object,
        title:Array,
    },
    data:()=>{
        return{
            a:'hell0',
            b:"wyatt"
        }
    },
    methods:{
        changeB(){
            this.b="bella"
        }
    }
}
</script>

<style scoped>

</style>