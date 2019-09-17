<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
//   从store中读取状态在组件内展示
//     count () {
//       return this.$store.state.count
//     }
//   我们可以使用 mapState 辅助函数帮助我们生成计算属性
  computed: mapState({
    //   获取products中的所有产品all:[]
    products: state => state.products.all
  }),
// 你在组件中使用 this.$store.dispatch('xxx') 分发 action，
// 或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
// 点击按钮添加进购物车，调取购物车的addProductToCart
  methods: mapActions('cart', [
    'addProductToCart'
  ]),

//   页面创建时获取所有产品数据
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
