<template>
    <div>
        <h1>User</h1>
        <div>我是user组件{{dynamicSegment}}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                dynamicSegment: ''
            }
        },
        watch: {
            $route (to){
                // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
                this.dynamicSegment = to.params.id
            }
        }
        // computed: {
        //     dynamicSegment () {
        //         return this.$route.params.id
        //     }
        // }

    }
</script>