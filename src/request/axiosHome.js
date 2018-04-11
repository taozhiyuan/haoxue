import Mock from 'mockjs';
import Axios from 'axios';

const Random = Mock.Random;
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
        Mock.mock('/list', {
            'result|16': [{
                "fabulous|200-1000" : 1,
                "team" : "高思教育",
                "add" : "岳麓大道37号",
                "tel" : "0734-012345678",
                "popularity|10000-50000" : 1
            }]
        })
        return Axios.get('/list')
    },
    //父母课堂列表
    parentClassList : () => {
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
    //亲子课堂列表
    parentClassList : () => {
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
    detailed : () => {
        Mock.mock('/detailed', {
            'introduce': {
                "name" : "高思教育",
                "seeing" : Random.natural(6000, 10000),
                "collection" : Random.natural(2000, 3000),
                "like" : Random.natural(3000, 5000),
                "reachers" : "高思老师80%以上来自211、985重 点院校—清华、北大、人大、北航、北师、北外等名校，优秀的老师能够把知识更好地教授给学生",
                "curriculum" : "语言类-少儿英语、商务英语、英语口语、出国英语",
                "address" : "北京市北四环中路283号高思教育大厦",
                "tel" : "010-8893569",
                "text" : "高思教育立志做高品质教育,专注于中小学的课外辅导培训,提供中小学最新资讯及学习方法,家教式一对一服务,高思教育让孩子爱上学习,收获成长!从2009年底创立至今，高思从1间50平米办公室扩充为拥有11层5500多平米的现代化写字楼“高思教育大厦”，教学区由1所发展至近20所，员工由18人增长至1400多人，学员由843人增长至60000余人。所有校区都配置有现代化的教学设备，保证学生上课的质量和环境，干净整洁的教室，明亮通透的窗户，整齐崭新的桌椅，每一个细节都让家长放心， 让孩子舒心。"
            },
            "teachers|12-15" : [{
                "name" : "@cname",
                "introduce" : Random.csentence(40, 60)
            }],
            "curriculum|6-8" : [{
                "fabulous|200-1000" : 1,
                "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
            }]
        })
        return Axios.get('/detailed')
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
    // 课程详情
    courseDetails : () => {
        Mock.mock('/CourseDetails', {
            'result|3': [{
                "fabulous|200-1000" : 1,
                "name" : "SSAT1v1课程_SSAT一对一辅导辅导"
            }]
        })
        return Axios.get('/CourseDetails')
    }
}

export default AxiosHome;