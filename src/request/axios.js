import Axios from 'axios';
const AxiosHome = {
    //机构列表
    MechanismList : () => {
        return Axios({
            method:"get",
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgAll',
            withCredentials: true
        });
    },
    // //内容分类 
    // contentType : () => {
    //     Axios({
    //         method:"get",
    //         url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/commClassify/getCommClassifyAll',
    //         withCredentials: true
    //     }).then((res)=>{
    //         return res.data.result;
    //     });
    // },
    // //父母课堂列表
    // parentClassList : () => {
    //     Axios({
    //         method:"get",
    //         url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyCourse/getAgencyCourseAll',
    //         withCredentials: true
    //     }).then((res)=>{
    //         return res.data.result;
    //     });
    // }
}

export default AxiosHome;