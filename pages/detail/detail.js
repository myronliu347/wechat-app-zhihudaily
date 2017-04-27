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
  },
  wxParseTagATap: function(e){
    //页面URL点击处理
    var href = e.currentTarget.dataset.src;
    console.log(href);
    //var ids = href.split("/");
    //我们可以在这里进行一些路由处理
    //wx.navigateTo({
    //  url: '../detail/detail?id=' + ids[ids.length-1]
    //})
    //if(href.indexOf(index) > 0){
      // wx.redirectTo({
      //   url: '../index/index'
      // })

    //}

  }
})