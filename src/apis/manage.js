import httpInstance from '@/utils/http.js'

// 获取学生数据
export const getStudentDataAPI = ({pn,pageSize,clazzName,name}) =>{
    return httpInstance({
        url:'/sms/studentController/getStudentByOpr/'+pn+'/'+pageSize,
        params:{clazzName,name}
    })
}

// 获取所有班级数据
export const getClassDataAPI = () =>{
    return httpInstance({
        url:'/sms/clazzController/getClazzs',
    })
}