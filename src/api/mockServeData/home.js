import Mock from 'mockjs'

let list = []

export default {
  getStatisticalData:() =>{
    for (let i=0; i<7;i++){
      list.push(
        Mock.mock({
          苹果:Mock.Random.float(100,8000,0,0),
          vivo:Mock.Random.float(100,8000,0,0),
          oppo:Mock.Random.float(100,8000,0,0),
          魅族:Mock.Random.float(100,8000,0,0),
          小米:Mock.Random.float(100,8000,0,0),
          三星:Mock.Random.float(100,8000,0,0),
        })
      )
    }
    return {
      code:20000,
      data:{
        // 饼图
        videoData:[
          {
            name:'小米',
            value:2999
          },
          {
            name:'苹果',
            value:5999
          },
          {
            name:'vivo',
            value:1999
          },
          {
            name:'oppo',
            value:2999
          },
          {
            name:'魅族',
            value:3500
          },
          {
            name:'三星',
            value:2800
          },
        ],
        // 柱状图
        userData:[
          {
            date:'周一',
            new:5,
            active:200
          },
          {
            date:'周二',
            new:10,
            active:500
          },
          {
            date:'周三',
            new:12,
            active:550
          },
          {
            date:'周四',
            new:18,
            active:600
          },
          {
            date:'周五',
            new:25,
            active:750
          },
          {
            date:'周六',
            new:32,
            active:850
          },
          {
            date:'周日',
            new:40,
            active:950
          },
        ],
        // 折线图
        orderData:{
          date:['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
          data:list
        },
        tableData:[
          {
            name:'oppo',
            todayBuy:500,
            monthBuy:3500,
            totalBuy:22000
          },
          {
            name:'vivo',
            todayBuy:300,
            monthBuy:3000,
            totalBuy:12000
          },
          {
            name:'小米',
            todayBuy:400,
            monthBuy:2500,
            totalBuy:25000
          },
          {
            name:'苹果',
            todayBuy:600,
            monthBuy:4000,
            totalBuy:32000
          },
          {
            name:'魅族',
            todayBuy:200,
            monthBuy:3500,
            totalBuy:20000
          },
          {
            name:'三星',
            todayBuy:100,
            monthBuy:1500,
            totalBuy:12000
          },
        ]
      }
    }
  }
}