<template>
  <div id="app">
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="{ name: 'user', params: { id: 123 }}">User123</router-link>
      <router-link to="/user/456">User456</router-link>
      <button @click="goHome">去首页</button>
      <button @click="goList">去列表</button>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view ></router-view>
    <router-view  name="a"></router-view>
    <router-view  name="b"></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
                //页面跳转，push是增加到历史管理
               this.$router.history.push('/home')
                //go表示前进后退
                //this.$router.history.go(-1)
            },
    goList(){
        this.$router.history.push('/user/123')
        //将当前历史管理替换成list
        //this.$router.history.replace('/list')
    }
  }
}
</script>