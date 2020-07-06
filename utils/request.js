import baseUrl from './baseUrl.js'
/*
  path:请求路径
  method：请求方法
  params：请求参数
*/
let header;
let num = 0;
const closeLoading = ()=> {
  num --;
  if (num == 0) uni.hideLoading();
}
export default function request(path,method,params){
 
  // if(method.toUpperCase() == "POST") {
  //   header["content-type"] = "application/x-www-form-urlencoded"}
  // }
  return new Promise((reslove,reject)=>{
    if (num == 0) uni.showLoading({title:"加载中..."}) 
    num ++;
    wx.request({
      url: baseUrl + path,
      method: method || 'get',
      data: params || {},
      header: {
        // 'Authorization': 'Bearer ' + wx.getStorageSync('token'),
        ...header
      },
      success (res) {
		// console.log(res,"success")
		if(res.statusCode && res.statusCode !== 200){ // api错误
			uni.showToast({
				title: res.msg,
				icon: "none",
				duration: 2000
			});
			closeLoading()
			return;
		 }
        reslove(res.data)
        closeLoading()
      },
      fail(err){
		uni.showToast({
			title: '请求错误',
			icon: "none",
			duration: 2000
		});
	    reject(err)
	    closeLoading()
      }
    })
  })
}