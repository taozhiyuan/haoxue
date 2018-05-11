import { observable, action, computed ,autorun } from "mobx";

export default class test_store {
    @observable inputValue1;  //observable data 注册一个数据，这个数据将会成为一个可mobx监测的数据
    @observable inputValue2;
    @observable childValue;
    constructor() {
        this.inputValue1="sdfsdf";  //初始化可监测的数据
        this.inputValue2="what";
        this.fullValue="why?";
        this.childValue="this";
        autorun(() => console.log('有收到更新'));
    }
    @action changeValue(event){  //注册action ,action里面可以改变mobx注册的数据,从而改变store里的数据
        // let tar=e.currentTarget;
        // let val=Math.abs(tar.value);
        // if(tar.name=='val1'){
        //     this.inputValue1=val;
        // }else if(tar.name=='val2'){
        //     this.inputValue2=val;
        // }
        this.inputValue2 = "val";
        console.log(event.target.name)
    }

    @computed get sum(){ //computed 是自动监测已注册的数据，如果已注册的数据有改变自动执行这个函数
        this.fullValue=this.inputValue1+this.inputValue2;
        console.log(this.fullValue)
        return this.fullValue;
    }
    @action childEvent(){
        this.childValue=this.childValue+3;
    }
}