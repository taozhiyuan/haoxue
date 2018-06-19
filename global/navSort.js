
// 分类交叉筛选
export function select( OtherId, targetId, props1, props2, data ){
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