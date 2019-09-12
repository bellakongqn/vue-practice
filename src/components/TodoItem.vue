<template>
    <!-- <li class="item">{{item}}</li> -->
    <li class="item">
        <input type="checkbox" v-model="check"/>
        <slot name="item" v-bind="{check}"></slot>
        <!-- slot v-bind without argument expects an Object -->
    </li>
</template>

<script>
export default {
    name:'TodoItem',
    props:['item'],
    data:()=>{
        return{
            check:false,
        }
    }
}
</script>

<style scoped>
    .item{
            color: red;
        }
</style>