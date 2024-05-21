<template>
    <!--
        该组件接收一个item对象，
        该组件分为上下两栏，
        上下两栏用横线隔开，
        上面一栏分为左右两部分，左边左对齐放title，右边右对齐放一个加号图标，
        下面一栏分为左中右三部分，
            左边放一个圆圈，如果image为空，则为空圆圈图标，如果不为空，则显示一个绿色对号图标，
            中间分为上中下三部分，上面放tag，中间放description，下面放"查看详情"，tag字号与查看详情相同，但比description小一号，
            右边用于展示图片，默认只展示两张，可以为空
    -->
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
    padding: 0.3rem;
    background-color: white;
    margin: 0.5rem;
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
    margin-left: 0.2rem;
    margin-right: 0.4rem;
}

.bottom-section .middle {
    width: 50%;
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
    margin-top: 0.1rem;
    margin-right: 0.1rem;
}
</style>