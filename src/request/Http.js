var Http = (function() {
     var http = {};
     if (typeof window.XMLHttpRequest === "undefined") {
        window.XMLHttpRequest = function() {
        // 如果是i5就用Microsoft，其他就用Msxml2
        return new window.ActiveXObject(navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP":"Msxml2.XMLHTTP");
      };
     }
     http.post = function(url, data, callback, error) {
        if (typeof data === "function") { //data可以不穿值
            callback = data;
            data = null;
        }
        var timeout = setTimeout(function() { //超时设置
            error();
        }, 10000);
        var xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                clearTimeout(timeout);//清除超时
                if (xhr.status === 200){
                //alert(xhr.responseText);
                    callback(JSON.parse(xhr.responseText));//调用回调函数
                }else{
                    error();
                }
                xhr = null;// 删除对象,防止内存溢出
            }
        };
        xhr.onerror = function() { //如果产生了错误
            clearTimeout(timeout);
            error();
        };
        xhr.send(http.formDataCode(data));
    };
    http.formDataCode = function(data) {
        var fd = new FormData();
        if (!data) {
            return null;
        }
        for ( var key in data) {
            if(data.files){
                var file=data.files[0];
                fd.append("image", file);
            }else{
                fd.append(key, data[key]);
            }
        }
        return fd;
    }
    return http;
})();

export default Http;