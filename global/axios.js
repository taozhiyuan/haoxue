
import Axios from './axiosPublic'

const imgPath = process.env.NODE_ENV === "development"?
                "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/":
                "http://hxj-oss-prod.oss-cn-shenzhen.aliyuncs.com/";

export { imgPath };

const data = {
    //机构列表
    getAgencyOrgAll : () => {
        return Axios({
            method: "get",
            url:'/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgAll'
        });
    },
    //内容分类 
    getCommClassifyAll : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-agency-noauthority-ui/commClassify/getCommClassifyAll',
            params
        });
    },
    //课堂列表
    getAgencyCourseAll : (params) => {
        return Axios({
            method: "get",
            url:'/hxj-agency-noauthority-ui/agencyCourse/getAgencyCourseAll',
            params
        });
    },
    //机构介绍
    getAgencyOrgDetail : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgDetail',
            params : params,
        });
    },
    // 课程详情
    getAgencyCourseDetail : ( params ) => {
        return Axios({
            method: "get",
            url: '/hxj-agency-noauthority-ui/agencyCourse/getAgencyCourseDetail',
            params : params
        });
    },
    // 文章列表接口
    getArticleList : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-base-noauthority-ui/article/getArticleList',
            params : params,
        });
    },
    // 主页-推荐课程 from   首页推送课程、机构-接口
    getPushList : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-agency-noauthority-ui/push/getPushList',
            params : params,
        });
    },
    // 机构老师列表 from   机构所属老师
    AgencyTeacherList : (params) => {
        return Axios({
            method:"get",
            url:'/teacher-noauthority-ui/teacher/queryTeacherAll',
            params : params,
        });
    },
    // 课程老师列表
    courseTeacherList : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-teacher-noauthority-ui/teacher/queryTeacherCourse',
            params : params,
        });
    },
    // 老师详情
    TeacherDetailed : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-teacher-noauthority-ui/teacher/queryTeacher',
            params : params,
        });
    },
    // 我的收藏
    Collection : (token) => {
        return Axios.get(`/hxj-agency-ui/agencyCollection/queryAgencyCollection?access_token=${token.access_token}`);
    },
    // 我的学习
    study : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-agency-ui/courseReserve/getUserCourseAll',
            params
        });
    },
    // 获取手机验证码
    getMobileCode : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-base-ui/code/sms',
            params : params,
            headers : { deviceId : window.returnCitySN["cip"] }
        });
    },
    // 获取图形验证码
    getGraphicCode : (params) => {
        return Axios({
            method: "get",
            // url: `/hxj-agency-ui/code/image?deviceId=${window.returnCitySN["cip"]}&width=90&height=36`,
            url: "/hxj-agency-ui/code/image",
            params : {
                width : 90,
                height : 36
            },
            headers : {
                Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
                deviceId : params
            }
        });
    },
    // 注册=》异步验证 手机是否重复
    VerificationMobile : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-base-noauthority-ui/user/checkLoginUser',
            params : params,
        });
    },
    // 用户注册
    UserRegist : (params) => {
        return Axios.post('/hxj-base-ui/user/registered', params);
    },
    // 用户登录
    SignIn : (params) => {
        return Axios({
            method: "post",
            url: `/hxj-base-ui/admin/admin?deviceId=${window.returnCitySN["cip"]}&hxjAuth=Basic aHh3Omh4d1NlY3JldA==`,
            // url: `/hxj-base-ui/admin/admin`,
            params
            // headers : {
            //     // deviceId : window.returnCitySN["cip"],
            //     hxjAuth : "Basic aHh3Omh4d1NlY3JldA=="
            // }
        });
    },
    // 用户完善信息
    PerfectInfo : (params) => {
        return Axios({
            method: "post",
            url: `/hxj-base-ui/user/updateUser?access_token=${params.access_token}`,
            data : params,
        });
    }, 
    // 查询个人信息
    queryInfo : (params) => {
        return Axios({
            method:"get",
            url:'/hxj-base-ui/user/getLoginUser',
            params : params,
        });
    }, 
    // 课程预定人信息
    ReservationInfo : (params) => {
        return Axios({
            method: "post",
            url: `/hxj-agency-ui/courseReserve/insertCourseReserve?access_token=${params.access_token}`,
            data : params.form
        });
    }, 
    // 类似课程
    pushAgencyCourse : (params) => {
        return Axios({
            method: "get",
            url:'/hxj-agency-noauthority-ui/agencyCourse/pushAgencyCourse',
            params : params,
        });
    }, 
    // 收藏课程
    collectionCourse : (params, token) => {
        return Axios.post(`/hxj-agency-ui/agencyCollection/insertAgencyCollection?access_token=${token.access_token}`, params);
    }, 
    // 取消收藏课程
    cancelCollectionCourse : (params, token) => {
        return Axios.post(`/hxj-agency-ui/agencyCollection/cancelCollection?access_token=${token.access_token}`, params);
    },
    // 获取收藏状态
    CollectionState : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-agency-ui/agencyCollection/queryCollectionState',
            params : {
                access_token : params.token,
                id : params.id
            }
        });
    },
    // 头像上传
    PictureUpload : (token, params) => {
        let config = { headers: {'Content-Type': 'multipart/form-data'}}
        return Axios({
            method: "post",
            url: '/hxj-base-ui/user/headImage?access_token='+sessionStorage.getItem("access_token"),
            data : params.param,
            config
        })
    },
    // 注册短信验证码验证
    SMSVerification : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-base-ui/code/validate/sms',
            params,
            headers : { deviceId : window.returnCitySN["cip"] }
        })
    },
    // 文章详情
    DetailsArticle : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-base-noauthority-ui/article/getArticleOne',
            params
        })
    },
    // 类似机构
    pushAgencyOrg : (params) => {
        return Axios({
            method: "get",
            url: '/hxj-agency-noauthority-ui/agencyOrg/pushAgencyOrg',
            params
        })
    },
    // 点赞
    GiveThumbs : (data) => {
        return Axios({
            method: "post",
            url: `/hxj-agency-ui/agencyPraise/insertAgencyPraise?access_token=${data.access_token}`,
            data,
            headers : {
                deviceId : 'hxj'
            }
        })
    },
    // 点赞状态
    GiveThumbsState : (params) => {
        return Axios({
            method: "get",
            url: "/hxj-agency-ui/agencyPraise/queryAgencyPraise",
            params
        })
    },
    // 获取富文本
    getStringByKey : (params) => {
        return Axios({
            method: "get",
            url: "/hxj-base-noauthority-ui/util/getStringByKey",
            params
        })
    },
    // 视频列表
    getVideoManager : (params) => {
        return Axios({
            method: "get",
            url: "/hxj-agency-noauthority-ui/videoManager/getVideoManager",
            params
        })
    },
    // 搜索
    commonQuery : (params) => {
        return Axios({
            method: "get",
            url: "/hxj-agency-noauthority-ui/common/commonQuery",
            params
        })
    },
    // 文章类型
    getAriticleTypeList : (params) => {
        return Axios({
            method: "get",
            url: "/hxj-base-noauthority-ui/articleType/getAriticleTypeList",
            params
        })
    }
}

export default data;