<template>
  <el-row>
    <el-col :span="8" style="padding-right:10px">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/image/5.jpg" alt="">
          <div class="userinfo">
            <p class="name">Adimin</p>
            <p class="acess">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间:<span>2023-2</span></p>
          <p>上次登陆地点:<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top:20px;height:460px">
        <el-table
          :data="tableData"
          style="width: 100%">
          <!-- <el-table-column
            prop="name"
            label="品牌">
          </el-table-column>
          <el-table-column
            prop="todayBuy"
            label="今日购买">
          </el-table-column>
          <el-table-column
            prop="monthBuy"
            label="本月购买">
          </el-table-column>
          <el-table-column
            prop="totalBuy"
            label="总购买">
          </el-table-column> -->
          <el-table-column
            v-for="(val,key) in tableLabel" :key="key"
            :prop="key"
            :label="val">
          </el-table-column> 
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="padding-left:10px">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display :'flex', padding:0}">
        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
        <div class="detail">
          <p class="price">￥{{ item.value }}</p>
          <p class="desc">{{ item.name }}</p>
        </div>
      </el-card>
      </div>
      <el-card style="height: 280px">
        <!-- 折线图 -->
        <div ref="echarts1" style="height:280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height:260px">
          <div ref="echarts2" style="height:260px"></div>
        </el-card>
        <el-card style="height:260px">
          <div ref="echarts3" style="height:240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getData} from "../api/index"
import * as echarts from 'echarts'
export default {
  data() {
    return {
      tableData:[],
      tableLabel:{
        name:'',
        monthBuy:'本月购买',
        todayBuy:'今日购买',
        totalBuy:'总购买'
      },
      countData:[
        {
          name:'今日支付订单',
          value:1234,
          icon:'success',
          color:'#ec7cc9'
        },
        {
          name:'今日收藏订单',
          value:210,
          icon:'star-on',
          color:'#ffb980'
        },
        {
          name:'今日未支付订单',
          value:1234,
          icon:'s-goods',
          color:'#5ab1ef'
        },
        {
          name:'本月支付订单',
          value:1234,
          icon:'success',
          color:'#2ec7c9'
        },
        {
          name:'本月收藏订单',
          value:210,
          icon:'star-on',
          color:'#ffb980'
        },
        {
          name:'本月未支付订单',
          value:1234,
          icon:'s-goods',
          color:'#5ab1ef'
        },
      ]
    }
  },
  mounted(){
    getData().then(({data}) => {
      const {tableData}= data.data
      console.log(tableData)
      this.tableData = tableData

      const echarts1= echarts.init(this.$refs.echarts1)
      var echarts1option = {}
      const {orderData,userData,videoData} = data.data
      const xAxis = Object.keys(orderData.data[0])
      const xAxisData = {data:xAxis}
      echarts1option.xAxis = xAxisData
      echarts1option.yAxis = {}
      echarts1option.legend= xAxisData
      echarts1option.series = []
      xAxis.forEach(key => {
        echarts1option.series.push({
          name:key,
          data:orderData.data.map(item => item[key]),
          type:'line'
        })
      })
      echarts1.setOption(echarts1option)


          // 柱状图
    const echarts2 = echarts.init(this.$refs.echarts2)
    const echarts2Option = {
      legend:{
        textStyle:{
          color:'#333'
        },
      },
      grid:{
        left:'20%'
      },
      tooltip:{
        trigger:'axis'
      },
      xAxis:{
        type:'category',
        data:userData.map(item => item.date),
        axisLine:{
          lineStyle:{
            color:'#17b3a3'
          },
        },
        axisLabel:{
          interval:0,
          color:'#333'
        },
      },
      yAxis:[
        {
          type:'value',
          axisLine:{
            lineStyle:{
              color:'#17b3a3'
            }
          }
        }
      ],
      color:['#2ec7c9', '#b6a2de'],
      series:[
        {
          name:'新增用户',
          data:userData.map(item => item.new),
          type:'bar'
        },
        {
          name:'活跃用户',
          data:userData.map(item => item.active),
          type:'bar'
        }
      ]

    }
    echarts2.setOption(echarts2Option)

    const echarts3 = echarts.init(this.$refs.echarts3)
    const echars3Option = {
      tooltip:{
        trigger:'item',
      },
      color:[
        '#0f78f4',
        '#dd536b',
        '#9462e5',
        '#a6a6a6',
        '#e1bb22',
        '#39c362',
        '#3ed1cf'
      ],
      series:[
        {
          data:videoData,
          type:'pie'
        }
      ]
    }
    echarts3.setOption(echars3Option)
    })



  }
}
</script>

<style lang="less" scoped>
.user{
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 60px;
  }
  .userinfo {
    .name{
    font-size: 32px;
    margin-bottom: 10px;
    }
    .acess{
      color: #999999;
    }
  }
}
.login-info{
  p{
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span{
      color: #999999;
      margin-left: 60px;
    }
  }
}
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon{
    width:80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: aliceblue;
  }
  .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card{
    width:32%;
    margin-bottom: 20px;
  }
}
.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
    width:48%
  }
}
</style>