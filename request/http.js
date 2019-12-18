let baseUrl = '';
// const host = 'http://192.168.0.116:9000/lhty'
// 区分环境
if (process.env.NODE_ENV == 'development') {
    // host = 'http://192.168.0.116:8089/lhty' // 开发环境
    baseUrl = 'https://laihu.baogongxia.com/lhty' // 开发环境
} else {
    baseUrl = 'https://laihu.baogongxia.com/lhty' // 生产环境
}



function request(url,method,data,header={}){
  uni.showLoading({
    title: '加载中...'
  })
  return new Promise((resolve,reject) => {
    uni.request({
      url: baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: function(resp) {
        uni.hideLoading();
				if (resp.data.status == 200) {
					resolve(resp.data);
				}
				if (resp.data.status == 201) {
					uni.showToast({
						title: resp.data.message,
						duration: 2500,
						icon: 'none'
					});
				}
      },
      fail: function(resp) {
        uni.hideLoading();
        reject(resp);
      },
    })
  })
}

// 封装get方法
function get(obj) {
  return request(obj.url,'GET',obj.data)
}
// 封装post方法
function post(obj) {
  return request(obj.url,'POST',obj.data)
}

export default {
  request,
  get,
  post,
  baseUrl
}
  