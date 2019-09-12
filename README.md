
// <my-checkbox v-model="foo" value="some value"></my-checkbox>

// model: {
//     prop: 'checked',
//     event: 'change'
//   },


// <my-checkbox

// v-bind:checked="foo"  （因为 v-model 会默认绑定 checkbox 的 value 或 checked 值）；

// v-on:change="function(val) { return foo = val } （因为v-model 绑定的是value/checked 值。
// v-model="foo",相当于 v-on 把 model 里的 change 事件和 value/checked="foo" 这个函数绑定在一起了 ）>

// </my-checkbox>

// 自定义元素上使用 v-model="theFunction"， 同时，组件里使用 model {prop:xxx, event:xxx}
// 可以把 model 里面定义的 prop 和 event 自动绑定在 "theFuntion" 这个自定义事件上