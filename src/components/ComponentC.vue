<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E 结点</h3>
  </div>
</template>
<script>
export default {
  name:'ComponentC',
  inject: {
    theme: {
      default: () => {}
    }
  }
};
</script>