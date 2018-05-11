
//mobx 状态总仓库 ==》所有全局状态由这里输出
import TestStore from  './store/test_store.js';
import Search from "./store/Search.js";

export default {
    testStore: new TestStore(),
    search: new Search()
}