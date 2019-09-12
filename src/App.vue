<template>
  <div id="app">
        <div>
            <input type="text" v-model="info"/>
            <button @click="handleClick">添加</button>
        </div>
        <ul>
            <TodoItem v-for="item in list" :key="item" >

              <!-- v-slot 只能放在template 或 components 上 slot可以直接放在span等标签上-->
              <!-- v-slot:item 具名插槽 -->
              <!-- <span slot>{{item}}</span> -->
              <!-- 作用域插槽 插槽内容能够访问子组件中才有的数据是很有用的 -->
              <template v-slot:item="itemProps">
                <span :style="{color: itemProps.check ? 'red':'blue'}">{{item}}</span>
              </template>
            </TodoItem>
        </ul>

        <PropsDemo
          name="Hello Vue！"
          :type="type"
          :is-visible="false"
          :on-change="handlePropChange"
          title="属性Demo"
          :list="list"
          class="test1"
          :class="['test2']"
          :style="{ marginTop: '20px' }"
          style="margin-top: 10px"
        />
        <!-- :type="type"  type="type"  前者传递的是data里的type,后者直接传值type-->
        <!-- class style 特殊属性 支持自负串 数组 对象等多种语法 -->

        <Event :name="name" @change="handleEventChange" />

        <Slot>
          <p>default slot</p>
          <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{ props.value }}</p>
          </template>
        </Slot>

        <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode" />
        <!-- 多个数据需要在表单里联动 :zip-code.sync-->

        <!-- <PersonalInfo
          :phone-info="phoneInfo"
          :zip-code="zipCode"
          @change="val => (phoneInfo = val)"
          @update:zipCode="val => (zipCode = val)"
        /> -->

         phoneInfo： {{ phoneInfo }}
          <br />
          zipCode： {{ zipCode }}
        
    </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import PropsDemo from './components/PropsDemo'
import Event from './components/Event'
import Slot from './components/Slot'
import PersonalInfo from './components/PersonInfo'

export default {
  name: 'app',
  data: ()=>{
     return{
        info:'',
        list:[],
        name: "",
        test2:"text3333",
        type: "success",
        phoneInfo: {
          areaCode: "+86",
          phone: ""
        },
        zipCode: ""
     }
  },
  methods:{
      handleClick(){
          this.list.push(this.info)
          this.info = ""
      },
      handlePropChange(val) {
        // 参数未子组件执行传入函数的里的参数
        this.type = val;
      },
      handleEventChange(val) {
        this.name = val;
      },
  },
  components: {
    TodoItem,
    PropsDemo,
    Event,
    Slot,
    PersonalInfo
  }
  
}
</script>

<style>
</style>
