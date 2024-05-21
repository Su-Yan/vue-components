<template>
    <div class="item-component">
        <div class="top-section">
            <p class="title">{{ props.item.projectCode }}</p>
            <img class="add-icon" src="./static/plus.png" alt="Add icon" />
        </div>
        <hr />
        <div class="bottom-section">
            <div class="left">
                <img class="circle-check-icon" :src="getPicPath(props.item.attachmentList)" alt="Status icon" />
            </div>
            <div class="middle">
                <p class="tag">{{ props.item.defectCode }}</p>
                <p class="description">{{ props.item.description }}</p>
                <p class="details">查看详情</p>
            </div>
            <div class="right" v-if="props.switchStatus">
                <img class='thumbnail' v-for="img in props.item.attachmentList" :src="img.attachmentUrl"  alt="Item image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive,onMounted } from 'vue'
import imgYes from './static/yes.png'
import imgNo from './static/no.png'

const props = defineProps<{
    item: any,
    switchStatus: boolean
}>()

function getPicPath(params: any) {
    let imgPath = params ? imgYes : imgNo;
    return imgPath;
}
</script>

<style scoped>
.item-component {
    display: flex;
    flex-direction: column;
    border: 1px;
    border-radius: 10px;
    padding: 1%;
    background-color: white;
    margin: 2% 2% 2% 2%;
}

.top-section {
    display: flex;
    justify-content: space-between;
}

.bottom-section {
    display: flex;
}

.bottom-section .left {
    display: flex;
    align-items: center;
    margin-left: 2px;
    margin-right: 4px;
}

.bottom-section .middle {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bottom-section .right {
    width: 40%;
    display: flex;
    flex-direction: row
}

.title {
    /* style as needed */
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-icon {
    /* style as needed */
    max-width: 1rem;
    max-height: 1rem;
}

.circle-check-icon {
    /* style as needed */
    max-width: 2rem;
    max-height: 2rem;
}

.tag {
    /* style as needed, should be smaller than .tag and .details */
    white-space: nowrap; /* 保证文本在一行内显示 */
    overflow: hidden;    /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 使用"..."来表示省略的文本 */
}

.details {
    /* style as needed */
    color: darkgray;
    white-space: nowrap; /* 保证文本在一行内显示 */
    overflow: hidden;    /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 使用"..."来表示省略的文本 */
}

.description {
    /* style as needed, should be smaller than .tag and .details */
    white-space: nowrap; /* 保证文本在一行内显示 */
    overflow: hidden;    /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 使用"..."来表示省略的文本 */
}

.thumbnail {
    max-width: 3rem;
    height: auto;
    margin-top: 2px;
    margin-right: 2px;
}
</style>