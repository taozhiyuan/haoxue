import { observable, action, computed, autorun } from "mobx";

export default class Search {
    @observable type;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable value;
    constructor() {
        this.type = true;  //初始化可监测的数据
        this.value = "";
        // autorun(() => console.log('有收到更新'));
    }
    @action changeValue(type, value){
        this.type = type;
        this.value = value;
        // console.log(this.type)
    }
}