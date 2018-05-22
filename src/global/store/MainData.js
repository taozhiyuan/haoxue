import { observable, action, computed, autorun } from "mobx";
import Axios from '../axios.js';

export default class MainData {
    @observable data=[];
    @observable childType=[];
    @observable parentType=[];
    constructor(){
        // autorun(() => console.log(this.data));
    }
    @computed get childData() {
    	return this.data.filter(
			item => item.courseType === "child"
		);
    }
    @computed get parentData() {
    	return this.data.filter(
			item => item.courseType === "parent"
		);
    }
}
