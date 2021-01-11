// pages/canvas/canvas.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        startX:0,
        startY:0,
        endX:0,
        endY:0,
        direction:"right",
        snake:{
            x:0,
            y:0
        },
        snakeBodys:[]// 记录身体的下标值  {x:xxx,y:xxx}
    },
    bindStart(event){
        this.data.startX=event.touches[0].x;
        this.data.startY=event.touches[0].y;
    },
    bindMove(event){
        this.data.endX=event.touches[0].x;
        this.data.endY=event.touches[0].y;
    },
    bindEnd(event){
        console.log(this.data);
        var x=this.data.endX-this.data.startX;
        var y=this.data.endY-this.data.startY;
        if(Math.abs(x)>Math.abs(y) && x>0 && this.data.direction != "left"){
            console.log("right");
            this.data.direction="right";
        } else if (Math.abs(x) > Math.abs(y) && x < 0 && this.data.direction != "right") {
            console.log("left");
            this.data.direction="left";
        }
        else if (Math.abs(y) > Math.abs(x) && y > 0 && this.data.direction != "top"){
            console.log("down");
            this.data.direction="down";
        } else if (Math.abs(y) > Math.abs(x) && y < 0 && this.data.direction != "down") {
            console.log("top");
            this.data.direction="top";
        }
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

        const context = wx.createCanvasContext("my");
        context.rect(0, 0, 20, 20);
        context.setFillStyle("yellow");
        context.fill();
        context.draw();
        setInterval(()=>{
            this.data.snakeBodys.push({
                x:this.data.snake.x,
                y:this.data.snake.y
            });
            if(this.data.snakeBodys.length>10){
                this.data.snakeBodys.shift();
            }
            switch(this.data.direction){
                case "left":
                    if(this.data.snake.x<=0){
                        this.data.snake.x=400;
                    }else{
                        this.data.snake.x -= 20;
                    }                   
                    break;
                case "right":
                    if(this.data.snake.x>=400){
                        this.data.snake.x=0;
                    }else{
                        this.data.snake.x += 20;
                    }
                   
                    break;
                case "top":
                    if(this.data.snake.y<=0){
                        this.data.snake.y=600;
                    }else{
                        this.data.snake.y -= 20;
                    }
                   
                    break;
                case "down":
                    if(this.data.snake.y>=600){
                        this.data.snake.y=0;
                    }else{
                        this.data.snake.y += 20;
                    }
                   
                    break;
            }



            // 头 坐标  身体的坐标
            var index=this.data.snakeBodys.findIndex((item)=>{
                return item.x===this.data.snake.x && item.y===this.data.snake.y;
            })
            if(index>-1){
                console.log("咬到自己啦");
            }



            console.log(this.data.snake);

            context.rect(this.data.snake.x, this.data.snake.y, 20, 20);
            context.setFillStyle("yellow");
            context.fill();
            

            for(var i=0;i<this.data.snakeBodys.length;i++){
                context.beginPath();
                context.rect(this.data.snakeBodys[i].x, this.data.snakeBodys[i].y, 20, 20);
                context.setFillStyle("green");
                context.fill();
                context.setStrokeStyle("white");
                context.stroke();
            }

            context.draw();






        },500)

















        // 创建一个画布的上下文
        // const context=wx.createCanvasContext("my");
        // context.rect(8,80,20,20);
        // context.setStrokeStyle("red");
        // context.setLineWidth(8);
        // context.stroke();
        // context.setFillStyle("yellow");
        // context.fill();
        // context.draw();
        


        // wx.getSystemInfo({
        //     success: function(res) {
        //         console.log(res);
        //     },
        // })
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