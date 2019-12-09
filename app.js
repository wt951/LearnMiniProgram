App({

 //生命周期函数，后台存货2小时
  onLaunch: function () {
    wx.getUserInfo({
      //数据拿到之后，在进行回调的
      success:function(res){
        console.log(res)
      }
    }),
    setTimeout(function(){
      const err = new Error()
      throw err
    },3000)
  },

  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log('界面显示出来：onshow')
  },

  //小程序界面隐藏出来之后会执行的生命周期函数
  onHide: function () {
    console.log('界面被隐藏时会执行：onhide')
  },

  
  onError: function (msg) {
    console.log('小程序发生一些错误时会执行')
  }
})
