import { observable, useStrict, action,autorun, runInAction } from 'mobx';
import Axios from './axiosHome.js';

class AppStore {
    @observable classType = [];
    @observable courseList = [];
    @observable AgencyList = [];
    @action getData = (parame) => {
        this.classType = parame;
    };
}

const Store = new AppStore();

export default Store;
// 课程列表
// Axios.parentClassList().then((res)=>{
//     store.ClassList = res.data.result;
// }).catch((err)=>{
//     console.log(err)
// })
