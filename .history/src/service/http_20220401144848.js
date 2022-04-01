import axios from 'axios';
import Vue from "vue";
import router from './router/index.js'

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = '';
axios.interceptors.request.use(
    config => {
        const token = localStorage.tuso_token;
        token && (config.headers.Authorization = 'Bearer' + ' ' + token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)
axios.interceptors.response.use(
    response => {
        console.log(response);
        if (response.data.code==200) {
            return response;
        } else {
            Vue.prototype.$message({
                message: response.data.message,
                type: "warning",
              });
            router.push("/login");
            localStorage.clear();
            return response;
        }
    },

    // 可根据错误响应码判断状态，做出相应的处理
    error => {
        return Promise.reject(error.response);
        // if (error.response.code) {            
        //     switch (error.response.code) {                
        //         // 401: 未登录
        //         // 未登录时跳转登录界面，登录成功后回调登录前被拦截的地址 query.redirect
        //         case 401:                    
        //             router.replace({                        
        //                 path: '/toLogin',                        
        //                 query: { 
        //                     redirect: router.currentRoute.fullPath 
        //                 }
        //             });
        //             break;

        //         // 403 token过期
        //         // 清空本地存储的token，跳转登录界面
        //         case 403:
        //              Toast({
        //                 message: '登录过期，请重新登录',
        //                 duration: 1000,
        //                 forbidClick: true
        //             });
        //             // 清除token
        //             localStorage.removeItem('token');
        //             store.commit('loginSuccess', null);
        //             // 登录成功后回调登录前被拦截的地址 query.redirect
        //             setTimeout(() => {                        
        //                 router.replace({                            
        //                     path: '/login',                            
        //                     query: { 
        //                         redirect: router.currentRoute.fullPath 
        //                     }                        
        //                 });                    
        //             }, 1000);                    
        //             break; 

        //         // 404请求不存在
        //         case 404:
        //             Toast({
        //                 message: '网络请求不存在',
        //                 duration: 1500,
        //                 forbidClick: true
        //             });
        //             break;
        //         // 其他错误，弹出对应的响应信息
        //         default:
        //             Toast({
        //                 message: error.response.data.message,
        //                 duration: 1500,
        //                 forbidClick: true
        //             });
        //     }
        //     return Promise.reject(error.response);
        // }
    }
);
export default axios;