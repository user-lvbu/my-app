export default {
  state:{
    isCollapse:false // 控制菜单折叠
  },
  mutations:{
    // 修改菜单折叠的方法
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    }
  }
}