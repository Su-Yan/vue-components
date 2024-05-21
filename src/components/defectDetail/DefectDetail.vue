<template>
    <div class="row-class" v-for="(value, key) in dataShowByRow">
        <p class="title">{{ value }}</p>
        <p class="text-class">{{ props.item[key] }}</p>
    </div>
    <div class="column-class" v-for="(value, key) in dataShowByColumn">
        <p class="title">{{ value }}</p>
        <p class="text-class">{{ props.item[key] }}</p>
    </div>
    <div class="column-class" v-for="(value, key) in dataShowByAttachmentList">
        <div class="row-class">
            <p class="title">{{ value }}</p>
            <img class="add-icon" src="./static/plus.png" alt="Add icon" />
        </div>
        <img class='thumbnail' v-for="img in props.item[key]" :src="img.attachmentUrl" alt="Item image" />
    </div>
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
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 2%;
    display: flex;
    justify-content: space-between;
}

.column-class {
    background-color: white;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 2%;
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
    margin-top: 2px;
    margin-right: 2px;
}

.add-icon {
    /* style as needed */
    max-width: 1rem;
    max-height: 1rem;
}
</style>