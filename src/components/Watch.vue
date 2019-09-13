<template>

   <div>
       {{$data}}
        <button @click="() => (a += 1)">a+1</button>
   </div>
    
</template>

<script>
export default {

    name:'Watch',
    data:()=>{
        return{
            a: 1,
            b: { c: 2, d: 3 },
            e: {
                f: {
                g: 4
                }
            },
            h: []
        }
    },
    watch:{
        a(){
            this.b.c += 1;
        },
        "b.c":function(){
            this.b.d+=1;
        },
        "b.d":function(){
            this.e.f.g+=1;
        },
        e:{
            handler:function(){
                this.h.push('😀')
            },
            deep:true,
        },
        h(){

        },
    }
    
}


</script>
<style scoped>

</style>