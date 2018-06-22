import Axios from 'axios';

// "http://120.79.247.254:1111":
// "http://47.107.18.73:1111";
// www.haoxuehome.com:1111
// 192.192.168.11:1111
const urlPath = process.env.NODE_ENV === "development"?
                "http://192.192.168.11:1111":
                'http://www.haoxuehome.com:1111';

// const urlPath = 'http://192.168.1.203:1111/';
// const imgPath = 'http://hxj-oss-prod.oss-cn-shenzhen.aliyuncs.com/';

Axios.defaults.baseURL = urlPath;
// Axios.defaults.headers.deviceId = window.returnCitySN["cip"];
// Axios.defaults.headers.post['content-Type'] = 'multipart/form-data';

//添加一个请求拦截器
Axios.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    // console.log(config)
    return config;
},function(err){
    //Do something with request error
    return Promise.reject(err);
});

// 添加一个响应拦截器
Axios.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    return res;
},function(err){
    // console.error(err.response)
    // alert('服务器内部错误，请联系后台程序猿哥哥')
    //Do something with response error
    return Promise.reject(err);
})


export default Axios;