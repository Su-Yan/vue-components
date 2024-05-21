<template>
    <!--该组件分为三个div区域-->

    <!--
        第一个div区域从dataShowByRow获取数据，这些数据一行可以展示完
    -->
    <div class="row-class" v-for="(value, key) in dataShowByRow">
        <p class="title">{{ value }}</p>
        <p class="text-class">{{ props.item[key] }}</p>
    </div>
    <!--
        第二个div从dataShowByColumn获取数据，这些数据一行展示不完，标题和内容分开
    -->
    <div class="column-class" v-for="(value, key) in dataShowByColumn">
        <p class="title">{{ value }}</p>
        <p class="text-class">{{ props.item[key] }}</p>
    </div>
    <!--
        第三个div区域为附件展示区域
        每一个图片展示又分为左中右三个部分
    -->
    <div class="column-class" v-for="(value, key) in dataShowByAttachmentList">
        <div class="row-class">
            <p class="title">{{ value }}</p>
            <img class="add-icon" src="./static/plus.png" alt="Add icon" />
        </div>
        <div class="attachment-section"  v-for="img in props.item[key]">
            <div class="left">
                <img class='thumbnail' :src="img.attachmentUrl" alt="Item image" />
            </div>
            <div class="middle">
                <p>{{ img.attachmentName }}</p>
            </div>
            <div class="right">
                <img class="add-icon" src="./static/delete.png" alt="Add icon" />
            </div>
        </div>
    </div>
    <button class="submit-button">提交</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps<{
    item: any
}>()

const dataShowByRow = reactive({
    "projectCode": "项目编号",
    "defectCode": "缺陷ID",
    "statusName": "缺陷状态",
    "severityLevelName": "严重程度"
})

const dataShowByColumn = reactive({
    "description": "缺陷描述"
})

const dataShowByAttachmentList = reactive({
    "attachmentList": "附件"
})

</script>

<style scoped>
.row-class {
    background-color: white;
    margin-top: 0.5rem;
    margin-bottom:  0.5rem;
    padding:  0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.column-class {
    background-color: white;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: bold;
}

.text-class {
    color: darkgray;
}

.thumbnail {
    max-width: 3rem;
    height: auto;
    margin-right: 0.5rem;
}

.add-icon {
    /* style as needed */
    max-width: 1rem;
    max-height: 1rem;
}

.attachment-section {
    background-color: #e6e6e6;
    border-radius: 0.3rem;
    margin: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem
}

.attachment-section .middle {
    font-size: 0.7rem;
    margin-right: 1rem !important;
}

.attachment-section .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.submit-button {
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #5C8AE7;
    width: 100%;
    height: 2rem;
    border-radius: 0.3rem;
    border: 0;
    align-self: center
}
</style>