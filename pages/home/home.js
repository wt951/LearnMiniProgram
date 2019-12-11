// pages/home/home.js
//getapp（）获取app（）产生示例对象
// const app = getApp()
// const name = app.globaData.name
// const age = app.globaData.age
// console.log(name)
// console.log(age)
//注册一个页面
Page({
  //2、初始化数据
  data:{
    list:[]
  },
  //3、监听wxml中相关的一些事件
  handleSetUserInfo:function(event){
    console.log(event)
  },
  //1、监听页面的生命周期函数，发送网络请求，从服务器获取数据
  //页面被加载出来
  onLoad(){
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:(res) => {
    //     console.log(res)
    //     const data = res.data.data.list 
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })
  },
  //页面显示出来时
  onShow(){

  },
  //页面初次渲染完成时
  onReady() {

  },
  //页面隐藏时
  onHide(){

  },
  //关于这个页面被销毁时
  onUnload(){

  },
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }
})