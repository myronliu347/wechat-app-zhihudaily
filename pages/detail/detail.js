var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    art: {},
  },
  onReady () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad (options) {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
        if (res.data.body) {
          var body = res.data.body;
          WxParse.wxParse('body', 'html', body, that, 5);
        }
         that.setData({
           art: res.data
         })
      }
    })
  }
})