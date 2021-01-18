import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


	let statusBarHeight,menuButtonObject,menuHeight,navheight,btnHeight,btnWidth
	statusBarHeight = uni.getSystemInfoSync().statusBarHeight
	//#ifdef MP-WEIXIN
	menuButtonObject = uni.getMenuButtonBoundingClientRect()
	menuHeight = menuButtonObject.height + (menuButtonObject.top-statusBarHeight)*2
	navheight = menuHeight + statusBarHeight
	btnHeight = menuButtonObject.height
	btnWidth = menuButtonObject.width
	//#endif
	//#ifdef H5
	menuHeight = 44
	navheight = menuHeight + statusBarHeight
	btnHeight = 30
	btnWidth = 70
	//#endif			
 const  globalData = {
	navheight: navheight,
	statusBarHeight: statusBarHeight,
	menuHeight: menuHeight,
	btnWidth: btnWidth,
	btnHeight: btnHeight
 }
 Vue.prototype.globalData = globalData