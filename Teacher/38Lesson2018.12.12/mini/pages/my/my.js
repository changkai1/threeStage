// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieList:[],
        pageIndex:1,
        isOver:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
       this.getMovieList();
    },
    getMovieList(){
        wx.showLoading({
            title: '加载中……',
        })
        wx.request({
            url: "https://weixin.zhangpeiyue.com/movie",
            data: {
                pageIndex: this.data.pageIndex
            },
            success: ({ data }) => {
                // console.log(this.data);
                this.setData({
                    movieList: this.data.movieList.concat(data.subjects),
                    isOver:data.isOver
                }, () => {
                    console.log(1111,this.data.isOver);
                    wx.hideLoading();
                })
                console.log(data);
            }
        })
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
    //    console.log(11111);
        if(this.data.isOver){
            wx.showModal({
                title: "友情提示",
                content: '内容已经没有啦',
            })
        }else{
            this.data.pageIndex++;
            this.getMovieList();
        }
     
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      
    }
})