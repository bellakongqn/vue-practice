<template>
  <div id="app">
        <ComponentA />
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

        <SlotDemo>
          <p>default slot</p>
          <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
          </template>
          <template v-slot:item="props">
            <p>item slot-scope {{ props.value }}</p>
          </template>
        </SlotDemo>

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

        <p>
          <button @click="handlePersonChange">change this.Person</button>
          <button @click="handleTitleChange">change this.title</button>
        </p>

        <PropsData :person="person" :title="title"/>
        <Computed />
        <Watch />
        <Computed1 />
        <Watch1/>
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? "加载时钟" : "销毁时钟" }}
        </button>
        <Life v-if="!destroyClock" />

        <Functional :name="name" />
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>

        
    </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import PropsDemo from './components/PropsDemo'
import Event from './components/Event'
import SlotDemo from './components/Slot'
import PersonalInfo from './components/PersonInfo'
import PropsData from './components/PropsData'
import Computed from './components/Computed'
import Watch from './components/Watch'
import Computed1 from './components/Computed1'
import Watch1 from './components/Watch1'
import Life from './components/Life'
import Functional from './components/Functional'
import TempVar from './components/TempVar'
import ComponentA from './components/ComponentA'


export default {
  name: 'app',
  data: ()=>{
     return{
        info:'',
        list:[],
        name: "vue",
        test2:"text3333",
        type: "success",
        phoneInfo: {
          areaCode: "+86",
          phone: ""
        },
        zipCode: "",
        person:{
          number:''
        },
        title:[1,2,3],
        destroyClock:false,
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
      handlePersonChange(){
        this.person.number = 1;
        // this.$set(this.info, 'number', 1)
      },
      handleTitleChange(){
         this.title.concat[1, 2, 3];
      }
  },
  components: {
    TodoItem,
    PropsDemo,
    Event,
    SlotDemo,
    PersonalInfo,
    PropsData,
    Computed,
    Watch,
    Computed1,
    Watch1,
    Life,
    Functional,
    TempVar,
    ComponentA
  }
  
}
</script>

<style>
</style>
