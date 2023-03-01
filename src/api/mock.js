import Mock from 'mockjs'
import homeApi from './mockServeData/home'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)