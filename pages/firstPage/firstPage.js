Page({
  data: {
    totalAssets: '总资产',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {  
    var that = this
    /*that.setData({
        totalAssets:totalAssets
    })*/
  }
})