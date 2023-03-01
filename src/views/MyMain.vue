<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <My-Aside></My-Aside>
      </el-aside>
      <el-container>
        <el-header>
          <My-Header></My-Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
import MyAside from '../components/MyAside.vue'
import MyHeader from '../components/MyHeader.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    MyAside,
    MyHeader
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>