//app.js    小程序的入口，注册小程序
var config = {
  // 前后台切换
  // 前台：你的小程序在你的手机屏幕上运行
  // 后台：点了关闭，或者按了HOME键以后，小程序不会自动关闭，而是会在后台运行。
  onShow(){
    // 当你从后台切换到前台时会执行
    console.log("onshow");
  },
  onHide(){
    // 当你从前台切换到后台时会执行。
    console.log("onHIDE");
  },
  onLaunch: function () {
    // 当小程序初始化完成以后会执行该函数。
    console.log("onLaunch");
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
}
App(config)