<script setup>
import { ref } from 'vue';

import { Plus } from '@element-plus/icons-vue'


const imageUrl = ref('')

const Form = ref({
  clazzName: '',
  name: '',
  gender: '',
  address: "",
  email: "",
  introducation: "",
  password: "",
  portraitPath: "",
  sno: "",
  telephone: ""

})

const rules = {
        name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 5, max: 10, message: '用户名必须是 5~10位的字符', trigger: 'blur' }
        ],
        password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { pattern: /^\S{6,15}$/, message: '密码必须是6~15位 的非空字符', trigger: 'blur' }
        ],
      
}





const dialogTableVisible = ref(false)
const open = () => {
  dialogTableVisible.value = true
}

defineExpose({
  open
})



</script>


<template>
  <el-dialog v-model="dialogTableVisible" title="添加学生信息"  width='580px' >
    <el-form :model="Form"  :rules="rules" style="max-width: 480px; " label-width="100px">
      <el-form-item label="班级" prop="clazzName">
        <el-select v-model="Form.clazzName" placeholder="请选择">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="Form.name" size="large" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="Form.gender" size="large" placeholder="请选择性别">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="sno">
        <el-input v-model="Form.sno" size="large" placeholder="请输入学号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="Form.password" type="password" size="large" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="Form.email" size="large" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item label="电话" prop="telephone">
        <el-input v-model="Form.telephone" size="large" placeholder="请输入电话" />
      </el-form-item>
      <el-form-item label="住址" prop="address">
        <el-input v-model="Form.address" size="large" placeholder="请输入住址" />
      </el-form-item>
      <el-form-item label="简介" prop="introducation">
        <el-input v-model="Form.introducation" size="large" type="textarea" placeholder="请输入简介" />
      </el-form-item>
      <el-form-item label="头像" prop="pass">
        <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>


  </el-dialog>
</template>

<style scoped lang="scss">
.avatar-uploader {

// deep() 深度选择器
:deep() {
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
}
}
</style>