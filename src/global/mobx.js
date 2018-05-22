
//mobx 状态总仓库 ==》所有全局状态由这里输出
import Interactive from  './store/Interactive.js';
import Search from "./store/Search.js";
import MainData from "./store/MainData.js";

export default {
    Interactive: new Interactive(),
    search: new Search(),
    MainData: new MainData(),
}