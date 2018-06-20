
// 机构分类交叉筛选
export function orgSelect( OtherId, targetId, props1, props2, data ){
    //OtherId, 另一个id号
    //targetId, 当前id号
    //props1, 第一个属性
    //props2, 第二个属性
    //data  数据
    let arr = [];
    if( OtherId===0 ){ //如果另一个id等于0
        if( targetId===0 ){ //如果当前点击的分类id等于0
            arr = data; //原路全体返回数据
        }else{
            for (let i of data) { //遍历数据每一项
                for (let j of i[props1]){ //遍历类型分类，
                    if(j===targetId){ //当前类型 满足分类项中的任意一项时
                        arr = [ ...arr, i ] //将数据填充入数据组
                    }
                }
            }
        }
    }else{ // 如果另一类id不等0
        for (let i of data) { //先筛选出符合另一类的数据
            if(i[props2] === OtherId){ // 另一类型 满足分类项中的任意一项时
                arr = [ ...arr, i ]
            }
        }
        if(targetId!==0){
            // let arrtype = [];
            for (let i of arr) { //再筛选出符合自己的数据
                for (let j of i[props1]){
                    if(j === targetId){
                        arr = [ ...arr, i ]
                    }
                }
            }
            // arr = arrtype;
        }
    }
    return arr;
}

// 课程分类交叉筛选
export function courseSelect( OtherId, targetId, props1, props2, data ){
    //OtherId, 另一个id号
    //targetId, 当前id号
    //props1, 第一个属性
    //props2, 第二个属性
    //data  数据
    let arr = [];
    if( OtherId===0 ){
        if( targetId===0 ){
            arr = data;
        }else{
            for (let i of data) {
                if(i[props1] === targetId){
                    arr = [...arr,i]
                }
            }
        }
    }else{
        for (let i of data) {
            if(i[props2] === OtherId){
                arr = [...arr,i]
            }
        }
        if(targetId!==0){
            let arrtype = [];
            for (let i of arr) {
                if(i[props1] === targetId){
                    arrtype = [...arrtype,i]
                }
            }
            arr = arrtype;
        }
    }
    return arr;
}

//数据排序
export function sort( arrt, id ){
    const compare = (obj1, obj2) => {
        const val1 = obj1[arrt[id]];
        const val2 = obj2[arrt[id]];
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }            
    }
}