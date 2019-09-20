import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/Home";
import about from "./components/About";
import user from "./components/User";
import phone from "./components/Phone";
import tablet from "./components/Tablet";
import computer from "./components/Computer";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    // 重定向
    { path: '/',  redirect: '/home' },
    { path:"/home", name: 'home', component: home ,
    // 子路由
        children: [
            { path: "",  component: phone},
            { path: "phone", component: phone},
            { path: "tablet", component: tablet},
            { path: "computer", component: computer}
        ]
    },
    { path: "/about",
    // 命名视图
      components:{
        default: about,
        a: tablet,
        b: computer
      }
    },
    // 新增user路径，配置了动态的id
    { path: "/user/:id",name: 'user' , component: user }
]

var router =  new VueRouter({
    routes
})
export default router;