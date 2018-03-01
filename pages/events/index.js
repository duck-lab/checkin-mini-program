const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad: function (options) {
    console.log('>>> Events Load')
  },
  onShow: function () {
    console.log('>>> Events Show')
  },
  onReady: function () {
    console.log('>>> Events Ready')
  },
  onHide: function () {
    console.log('>>> Events Hide')
  },
  onUnload: function () {
    console.log('>>> Events Unload')
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})