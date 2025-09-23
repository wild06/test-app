<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace icon="wap-home-o" to="/home" >首页</van-tabbar-item>
      <van-tabbar-item replace icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item replace icon="chat-o" badge="99+" to="/message" >消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/me">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script >
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
</style>
