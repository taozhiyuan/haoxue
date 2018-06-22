import Axios from './axiosPublic'

const data = {
    // 上传机构图标
    orgLogoUpload : (params) => {
        return Axios({
            method: "post",
            url: '/hxj-base-noauthority-ui/uploadOssRich/orgLogoImage',
            data : params.file,
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    // 机构--获取手机验证码
    orgVerificationCode: (params) => {
        return Axios({
            method: "get",
            url: 'hxj-agency-ui/code/sms',
            params : params,
            headers : { deviceId : 'hxj' }
        });
    },
    // 获取机构分类
    orgTypes: params => {
        return Axios({
            method: "get",
            url: 'hxj-agency-noauthority-ui/commClassify/getCommClassifyAll',
            params : params
        }); 
    },
    // 上传富文本图片
    orgContext: params => {
        return Axios({
            method: "post",
            url: '/hxj-base-noauthority-ui/uploadOssRich/orgLogoImage',
            data : params.file,
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    // 上传富文本内容到Oss以获取富文本key
    orgRichContextToOss: params => {
        return Axios({
            method: "post",
            url: '/hxj-base-noauthority-ui/uploadOssRich/uploadOssString',
            data : params
        })
    },
    // 提交机构所有资料
    orgInfoConfirmJoin: params => {
        return Axios({
            method: "post",
            url: '/hxj-agency-ui/agencyOrg/orgInfoConfirmJoin',
            data : params
        })
    }
}

export default data;