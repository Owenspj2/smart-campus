<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { SwitchButton, User, UserFilled, HomeFilled, CaretBottom, Avatar } from '@element-plus/icons-vue'
import avater from '@/assets/images/default.jpg'
import {useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router=useRouter()

const tags = ref(['首页'])








onMounted(()=>{
   
    
})









</script>


<template>
    <div>
        <el-container class="layout-container">
            <el-aside width="230px" class="el-aside">
                <div class="top-name">
                    <img class="logo" src="@/assets/images/default.jpg" alt="">
                    <h2 class="title">智慧校园管理系统</h2>
                </div>
                <el-menu    background-color="#232323" text-color="#fff" :default-active="$route.path" router>
                    <el-menu-item title="首页" index="/index">
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="/student/manage"   >
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>学生管理</span>
                    </el-menu-item>
                    <el-menu-item index="/teacher/manage">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>教师管理</span>
                    </el-menu-item>
                    <el-menu-item index="/class/manage">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>班级管理</span>
                    </el-menu-item>
                    <el-menu-item index="/grader/manage">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        <span>年级管理</span>
                    </el-menu-item>
                    <el-menu-item index="/user/manage">
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        <span>个人信息管理</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="header-top">
                        <el-breadcrumb separator="/" class="el-breadcrumb">
                            <el-breadcrumb-item  :to="{ path: '/' }"><span >首页</span></el-breadcrumb-item>
                            <el-breadcrumb-item><span class="text" >{{ $route.meta.title }}</span></el-breadcrumb-item>
                        </el-breadcrumb>

                        <div class="header-right">
                            <div class="header-title">管理员:</div>
                            <div class="header-name">&nbsp;admin</div>
                            <el-dropdown placement="bottom-end">
                                <!-- 展示给用户默认看到的 -->

                                <div class="el-dropdown__box">

                                    <el-avatar :src="avater" />
                                    <el-icon>
                                        <CaretBottom />
                                    </el-icon>
                                </div>
                                <!-- 折叠的下拉部分 -->
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item command="profile" :icon="User">基本资料</el-dropdown-item>
                                        <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="header-nav">
                        <el-tag class="el-tag"   v-for="tag in tags" type="success" closable >{{ tag }}</el-tag>
                        <el-tag class="el-tag"   v-for="tag in tags" type="success" closable >{{ tag }}</el-tag>
                    </div>

                </el-header>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
.layout-container {
    height: 100vh;

    .el-aside {
        background-color: #232323;

        .top-name {
            display: flex;
            background-color: rgb(63, 52, 54);
            align-items: center;
            justify-content: center;
            height: 70px;

            .logo {
                width: 35px;
                height: 35px;
                margin-right: 10px;
                border-radius: 50%;

            }

            .title {
                color: #fff;
                font-size: 18px;
            }
        }
    }

    .el-container {
        .el-header {
            background-color: #fff;
            border-radius: 10px;
            height: 90px;
            padding: 0;
            box-shadow: 0 2px 3px rgba(5, 5, 5, 0.08);



            .header-top {
                height: 50px;
                background-color: #fff;
                display: flex;
                align-items: center;
                box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
                justify-content: space-between;

                .el-breadcrumb {
                    margin-left: 30px;

                    .el-breadcrumb__item {
                        
                        .text{
                            font-size: 15px;
                           
                        }

                        
                    }
                    .el-breadcrumb__separator {
                            margin-left: 50px;
                        } 

                }
                


                .header-right {
                    display: flex;
                    align-items: center;
                    margin-right: 15px;

                    .el-dropdown__box {
                        display: flex;
                        align-items: center;
                        margin-left: 10px;

                        .el-icon {
                            cursor: pointer;
                            color: #999;
                            // margin-left: 10px;
                        }

                        &:active,
                        &:focus {
                            outline: none;
                        }
                    }
                }





            }

            .header-nav{
                margin-top: 6px;
                .el-tag{
                    height: 28px;
                    margin-left: 8px;
                    border-radius: 0;
                    // background-color: #232323;
                    
                }
                & .el-tag:first-child{
                    margin-left: 20px;
                }
            }
           
        }
    }



}
</style>