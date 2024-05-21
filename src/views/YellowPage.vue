<template>
    <div class="outside">
        <!--
        <ShowItem :item="item" :switchStatus="true"></ShowItem>
        <ShowItem :item="item" :switchStatus="true"></ShowItem>
        <ShowItem :item="item" :switchStatus="true"></ShowItem>
        -->
        <DefectDetail :item="item"></DefectDetail>
    </div>
</template>

<script setup lang="ts">
import ShowItem from '@/components/cart/ShowItem.vue'
import DefectDetail from '@/components/defectDetail/DefectDetail.vue'
import { reactive } from 'vue'

const item = reactive({
    "id": 1305,
    "attachmentList": [
        {
            "id": 1337,
            "testDefectId": 1316,
            "attachmentName": "机器清单.jpg",
            "attachmentUrl": "https://img2.baidu.com/it/u=256816879,771155532&fm=253&fmt=auto&app=120&f=JPEG?w=1204&h=800",
            "fileUploadTime": "2024-05-17 18:50:41",
            "createTime": "2024-05-17 18:50:52",
            "createUser": "1133428127104634880",
            "createUserName": "闫肃"
        },
        {
            "id": 1337,
            "testDefectId": 1316,
            "attachmentName": "机器清单.jpg",
            "attachmentUrl": "https://img2.baidu.com/it/u=256816879,771155532&fm=253&fmt=auto&app=120&f=JPEG?w=1204&h=800",
            "fileUploadTime": "2024-05-17 18:50:41",
            "createTime": "2024-05-17 18:50:52",
            "createUser": "1133428127104634880",
            "createUserName": "闫肃"
        },
        {
            "id": 1337,
            "testDefectId": 1316,
            "attachmentName": "机器清单.jpg",
            "attachmentUrl": "https://img2.baidu.com/it/u=256816879,771155532&fm=253&fmt=auto&app=120&f=JPEG?w=1204&h=800",
            "fileUploadTime": "2024-05-17 18:50:41",
            "createTime": "2024-05-17 18:50:52",
            "createUser": "1133428127104634880",
            "createUserName": "闫肃"
        }
    ],
    "defectCode": "q202403000061",
    "projectCode": "YWYH20230000101",
    "projectName": null,
    "systemId": "NCBS",
    "systemName": "新核心业务系统",
    "systemCode": null,
    "systemGroup": "基础系统开发组",
    "status": 2,
    "statusName": "延期处理",
    "defectType": 2,
    "testType": 0,
    "testTypeName": "功能测试",
    "defectTypeName": "代码缺陷",
    "severityLevel": 3,
    "severityLevelName": "一般",
    "testPhase": 6,
    "testPhaseName": "单元测试",
    "priority": 2,
    "priorityName": "中",
    "subjectType": null,
    "subjectTypeName": null,
    "testRound": 1,
    "testRoundName": "第一轮",
    "name": "0325-延期处dfasdfsafasdfsdfasfaefefa理缺陷验证",
    "description": "0325-延期处adsfasdfasfeawefewfwa理缺陷验证",
    "handlerUserId": "1108059398611275776",
    "handlerUserName": "李萍萍",
    "developUserId": "1108059398611275776",
    "developUserName": "李萍萍",
    "defectComment": "1",
    "cause": null,
    "causeName": null,
    "rejectCause": null,
    "rejectCauseName": null,
    "remark": null,
    "otherCause": null,
    "rejectOtherCause": null,
    "handlingTimeoutTime": null,
    "handlingTimeoutTimeHourStr": null,
    "handlingTime": null,
    "handlingTimeHourStr": null,
    "reopenCount": 0,
    "createUser": "1108043927891611648",
    "createUserName": "赵娟",
    "updateUser": "1108042820712796160",
    "updateUserName": null,
    "closedTime": null,
    "createTime": "2024-03-25 18:13:43",
    "updateTime": "2024-03-25 18:16:02",
    "projectManagerName": null,
    "log": null,
    "isManager": null
})
</script>

<style scoped>
.outside {
    background-color: #F5F6F8;
}
</style>