<template>
    <div>
        <p>{{message}}</p>
        <p>reverse message1:"{{reversedMessage1}}"</p>
        <p>reverse message2:{{reversedMessage2()}}</p>
        <input v-model="message"/>
    </div>
    
</template>

<script>
export default {
    name:'Computed',
    data:()=>{
        return{
            message:'miss you'
        }
    },
    computed:{
        reversedMessage1(){
            return this.message.split("").reverse().join("");
        }
    },
    methods:{
        reversedMessage2(){
            return this.message.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>

</style>