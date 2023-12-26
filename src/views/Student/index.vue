<script setup>
import { Delete, Plus, Search, Shop } from '@element-plus/icons-vue'
import { getStudentDataAPI, getClassDataAPI } from '@/apis/manage.js'
import { onMounted, ref } from 'vue';
import AddStudent from './Components/AddStudent.vue'


// 接收班级数据
const classData = ref({})
// 获取班级数据
const getClassData = async () => {
    const res = await getClassDataAPI()
    classData.value = res.data
}


// 定义请求参数对象
const params = ref({
    pn: 1, // 当前页
    pageSize: 3, // 当前生效的每页条数
    clazzName: '',
    name: ''
})
// 接收学生数据
const studentData = ref({})
// 获取学生数据
const getStudentData = async () => {
    const res = await getStudentDataAPI(params.value)
    console.log(res);
    studentData.value = res.data
}
const onSizeChange = (size) => {
    params.value.pageSize = size
    getStudentData()
}

const onCurrentChange = (page) => {
    params.value.pn = page
    getStudentData()
}


// 搜索查询数据
const onSearch = () => {
    params.value.pn = 1
    getStudentData()

}

const onReset = () => {
    params.value.pn = 1
    params.value.pageSize = 3
    params.value.name = ''
    params.value.clazzName = ''
    getStudentData()
}


const addStudentRef =ref()
// 添加学生
const onAddStudent = ()=>{
    addStudentRef.value.open()
}


onMounted(() => {
    getStudentData()
    getClassData()
})





</script>


<template>
    <div class="student-container">
        <el-form :model="form" inline>
            <el-form-item>
                <el-button type="primary"  @click="onAddStudent" :icon="Plus">添加</el-button>
                <el-button type="danger" :icon="Delete">批量删除</el-button>
            </el-form-item>

            <el-form-item label="班级:">
                <!-- 这里后台标记发布状态,就是通过中文标记的,已发布/草稿 -->
                <el-select placeholder="请选择:" v-model="params.clazzName">
                    <el-option v-for="item in classData" :key="item.name" :label="item.name" :value="item.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学生姓名:">
                <el-input v-model="params.name" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSearch" :icon="Search">搜索</el-button>
                <el-button type="info" @click="onReset" :icon="Shop">重置</el-button>
            </el-form-item>
        </el-form>

        <el-table border :data="studentData.records" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="clazzName" label="所属班级" width="150" />
            <el-table-column prop="name" label="姓名" width="120" />
            <el-table-column prop="sno" label="学号" width="120" />
            <el-table-column prop="gender" label="性别" width="120" />
            <el-table-column prop="email" label="邮箱" width="220" />
            <el-table-column prop="telephone" label="电话" width="120" />
            <el-table-column prop="address" label="住址" width="120" />
            <el-table-column prop="introducation" label="介绍" width="220" />
            <el-table-column prop="portraitPath" label="头像" width="120">
                <template #default="scope">
                    <img :src="scope.row.portraitPath" alt="用户头像">
                    <!-- <div>{{ scope.row.portraitPath }}</div> -->
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="160">
                <template #default>
                    <el-button type="warning">修改</el-button>
                    <el-button type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination v-model:current-page="studentData.current" v-model:page-size="params.pageSize"
            :page-sizes="[2, 3, 5, 10]" :small="small" background layout="jumper,total, sizes, prev, pager, next"
            :total="studentData.total" @size-change="onSizeChange" @current-change="onCurrentChange"
            style="margin-top: 20px; justify-content: center;" />

        <Add-Student ref="addStudentRef"></Add-Student>
    </div>
</template>

<style scoped lang="scss">
.student-container {
    // height: 100%;
    box-shadow: 0 0 9px 1px rgb(231, 229, 229);

    padding: 25px 15px;

    :deep(.el-form-item__label) {
        font-weight: 600 !important;
    }

    .el-page {
        margin-top: 20px;
    }
}
</style>