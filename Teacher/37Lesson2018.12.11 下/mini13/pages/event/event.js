// pages/event/event.js
const utils=require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
      val:"今天天气回蜂",
      nowTime:utils.formatTime(new Date())
  },
  bindTouchStart(){
    console.log("start");
  },
  bindTouchEnd() {
    console.log("end");
  },
  bindTouchMove() {
    console.log("move");
  },
  bindInner(event){
    console.log(event);
  },
  bindMiddle(event) {
    this.setData({
      nowTime:utils.formatTime(new Date())
    })

    console.log(event.currentTarget.dataset.age);
    console.log(event.currentTarget.dataset.userName);
  },
  bindOutter(event) {
    console.log("outter");
  },



  changeVal(){
    console.log(1111);
    this.setData({
      val: "今天天气不错！"
    })
      //  this.data.val="今天天气不错！"
      // console.log(this.data.val);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     setInterval(()=>{
       this.setData({
         nowTime:utils.formatTime(new Date())
       })
     },1000)
      // console.log("onLoad",this.data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})