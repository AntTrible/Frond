let baseURL = 'https://rzpofyyx.lc-cn-n1-shared.com'
export const $http = function (url,method='GET',data={}){
    return new Promise((resolve,reject)=>{
            //方法1
            uni.request({
                url: baseURL+url,
                method,
                header:{
                    "X-LC-Id": "RzPoFYYXWgF3DjgxcIuAsgVG-gzGzoHsz",
                    "X-LC-Key": "o4oBu6cmLRhQILGbhilgtNQJ" ,
                    "Content-Type": "application/json" 
                },
                data,
                success:(res) =>{
                    resolve(res.data)
                },
                fail:(err)=>{
                    reject(err)
                }
             })
    })
}

export const $get = function(url,data={}){
    return $http(url,'GET',data)
}

export const $post = function(url,data={}){
    return $http(url,'GET',data)
}