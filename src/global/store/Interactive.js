import { observable, action, computed ,autorun } from "mobx";
// 交互状态
export default class Interactive {
    @observable loading;  //请求loading
    constructor() {
        this.loading = false;  //初始化可监测的数据
    }
    @action switch(){
        this.loading = !this.loading;
    }
}