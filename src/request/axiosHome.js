import Mock from 'mockjs';
import Axios from 'axios';

const Random = Mock.Random;
// const imgPrefix = "http://hxj-oss-bucket.oss-cn-shenzhen.aliyuncs.com/";
const AxiosHome = {
    classRoom : () => {
        //主页课程列表
        Mock.mock('/classRoom', {
            'result|10': [{
                "collection" : 678,
                "name" : "SSAT1V1课程_SSAT一对一辅导课程",
                "price" : "价格：5999元",
                "team" : "高思教育"
            }]
        })
        return Axios.get('/classRoom')
    },
    //主页新闻列表
    news : () => {
        Mock.mock('/news', {
            'result|6': [{
                "title" : "高中语文怎么学？人大附中名师带你走进古典说诗词写作",
                "time" : "2018-03-21"
            }]
        })
        return Axios.get('/news')
    },
    //机构列表
    MechanismList : () => {
        // areaId  —— 地区id
        // classId  —— 分类id
        // address  —— 地址
        // praise  —— 点赞
        // name  —— 机构名字
        // tel  —— 电话
        // popularity —— 人气
        // imgUrl  —— 图片链接

        // area:"430104"
        // orgAddressDetail:"岳麓大道37号"
        // orgClassify:"string3"
        // orgName:"高思教育"
        // orgPhone:"0734-0123456789"
        // photoOsskey:"png/admin/20180416/152385113659231741.png"
        // praise: 0
        // scale: 0

        // 430102: '芙蓉区',
        // 430103: '天心区',
        // 430104: '岳麓区',
        // 430105: '开福区',
        // 430111: '雨花区',
        // 430112: '望城区',
        // 430121: '长沙县',
        // 430124: '宁乡县',
        // 430181: '浏阳市'

        // Mock.mock('/list', {
        //     'result|136': [{
        //         "synthesiss|500-1000" : 1,//综合
        //         "area|0-9" : 1,  //区域
        //         "scale|200-1000" : 1, //规模
        //         "like|200-1000" : 1, //点赞
        //         "orgName" : "高思教育", //机构名字
        //         "orgAddressDetail" : "岳麓大道37号", //地址
        //         "orgPhone" : "0734-012345678", //电话
        //         "praise|1000-5000" : 1, //好评
        //         "browsing|10000-50000" : 1, //人气
        //         "orgClassify|0-8": 1, //机构分类
        //         "photoOsskey" : "png/admin/20180416/152385113659231741.png" //照片
        //     }]
        // })
        // return Axios.get('/list')
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgAll',
            withCredentials: true
        });
    },
    //内容分类 
    contentType : () => {
        return Axios({
            method:"get",
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/commClassify/getCommClassifyAll',
            withCredentials: true
        });
    },
    //父母课堂列表
    parentClassList : () => {
        // Mock.mock('/parent', {
        //     'result|20': [{
        //         "browsing|200-1000" : 1,
        //         "orgName|5000-10000" : 1,
        //         "orgName" : "高思教育",
        //         "courseName" : "SSAT1v1课程_SSAT一对一辅导辅导"
        //     }]
        // })
        // return Axios.get('/parent')
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyCourse/getAgencyCourseAll',
            withCredentials: true
        });
    },
    //亲子课堂列表
    childClassList : () => {
        Mock.mock('/parent', {
            'result|20': [{
                "fabulous|200-1000" : 1,
                "price|5000-10000" : 1,
                "team" : "高思教育",
                "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
            }]
        })
        return Axios.get('/parent')
    },
    //机构介绍
    AgencyDetailed : (params) => {
        Mock.mock('/detailed', {
            // 'introduce': {
            //     "name" : "高思教育",
            //     "seeing" : Random.natural(6000, 10000),
            //     "collection" : Random.natural(2000, 3000),
            //     "like" : Random.natural(3000, 5000),
            //     "reachers" : "高思老师80%以上来自211、985重 点院校—清华、北大、人大、北航、北师、北外等名校，优秀的老师能够把知识更好地教授给学生",
            //     "curriculum" : "语言类-少儿英语、商务英语、英语口语、出国英语",
            //     "address" : "北京市北四环中路283号高思教育大厦",
            //     "tel" : "010-8893569",
            //     "text" : "高思教育立志做高品质教育,专注于中小学的课外辅导培训,提供中小学最新资讯及学习方法,家教式一对一服务,高思教育让孩子爱上学习,收获成长!从2009年底创立至今，高思从1间50平米办公室扩充为拥有11层5500多平米的现代化写字楼“高思教育大厦”，教学区由1所发展至近20所，员工由18人增长至1400多人，学员由843人增长至60000余人。所有校区都配置有现代化的教学设备，保证学生上课的质量和环境，干净整洁的教室，明亮通透的窗户，整齐崭新的桌椅，每一个细节都让家长放心， 让孩子舒心。"
            // },
            "teachers|12-15" : [{
                "name" : "@cname",
                "introduce" : Random.csentence(40, 60)
            }],
            "curriculum|6-8" : [{
                "fabulous|200-1000" : 1,
                "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
            }],
            "other|4" : ["新东方教育"]
        })
        return Axios.get('/detailed')
        // return Axios({
        //     method:"get",
        //     // baseURL:'http://120.79.247.254:1111/',
        //     url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgDetail',
        //     withCredentials: true,
        //     params : params,
        // });
    },
    //机构介绍--服务器数据
    AgencyDetailedServer : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyOrg/getAgencyOrgDetail',
            withCredentials: true,
            params : params,
        });
    },
    //机构课程列表
    coursesList : () => {
        Mock.mock('/coursesList', {
            'result|20': [{
                "fabulous|200-1000" : 1,
                "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
            }]
        })
        return Axios.get('/coursesList')
    },
    //全部师资列表
    teacherList : () => {
        Mock.mock('/coursesList', {
            'result|20': [{
                "name" : "@cname",
                "introduce" : Random.csentence(40, 60)
            }]
        })
        return Axios.get('/coursesList')
    },
    // 课程详情
    courseDetails : ( params ) => {
        // Mock.mock('/CourseDetails', {
        //     'result|3': [{
        //         "fabulous|200-1000" : 1,
        //         "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
        //     }]
        // })
        // return Axios.get('/CourseDetails')
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/agencyCourse/getAgencyCourseDetail',
            withCredentials: true,
            params : params
        });
    },
    // 关于我们-功能特色
    characterist : (params) => {
        // Mock.mock('/characterist', {
        //     'result|10': [{
        //         "title" : "国际视野",
        //         "text" : "与韦氏、SCL90心理测评、FDSP、C8HR、惠诚等数十家国内外顶尖测评机构深度战略合作。"
        //     }]
        // })
        // return Axios.get('/characterist')
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-noauthority-ui/article/getArticleList',
            withCredentials: true,
            params : params
        });
    },
    // 主页-资讯 form  文章列表接口
    homeInformation : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-noauthority-ui/article/getArticleList',
            withCredentials: true,
            params : params,
        });
    },
    // 主页-推荐课程 from   首页推送课程、机构-接口
    recommend : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-noauthority-ui/push/getPushList',
            withCredentials: true,
            params : params,
        });
    },
    // 机构老师列表 from   机构所属老师
    AgencyTeacherList : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/teacher-noauthority-ui/teacher/queryTeacherAll',
            withCredentials: true,
            params : params,
        });
    },
    // 课程老师列表
    courseTeacherList : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-teacher-noauthority-ui/teacher/queryTeacherCourse',
            withCredentials: true,
            params : params,
        });
    },
    // 老师详情
    TeacherDetailed : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-teacher-noauthority-ui/teacher/queryTeacher',
            withCredentials: true,
            params : params,
        });
    },
    // 我的收藏
    Collection : (params) => {
        // Mock.mock('/collection', {
        //     'result|30': [{
        //         "name" : "SSAT1v1课程_SSAT一对一辅导辅导",
        //         "price|100-500" : 1,//价格
        //         "purchase|500-1000" : 1,//已购
        //         "like|10-50" : 1,
        //         "add" : "岳麓大道",
        //         "time" : "3月6日-6月19日;每周二下午13:30-15:20",
        //         "tel" : "012345678",
        //         "courseid" : '9',
        //         "type|1" : ['course', 'agency']
        //     }]
        // })
        // return Axios.get('/collection')
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-agency-ui/agencyCollection/queryAgencyCollection',
            withCredentials: true,
            params : params,
        });
    },
    // 获取手机验证码
    getMobileCode : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            // url:'http://120.79.247.254:1111/hxj-base-ui/code/sms?mobile=13950128774',
            url:'http://192.192.168.11:8113/code/sms?mobile=13950128774',
            withCredentials: true,
            // params : params,
            // headers: {
            //     deviceId :'hxj'
            // },
            // auth: {
            //     deviceId : "hxj"
            // }
        });
    },
    // 获取图形验证码
    getGraphicCode : (params) => {
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            // url:'http://120.79.247.254:1111/hxj-base-ui/code/sms?mobile=13950128774',
            url:'http://120.79.247.254:1111/hxj-base-ui/code/image',
            withCredentials: true,
            // params : params,
            // headers: {
            //     deviceId :'hxj'
            // },
            // auth: {
            //     deviceId : "hxj"
            // }
        });
    },
    // 注册=》异步验证 手机是否重复
    VerificationMobile : (params) => {
        console.log(params)
        return Axios({
            method:"get",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-noauthority-ui/user/checkLoginUser',
            withCredentials: true,
            params : params,
        });
    },
    // 用户注册
    UserRegist : (params) => {
        return Axios({
            method:"post",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-ui/user/registered',
            withCredentials: true,
            params : params,
        });
    },
    // 用户登录
    UserRegist : (params) => {
        return Axios({
            method:"post",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-ui/admin/admin',
            withCredentials: true,
            params : params,
            headers: {
                hxjAuth : 'Basic aHh3Omh4d1NlY3JldA==',
                deviceId :'hxj'
            },
        });
    },
    // 用户完善信息
    perfectInfo : (params) => {
        return Axios({
            method:"post",
            // baseURL:'http://120.79.247.254:1111/',
            url:'http://120.79.247.254:1111/hxj-base-ui/user/updateUser',
            withCredentials: true,
            params : params,
        });
    },
}

export default AxiosHome;